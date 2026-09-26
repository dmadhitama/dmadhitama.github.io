import { SkillGroup } from "@/lib/skills";

export function SkillBoxes({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
      {groups.map((group) => (
        <div key={group.name} className="border border-muted2 mb-4 break-inside-avoid">
          <h3 className="border-b border-muted2 px-2 py-2 font-semibold text-white">{group.name}</h3>
          <p className="px-2 py-2 text-muted2 flex flex-wrap gap-x-2 gap-y-1">
            {group.items.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
}
