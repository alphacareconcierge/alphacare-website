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
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-serif text-4xl font-medium leading-tight md:text-5xl ${
          inverted ? "text-ivory" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={`mt-6 text-base leading-8 md:text-lg ${
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
