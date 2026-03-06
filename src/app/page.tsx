import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50">
      <h1 className="text-3xl font-bold underline text-green-500">
        HD Perfume
      </h1>
      <Link href="/home">Home</Link>
    </div>
  );
}
