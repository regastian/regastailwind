import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="text-center">
      <Image
        src="/profile.jpg"
        alt="Profile"
        width={150}
        height={150}
        className="rounded-full mx-auto"
      />
      <h1 className="text-3xl font-bold mt-4">Adzamar Mahdum Regastian</h1>
      <p className="text-gray-600">Web Developer | UI/UX Enthusiast</p>
      <div className="mt-6 flex justify-center gap-4">
        <Link href="/about" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">About</Link>
        <Link href="/projects" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Projects</Link>
      </div>
    </section>
  );
}
