type Page = "home" | "projects";

type Props = {
  currentPage: string;
  onNavigate: (page: Page) => void;
};

export default function Navbar({ currentPage, onNavigate }: Props) {
  return (
    <nav
      style={{
        background: "#161b22",
        borderBottom: "1px solid #30363d",
        padding: "0 40px",
        display: "flex",
        alignItems: "center",
        height: 56,
        position: "sticky",
        top: 0,
        zIndex: 200,
      }}
    >
      {/* Logo */}
      <button
        onClick={() => onNavigate("home")}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          marginRight: "auto",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <span
          style={{
            width: 30,
            height: 30,
            borderRadius: 8,
            background: "linear-gradient(135deg, #1f3a5f, #0d2a1f)",
            border: "1px solid #30363d",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 15,
          }}
        >
          ⚙️
        </span>
        <span
          style={{
            fontSize: 15,
            fontWeight: 700,
            color: "#e6edf3",
            letterSpacing: 0.3,
          }}
        >
          Tanvir
          <span style={{ color: "#58a6ff" }}>.dev</span>
        </span>
      </button>

      {/* Nav links */}
      {(["home", "projects"] as Page[]).map((p) => (
        <button
          key={p}
          onClick={() => onNavigate(p)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px 16px",
            fontSize: 14,
            fontWeight: 500,
            color: currentPage === p ? "#e6edf3" : "#8b949e",
            borderBottom: `2px solid ${currentPage === p ? "#58a6ff" : "transparent"}`,
            transition: "all 0.15s",
            textTransform: "capitalize",
            height: 56,
          }}
        >
          {p === "home" ? "Home" : "Projects"}
        </button>
      ))}
    </nav>
  );
}
