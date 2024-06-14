import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 text-white text-center p-4">
      <div className="mb-8">
        <Image
          src="/logo.png"
          alt="Recipe Logo"
          width={200}
          height={200}
          className="rounded-full shadow-lg"
        />
      </div>
      <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
        Welcome to Recipe Central
      </h1>
      <p className="text-lg mb-8">
        Discover the best recipes from around the world!
      </p>
      <Link href="/recipe-list">
        <div className="text-2xl bg-white text-red-400 py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition duration-300 ease-in-out">
          Explore More Recipes
        </div>
      </Link>
    </div>
  );
}
