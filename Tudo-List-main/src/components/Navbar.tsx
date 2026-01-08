"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function Navbar() {
  const searchParams = useSearchParams();
  const todosFilter = searchParams.get("todos");

  const navClass = (filter: string | null) =>
    `flex-1 py-2 text-center text-sm font-semibold rounded-lg transition-all duration-300 ${filter === todosFilter || (filter === null && todosFilter === null)
      ? "bg-green-500 text-white shadow-md transform scale-105"
      : "text-white/80 hover:bg-green-400 hover:text-white"
    }`;

  return (
    <nav className="flex items-center gap-1 p-1 bg-black/20 rounded-xl mb-8 backdrop-blur-sm border border-white/10">
      <Link href="/" className={navClass(null)}>
        All
      </Link>
      <Link href="/?todos=active" className={navClass("active")}>
        Active
      </Link>
      <Link href="/?todos=completed" className={navClass("completed")}>
        Completed
      </Link>
    </nav>
  );
}

export default Navbar;