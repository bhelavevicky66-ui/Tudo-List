"use client";

import { useTodo } from "@/store/todo";
import { useSearchParams } from "next/navigation";
import { RiDeleteBinLine } from "react-icons/ri";

const Todos = () => {
    const { todos, toggleTodoAsCompleted, handleTodoDelete } = useTodo();
    const searchParams = useSearchParams();
    const todosFilter = searchParams.get("todos");

    let filterTodos = todos;

    if (todosFilter === "active") {
        filterTodos = todos.filter((todo) => !todo.completed);
    } else if (todosFilter === "completed") {
        filterTodos = todos.filter((todo) => todo.completed);
    }

    return (
        <ul className="w-full space-y-3">
            {filterTodos.map((todo) => (
                <li
                    key={todo.id}
                    className={`flex justify-between items-center p-4 rounded-2xl shadow-sm border transition-all duration-300 hover:shadow-md ${todo.completed
                            ? "bg-indigo-50 border-indigo-100"
                            : "bg-white border-white/50"
                        }`}
                >
                    <div className="flex-1 flex items-center gap-3 overflow-hidden">
                        <input
                            type="checkbox"
                            id={`todo-${todo.id}`}
                            checked={todo.completed}
                            onChange={() => toggleTodoAsCompleted(todo.id)}
                            className="w-5 h-5 accent-indigo-600 cursor-pointer rounded-md focus:ring-0 transition-all"
                        />
                        <label
                            htmlFor={`todo-${todo.id}`}
                            className={`text-base font-medium truncate cursor-pointer select-none transition-all ${todo.completed ? "text-indigo-300" : "text-gray-700"
                                }`}
                        >
                            {todo.task}
                        </label>
                    </div>

                    {todo.completed && (
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleTodoDelete(todo.id);
                            }}
                            className="text-rose-500 hover:bg-rose-100 p-2 rounded-full transition-colors duration-200"
                            aria-label="Delete Todo"
                        >
                            <RiDeleteBinLine className="text-xl" />
                        </button>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default Todos;
