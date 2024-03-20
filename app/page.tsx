import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="flex justify-center items-center h-screen bg-gradient-to-b from-yellow-200 to-yellow-300">
        <div className="w-1/2 bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-4xl text-pink-600 mb-4">Welcome to Max Scores!</h1>
          <p className="text-lg text-pink-600 mb-8">How high can you go?</p>
          <Link href="/memotest/gamesession" className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
            Play Now
          </Link>
        </div>
      </section>
    </main>
  );
}