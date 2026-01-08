import AddToDo from "@/components/Add-Todo";
import Navbar from "@/components/Navbar";
import Todos from "@/components/todos";
import { RiTodoLine } from "react-icons/ri";
import { Suspense } from "react";

const Todo = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="w-full max-w-lg bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/30 text-white">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight flex items-center justify-center gap-3 drop-shadow-md">
            <RiTodoLine className="text-4xl" />
            <span>Todo App</span>
          </h2>
          <p className="mt-2 text-indigo-100 text-sm font-medium opacity-90">
            Manage your daily tasks with style
          </p>
        </header>

        <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
          <Navbar />
        </Suspense>

        <AddToDo />

        <div className="mt-6">
          <Suspense fallback={<div className="text-center p-4">Loading list...</div>}>
            <Todos />
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default Todo;
