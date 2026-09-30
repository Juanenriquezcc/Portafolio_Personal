import { sectionNumber, type SectionId } from "@/data/site";

interface SectionHeaderProps {
  id: SectionId;
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ id, eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div data-reveal className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-teal">
          {`${sectionNumber(id)} // ${eyebrow}`}
        </span>
        <span className="h-px w-12 bg-teal/50" />
      </div>
      <h2 className="max-w-4xl font-display text-3xl font-bold leading-[1.1] tracking-tight text-fg md:text-5xl">{title}</h2>
      {description && <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">{description}</p>}
    </div>
  );
}
