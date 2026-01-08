"use client";

import { useState } from "react";
import { useTodo } from "@/store/todo";
import { RiAddLine } from "react-icons/ri";

function AddToDo() {
    const [todo, setTodo] = useState("");
    const { handleAddTodo } = useTodo();

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.trim() !== "") {
            handleAddTodo(todo);
            setTodo("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="relative w-full mb-6">
            <input
                type="text"
                placeholder="What needs to be accomplished?"
                value={todo}
                onChange={handleChange}
                className="w-full p-4 pr-16 rounded-2xl border-none outline-none text-gray-800 placeholder-gray-400 shadow-xl focus:ring-4 focus:ring-indigo-200/50 bg-white/95 transition-all text-base"
            />
            <button
                type="submit"
                aria-label="Add Todo"
                className="absolute right-2 top-2 bottom-2 bg-indigo-600 hover:bg-indigo-700 text-white w-12 rounded-xl flex items-center justify-center shadow-md transition-all hover:scale-105 active:scale-95"
            >
                <RiAddLine className="text-2xl font-bold" />
            </button>
        </form>
    );
}

export default AddToDo;
