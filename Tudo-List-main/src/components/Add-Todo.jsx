"use client";

import { useState } from "react";
import { useTodo } from "@/store/todo";
import { RiAddLine } from "react-icons/ri";

function AddToDo() {
    const [todo, setTodo] = useState("");
    const { handleAddTodo } = useTodo();
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

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

    const styles = {
        form: {
            position: "relative",
            width: "100%",
            marginBottom: "1.5rem",
        },
        input: {
            width: "100%",
            padding: "1rem",
            paddingRight: "4rem",
            borderRadius: "1rem",
            border: "none",
            outline: "none",
            color: "#1f2937", // gray-800
            fontSize: "1rem",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)", // shadow-xl
            transition: "all 150ms",
            ...(isFocused ? { ring: "4px solid rgba(199, 210, 254, 0.5)" } : {}), // simplistic focus simulation
        },
        button: {
            position: "absolute",
            right: "0.5rem",
            top: "0.5rem",
            bottom: "0.5rem",
            backgroundColor: isHovered ? "#4338ca" : "#4f46e5", // indigo-700 : indigo-600
            color: "white",
            width: "3rem",
            borderRadius: "0.75rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            transition: "all 150ms",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
        },
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <input
                type="text"
                placeholder="What needs to be accomplished?"
                value={todo}
                onChange={handleChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                style={{
                    ...styles.input,
                    // manually simulating ring since it's tailwind specific, using box-shadow instead
                    boxShadow: isFocused ? "0 0 0 4px rgba(199, 210, 254, 0.5)" : styles.input.boxShadow
                }}
            />
            <button
                type="submit"
                aria-label="Add Todo"
                style={styles.button}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <RiAddLine style={{ fontSize: "1.5rem", fontWeight: "bold" }} />
            </button>
        </form>
    );
}

export default AddToDo;
