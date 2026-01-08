"use client";

import { useTodo } from "@/store/todo";
import { useSearchParams } from "next/navigation";
import { RiDeleteBinLine } from "react-icons/ri";
import { useState } from "react";

const TodoItem = ({ todo, toggleTodoAsCompleted, handleTodoDelete }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [deleteHovered, setDeleteHovered] = useState(false);

    const styles = {
        li: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem",
            borderRadius: "1rem", // rounded-2xl
            border: "1px solid",
            transition: "all 300ms",
            marginBottom: "0.75rem",
            boxShadow: isHovered
                ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                : "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            backgroundColor: todo.completed ? "#eef2ff" : "white", // indigo-50
            borderColor: todo.completed ? "#e0e7ff" : "rgba(255, 255, 255, 0.5)", // indigo-100
        },
        contentContainer: {
            flex: 1,
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            overflow: "hidden",
        },
        checkbox: {
            width: "1.25rem",
            height: "1.25rem",
            cursor: "pointer",
            accentColor: "#4f46e5", // indigo-600
        },
        label: {
            fontSize: "1rem",
            fontWeight: "500",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            cursor: "pointer",
            userSelect: "none",
            transition: "all 150ms",
            // Removed line-through based on user request "cut nhi hona chiye"
            color: todo.completed ? "#a5b4fc" : "#374151", // indigo-300 : gray-700
        },
        deleteBtn: {
            color: "#f43f5e", // rose-500
            backgroundColor: deleteHovered ? "#ffe4e6" : "transparent", // rose-100
            padding: "0.5rem",
            borderRadius: "9999px",
            transition: "background-color 200ms",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
    };

    return (
        <li
            style={styles.li}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={styles.contentContainer}>
                <input
                    type="checkbox"
                    id={`todo-${todo.id}`}
                    checked={todo.completed}
                    onChange={() => toggleTodoAsCompleted(todo.id)}
                    style={styles.checkbox}
                />
                <label htmlFor={`todo-${todo.id}`} style={styles.label}>
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
                    style={styles.deleteBtn}
                    onMouseEnter={() => setDeleteHovered(true)}
                    onMouseLeave={() => setDeleteHovered(false)}
                    aria-label="Delete Todo"
                >
                    <RiDeleteBinLine style={{ fontSize: "1.25rem" }} />
                </button>
            )}
        </li>
    );
};

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
        <ul style={{ width: "100%", padding: 0, margin: 0, listStyle: "none" }}>
            {filterTodos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodoAsCompleted={toggleTodoAsCompleted}
                    handleTodoDelete={handleTodoDelete}
                />
            ))}
        </ul>
    );
};

export default Todos;
