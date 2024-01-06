import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-between bg-nav py-4 px-6 text-default-text">
      <div className="flex items-center space-x-6">
        <Link href="/">Home</Link>

        <Link href="/Projets">Projects</Link>
      </div>
    </nav>
  );
}
