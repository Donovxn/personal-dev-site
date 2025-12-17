import Link from "next/link";
import Section from "../components/Section";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 px-6 bg-black text-zinc-50">
      <section className="max-w-xl text-center space-y-4">
        <h1 className="text-4xl font-semibold">Welcome to Donovan&apos;s dev site.</h1>
        <p className="text-lg text-zinc-300">
          Phase 0 Entrance Exam. My only job right now is to show up, learn the basics, and ship
          tiny reps every day.
        </p>
      </section>

      <Section title="Today&apos;s setup">
        <ul className="list-disc list-inside space-y-1">
          <li>Installed Node, Git, pnpm, and VS Code</li>
          <li>Scaffolded this Next.js dev site</li>
          <li>Hooked it to GitHub and deployed on Vercel</li>
        </ul>
      </Section>

      <Section title="Tonight&apos;s Goals">
        <ul className="list-disc list-inside space-y-1">
          <li>Lock in the About page.</li>
          <li>Wire Home page to About page.</li>
          <li>Build a reusable Section component</li>
        </ul>
      </Section>

      <p className="text-sm text-zinc-500">
        Want to know what this site is for?{" "}
        <Link href="/about" className="underline text-zinc-300 hover:text-zinc-100">
          Read the About page.
        </Link>
      </p>
    </main>
  );
}
