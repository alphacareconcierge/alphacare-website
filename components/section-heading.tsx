import { DecorativeRule } from "@/components/decorative-rule";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  inverted?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  inverted = false
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? (
        <p className="type-eyebrow mb-4">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`type-section ${
          inverted ? "text-ivory" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={`type-body mt-6 ${
            inverted ? "text-ivory/72" : "text-grayblue"
          }`}
        >
          {copy}
        </p>
      ) : null}
      {align === "center" ? <DecorativeRule className="mx-auto mt-8 max-w-xs" /> : null}
    </div>
  );
}
