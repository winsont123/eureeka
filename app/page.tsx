import Link from 'next/link';

export default function Home() {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">MyPortfolio</Link>
        </div>
        <div className="space-x-6 text-sm sm:text-base">
          <Link href="/" className="hover:text-teal-400">Home</Link>
          <Link href="/about" className="hover:text-teal-400">About</Link>
          <Link href="/projects" className="hover:text-teal-400">Projects</Link>
          <Link href="/contact" className="hover:text-teal-400">Contact</Link>
        </div>
      </div>
    </nav>
  )
}