type Props = {
  onOpenDocs: (projectId: string) => void;
};

const projects = [
  {
    id: "mmc",
    status: "in-progress",
    statusColor: "#d29922",
    statusBg: "#2a1f0d",
    tag: "Reverse Engineering",
    tagColor: "#79c0ff",
    tagBg: "#1f3a5f",
    icon: "🔫",
    title: "Mini Militia Classic — Reverse Engineering",
    desc:
      "Engine-level modification of the Mini Militia Classic C++ native library. Unlimited ammo and reload patches are complete across all architectures. The Nitro (jetpack) patch works on ARM64 but the ARMv7 offset is still pending.",
    tech: ["Ghidra", "ARM Assembly", "Android NDK", "APK Tooling"],
    hasDocs: true,
    progress: [
      { label: "Unlimited Ammo", done: true },
      { label: "Infinite Reserve", done: true },
      { label: "Nitro — ARM64", done: true },
      { label: "Nitro — ARMv7", done: false },
    ],
  },
  {
    id: "embedded-placeholder",
    status: "planned",
    statusColor: "#8b949e",
    statusBg: "#21262d",
    tag: "Embedded Systems",
    tagColor: "#ffa657",
    tagBg: "#2a1a0a",
    icon: "🔌",
    title: "Embedded Systems Projects",
    desc:
      "Currently learning embedded systems and firmware development. Projects will be documented here as they progress.",
    tech: ["C", "Microcontrollers", "Firmware"],
    hasDocs: false,
    progress: [],
  },
];

export default function ProjectsPage({ onOpenDocs }: Props) {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "48px 40px 80px" }}>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <div
          style={{
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: 2,
            color: "#58a6ff",
            fontWeight: 700,
            marginBottom: 8,
          }}
        >
          My Work
        </div>
        <h1
          style={{
            fontSize: 28,
            fontWeight: 800,
            color: "#e6edf3",
            marginBottom: 10,
          }}
        >
          Projects
        </h1>
        <p style={{ fontSize: 14, color: "#8b949e", maxWidth: 540 }}>
          Personal projects, research, and reverse engineering work. Click "View
          Docs" to read the full technical write-up.
        </p>
      </div>

      {/* Project cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {projects.map((p) => (
          <div
            key={p.id}
            style={{
              background: "#161b22",
              border: "1px solid #30363d",
              borderRadius: 12,
              padding: "24px 28px",
              transition: "border-color 0.15s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLDivElement).style.borderColor = "#444c56")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLDivElement).style.borderColor = "#30363d")
            }
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: 16,
                flexWrap: "wrap",
              }}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                {/* Meta row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 12,
                    flexWrap: "wrap",
                  }}
                >
                  <span style={{ fontSize: 20 }}>{p.icon}</span>
                  <span
                    style={{
                      fontSize: 11,
                      padding: "2px 10px",
                      borderRadius: 20,
                      fontWeight: 600,
                      background: p.tagBg,
                      color: p.tagColor,
                    }}
                  >
                    {p.tag}
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      padding: "2px 10px",
                      borderRadius: 20,
                      fontWeight: 600,
                      background: p.statusBg,
                      color: p.statusColor,
                    }}
                  >
                    {p.status === "in-progress"
                      ? "⏳ In Progress"
                      : p.status === "planned"
                      ? "📅 Planned"
                      : "✓ Complete"}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#e6edf3",
                    marginBottom: 10,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: 13.5,
                    color: "#8b949e",
                    lineHeight: 1.7,
                    marginBottom: 16,
                  }}
                >
                  {p.desc}
                </p>

                {/* Progress checklist */}
                {p.progress.length > 0 && (
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 8,
                      marginBottom: 14,
                    }}
                  >
                    {p.progress.map((item) => (
                      <span
                        key={item.label}
                        style={{
                          fontSize: 11,
                          padding: "3px 10px",
                          borderRadius: 6,
                          fontWeight: 600,
                          background: item.done ? "#0d2a1f" : "#2a1f0d",
                          color: item.done ? "#3fb950" : "#d29922",
                          border: `1px solid ${item.done ? "#1a4a2a" : "#4a3010"}`,
                        }}
                      >
                        {item.done ? "✓" : "○"} {item.label}
                      </span>
                    ))}
                  </div>
                )}

                {/* Tech tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: 11,
                        padding: "3px 10px",
                        borderRadius: 6,
                        background: "#21262d",
                        border: "1px solid #30363d",
                        color: "#8b949e",
                        fontFamily: "monospace",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              {p.hasDocs && (
                <div style={{ flexShrink: 0 }}>
                  <button
                    onClick={() => onOpenDocs(p.id)}
                    style={{
                      background: "#1f3a5f",
                      color: "#79c0ff",
                      border: "1px solid #264f78",
                      borderRadius: 8,
                      padding: "10px 20px",
                      fontSize: 13,
                      fontWeight: 600,
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      transition: "all 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "#264f78";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "#1f3a5f";
                    }}
                  >
                    📄 View Docs
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div
        style={{
          marginTop: 32,
          background: "#161b22",
          border: "1px dashed #30363d",
          borderRadius: 12,
          padding: "24px 28px",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: 14, color: "#8b949e", margin: 0 }}>
          More projects coming soon — this site grows as I do.
        </p>
      </div>
    </div>
  );
}
