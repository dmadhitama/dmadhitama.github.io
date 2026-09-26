export interface SkillGroup {
  name: string;
  items: string[];
}

export function parseSkillGroups(markdown: string): SkillGroup[] {
  const groups: SkillGroup[] = [];
  const pattern = /^\s*-\s+\*\*(.+?):?\*\*:?\s*(.+)$/;
  for (const line of markdown.split("\n")) {
    const match = line.match(pattern);
    if (!match) continue;
    groups.push({
      name: match[1].replace(/:$/, "").trim(),
      items: match[2].split(",").map((item) => item.trim()).filter(Boolean),
    });
  }
  return groups;
}
