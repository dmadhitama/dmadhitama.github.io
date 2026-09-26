export interface SkillGroup {
  name: string;
  items: string[];
}

const splitItems = (text: string) =>
  text.split(",").map((item) => item.trim()).filter(Boolean);

export function parseSkillGroups(markdown: string): SkillGroup[] {
  const groups: SkillGroup[] = [];
  const boldItem = /^\s*[-*]\s+\*\*(.+?):?\*\*:?\s*(.+)$/;
  const plainItem = /^\s*[-*]\s+(.+)$/;
  const subHeading = /^#{2,6}\s+(.+)$/;
  let heading: SkillGroup | null = null;

  for (const line of markdown.split("\n")) {
    const headingMatch = line.match(subHeading);
    if (headingMatch) {
      heading = { name: headingMatch[1].trim(), items: [] };
      continue;
    }
    const boldMatch = line.match(boldItem);
    if (boldMatch) {
      groups.push({ name: boldMatch[1].replace(/:$/, "").trim(), items: splitItems(boldMatch[2]) });
      continue;
    }
    const plainMatch = line.match(plainItem);
    if (plainMatch && heading) {
      if (heading.items.length === 0) groups.push(heading);
      heading.items.push(...splitItems(plainMatch[1].replace(/\*\*/g, "")));
    }
  }
  return groups;
}
