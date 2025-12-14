import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 px-6 bg-black text-zinc-50">
      <section className="max-w-xl text-center space-y-4">
        <h1 className="text-4xl font-semibold">
          Welcome to Donovan&apos;s dev site.
        </h1>
        <p className="text-lg text-zinc-300">
          Phase 0 – Entrance Exam. My only job right now is to show up,
          learn the basics, and ship tiny reps every day.
        </p>
      </section>

      <section className="max-w-xl w-full space-y-2 text-left">
        <h2 className="text-2xl font-semibold">Today&apos;s setup</h2>
        <ul className="list-disc list-inside space-y-1 text-zinc-300">
        <p className="text-sm text-zinc-500 mt-4">
  Want to know what this site is for?{" "}
  <Link href="/about" className="underline text-zinc-300 hover:text-zinc-100">
    Read the About page.
  </Link>
</p>

          <li>Installed Node, Git, pnpm, and VS Code</li>
          <li>Scaffolded this Next.js dev site</li>
          <li>Hooked it to GitHub and deployed on Vercel</li>
        </ul>
      </section>
    </main>
  );
}

