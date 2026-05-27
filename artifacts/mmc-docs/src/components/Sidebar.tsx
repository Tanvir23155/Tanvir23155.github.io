type NavItem = {
  id: string;
  label: string;
  group: string;
};

type Props = {
  navItems: NavItem[];
  activeId: string;
};

export default function Sidebar({ navItems, activeId }: Props) {
  const groups = Array.from(new Set(navItems.map((i) => i.group)));

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 260,
        height: "100vh",
        background: "#161b22",
        borderRight: "1px solid #30363d",
        overflowY: "auto",
        padding: "24px 0",
        zIndex: 100,
      }}
    >
      <div
        style={{
          padding: "0 20px 20px",
          borderBottom: "1px solid #30363d",
          marginBottom: 16,
        }}
      >
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: "#58a6ff",
            textTransform: "uppercase",
            letterSpacing: 1,
          }}
        >
          Project Reverso
        </div>
        <div style={{ fontSize: 11, color: "#8b949e", marginTop: 2 }}>
          MMC · v0.14.4 · May 2024
        </div>
      </div>

      {groups.map((group) => (
        <div key={group}>
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1.2,
              color: "#8b949e",
              padding: "8px 20px 4px",
            }}
          >
            {group}
          </div>
          {navItems
            .filter((i) => i.group === group)
            .map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "7px 20px",
                  fontSize: 13,
                  color: activeId === item.id ? "#e6edf3" : "#8b949e",
                  background:
                    activeId === item.id ? "#21262d" : "transparent",
                  borderTop: "none",
                  borderRight: "none",
                  borderBottom: "none",
                  borderLeft: `3px solid ${
                    activeId === item.id ? "#58a6ff" : "transparent"
                  }`,
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e) => {
                  if (activeId !== item.id) {
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "#e6edf3";
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "#21262d";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeId !== item.id) {
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "#8b949e";
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "transparent";
                  }
                }}
              >
                {item.label}
              </button>
            ))}
        </div>
      ))}
    </nav>
  );
}
