import { useSelector } from "react-redux";

const Navbar: React.FC = () => {
    const count = useSelector((state: any) => state.counter.count);
    return (
        <nav
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.75rem 2rem",
                background: "linear-gradient(90deg, #4f8cff 0%, #235390 100%)",
                color: "#fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
            }}
        >
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                <span style={{ fontWeight: "bold", fontSize: "1.5rem", letterSpacing: "1px" }}>
                    The best navigation
                </span>
                <a href="#" style={{ textDecoration: "none", color: "#fff", fontWeight: 500, fontSize: "1.1rem" }}>Home</a>
                <a href="#" style={{ textDecoration: "none", color: "#fff", fontWeight: 500, fontSize: "1.1rem" }}>About</a>
                <a href="#" style={{ textDecoration: "none", color: "#fff", fontWeight: 500, fontSize: "1.1rem", marginRight: "2.5rem" }}>Contact</a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ fontSize: "1.1rem", marginRight: "0.5rem" }}>Counter</span>
                <span
                    style={{
                        background: "#fff",
                        color: "#235390",
                        borderRadius: "999px",
                        padding: "0.3em 1em",
                        fontWeight: "bold",
                        fontSize: "1.1rem",
                        minWidth: "2.5em",
                        textAlign: "center",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.07)"
                    }}
                >
                    {count}
                </span>
            </div>
        </nav>
    );
};

export default Navbar;