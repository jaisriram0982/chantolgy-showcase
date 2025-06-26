import { NavBar } from "@/components/Navbar/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-700 via-gray-600 to-gray-400">
      <NavBar className="fixed top-0 left-0 right-0 z-50" />
      <div className="text-center mt-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 tracking-wide">
          Chantolgy Studios
        </h1>

        <p className="mt-2 text-lg text-gray-400">
          Under Maintenance. Stay tuned
        </p>
      </div>
    </div>
  );
}
