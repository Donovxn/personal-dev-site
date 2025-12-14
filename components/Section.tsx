import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  children: ReactNode;
};

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="max-w-xl w-full space-y-2 text-left">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="text-zinc-300">{children}</div>
    </section>
  );
}
