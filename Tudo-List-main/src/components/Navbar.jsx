"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

function Navbar() {
    const searchParams = useSearchParams();
    const todosFilter = searchParams.get("todos");
    const [hovered, setHovered] = useState(null);

    const getLinkStyle = (filter) => {
        const isActive =
            filter === todosFilter || (filter === null && todosFilter === null);
        const isHovered = hovered === filter;

        const baseStyle = {
            flex: 1,
            padding: "0.5rem 0",
            textAlign: "center",
            fontSize: "0.875rem",
            fontWeight: "600",
            borderRadius: "0.5rem",
            transition: "all 300ms",
            textDecoration: "none",
            cursor: "pointer",
        };

        if (isActive) {
            return {
                ...baseStyle,
                backgroundColor: "#22c55e", // green-500
                color: "white",
                boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                transform: "scale(1.05)",
            };
        }

        if (isHovered) {
            return {
                ...baseStyle,
                backgroundColor: "#4ade80", // green-400
                color: "white",
            };
        }

        return {
            ...baseStyle,
            color: "rgba(255, 255, 255, 0.8)",
            backgroundColor: "transparent",
        };
    };

    const navContainerStyle = {
        display: "flex",
        alignItems: "center",
        gap: "0.25rem",
        padding: "0.25rem",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        borderRadius: "0.75rem",
        marginBottom: "2rem",
        backdropFilter: "blur(4px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
    };

    return (
        <nav style={navContainerStyle}>
            <Link
                href="/"
                style={getLinkStyle(null)}
                onMouseEnter={() => setHovered(null)}
                onMouseLeave={() => setHovered("none")}
            >
                All
            </Link>
            <Link
                href="/?todos=active"
                style={getLinkStyle("active")}
                onMouseEnter={() => setHovered("active")}
                onMouseLeave={() => setHovered("none")}
            >
                Active
            </Link>
            <Link
                href="/?todos=completed"
                style={getLinkStyle("completed")}
                onMouseEnter={() => setHovered("completed")}
                onMouseLeave={() => setHovered("none")}
            >
                Completed
            </Link>
        </nav>
    );
}

export default Navbar;
