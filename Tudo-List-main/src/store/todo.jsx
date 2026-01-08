"use client";

import { createContext, useContext, useState, useEffect } from "react";

export const TodoContext = createContext(null);

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem("todos");
        if (stored) {
            const parsed = JSON.parse(stored);

            const revived = parsed.map(todo => ({
                ...todo,
                createdAt: new Date(todo.createdAt),
            }));
            setTodos(revived);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleAddTodo = (task) => {
        const newTodo = {
            id: Math.random().toString(),
            task,
            completed: false,
            createdAt: new Date(),
        };
        setTodos((prev) => [...prev, newTodo]);
    };

    const toggleTodoAsCompleted = (id) => {
        setTodos((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const handleTodoDelete = (id) => {
        setTodos((prev) => prev.filter((task) => task.id !== id));
    };

    return (
        <TodoContext.Provider
            value={{ todos, handleAddTodo, toggleTodoAsCompleted, handleTodoDelete }}
        >
            {children}
        </TodoContext.Provider>
    );
};

export const useTodo = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("useTodo must be used within a TodoProvider");
    }
    return context;
};
