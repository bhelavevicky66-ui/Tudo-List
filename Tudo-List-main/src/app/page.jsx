import AddToDo from "@/components/Add-Todo";
import Navbar from "@/components/Navbar";
import Todos from "@/components/todos";
import { RiTodoLine } from "react-icons/ri";
import { Suspense } from "react";

const Todo = () => {
    const styles = {
        main: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            background: "linear-gradient(to bottom right, #6366f1, #a855f7, #ec4899)", // indigo-500, purple-500, pink-500
            padding: "1rem",
        },
        container: {
            width: "100%",
            maxWidth: "32rem", // max-w-lg
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderRadius: "1.5rem", // rounded-3xl
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", // shadow-2xl
            padding: "2rem",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            color: "white",
        },
        header: {
            marginBottom: "2rem",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        title: {
            fontSize: "1.875rem", // text-3xl
            fontWeight: "800", // font-extrabold
            letterSpacing: "-0.025em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
            filter: "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))", // drop-shadow-md
        },
        subtitle: {
            marginTop: "0.5rem",
            color: "#e0e7ff", // indigo-100
            fontSize: "0.875rem",
            fontWeight: "500",
            opacity: 0.9,
        },
        loading: {
            textAlign: "center",
            padding: "1rem",
        },
        listContainer: {
            marginTop: "1.5rem",
        },
    };

    return (
        <main style={styles.main}>
            <div style={styles.container}>
                <header style={styles.header}>
                    <h2 style={styles.title}>
                        <RiTodoLine style={{ fontSize: "2.25rem" }} />
                        <span>Todo App</span>
                    </h2>
                    <p style={styles.subtitle}>Manage your daily tasks with style</p>
                </header>

                <Suspense fallback={<div style={styles.loading}>Loading...</div>}>
                    <Navbar />
                </Suspense>

                <AddToDo />

                <div style={styles.listContainer}>
                    <Suspense fallback={<div style={styles.loading}>Loading list...</div>}>
                        <Todos />
                    </Suspense>
                </div>
            </div>
        </main>
    );
};

export default Todo;
