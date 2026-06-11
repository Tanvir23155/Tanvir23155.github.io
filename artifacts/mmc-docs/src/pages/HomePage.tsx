type Props = {
  onNavigate: (page: string) => void;
};

const skills = [
  {
    group: "Embedded & Firmware",
    icon: "🔌",
    color: "#3fb950",
    bg: "#0d2a1f",
    border: "#1a4a2a",
    items: [
      "Embedded Systems (Learning)",
      "Firmware Development",
      "Microcontrollers",
      "C / C++",
    ],
  },
  {
    group: "Reverse Engineering",
    icon: "🔍",
    color: "#58a6ff",
    bg: "#0d1f3c",
    border: "#1a3a5c",
    items: [
      "Android Binary Patching",
      "Ghidra / Disassembly",
      "ARM64 & ARMv7 Assembly",
      "Native .so Analysis",
    ],
  },
  {
    group: "Android & Mobile",
    icon: "📱",
    color: "#d29922",
    bg: "#2a1f0d",
    border: "#4a3a1a",
    items: ["APK Reverse Engineering", "Apktool / apksigner", "Android NDK"],
  },
  {
    group: "Tools & Workflow",
    icon: "🛠️",
    color: "#d2a8ff",
    bg: "#1f0d2a",
    border: "#3a1a4a",
    items: ["Linux / WSL2", "Git", "Binary Utilities (nm, xxd, hexedit)"],
  },
];

export default function HomePage({ onNavigate }: Props) {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "64px 40px 80px" }}>
      {/* Hero */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #0d1f3c 0%, #1a2a4a 60%, #0d2a1f 100%)",
          border: "1px solid #30363d",
          borderRadius: 16,
          padding: "52px 48px",
          marginBottom: 64,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative glow */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 260,
            height: 260,
            background:
              "radial-gradient(circle, rgba(88,166,255,0.1) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -40,
            width: 200,
            height: 200,
            background:
              "radial-gradient(circle, rgba(63,185,80,0.07) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: 2.5,
            color: "#58a6ff",
            fontWeight: 700,
            marginBottom: 14,
          }}
        >
          Personal Portfolio
        </div>
        <h1
          style={{
            fontSize: 38,
            fontWeight: 900,
            lineHeight: 1.15,
            marginBottom: 16,
            background: "linear-gradient(90deg, #e6edf3 30%, #79c0ff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Hi, I'm Tanvir 👋
        </h1>
        <p
          style={{
            fontSize: 16,
            color: "#8b949e",
            maxWidth: 560,
            lineHeight: 1.7,
            marginBottom: 32,
          }}
        >
          I'm interested in <strong style={{ color: "#e6edf3" }}>embedded systems</strong> and{" "}
          <strong style={{ color: "#e6edf3" }}>firmware development</strong>, and I enjoy
          exploring the low-level world of hardware and software. I also do{" "}
          <strong style={{ color: "#e6edf3" }}>Android reverse engineering</strong> as a
          hobby project.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <button
            onClick={() => onNavigate("projects")}
            style={{
              background: "#58a6ff",
              color: "#0d1117",
              border: "none",
              borderRadius: 8,
              padding: "10px 24px",
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
              transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.opacity = "0.85")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.opacity = "1")
            }
          >
            View Projects →
          </button>
        </div>
      </div>

      {/* About */}
      <div style={{ marginBottom: 64 }}>
        <h2
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: "#e6edf3",
            marginBottom: 20,
            paddingBottom: 10,
            borderBottom: "1px solid #30363d",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span
            style={{
              width: 28,
              height: 28,
              borderRadius: 6,
              background: "#1a3a5c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 14,
            }}
          >
            👤
          </span>
          About Me
        </h2>
        <p style={{ fontSize: 14, color: "#c9d1d9", lineHeight: 1.8, marginBottom: 12 }}>
          I'm a beginner exploring the world of embedded systems and firmware. I find it
          fascinating how software can directly interact with hardware at such a low level —
          from microcontrollers to custom firmware.
        </p>
        <p style={{ fontSize: 14, color: "#c9d1d9", lineHeight: 1.8, marginBottom: 12 }}>
          Alongside that, I enjoy Android reverse engineering as a hobby — digging into native
          C++ libraries, understanding how games and apps work under the hood, and applying
          ARM assembly patches.
        </p>
        <p style={{ fontSize: 14, color: "#c9d1d9", lineHeight: 1.8 }}>
          This site is where I document my projects and learning journey. Everything here is
          stuff I've built or researched myself.
        </p>
      </div>

      {/* Skills */}
      <div>
        <h2
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: "#e6edf3",
            marginBottom: 20,
            paddingBottom: 10,
            borderBottom: "1px solid #30363d",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span
            style={{
              width: 28,
              height: 28,
              borderRadius: 6,
              background: "#1f3a1a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 14,
            }}
          >
            ⚡
          </span>
          Skills & Interests
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 16,
          }}
        >
          {skills.map((skill) => (
            <div
              key={skill.group}
              style={{
                background: skill.bg,
                border: `1px solid ${skill.border}`,
                borderRadius: 10,
                padding: "18px 20px",
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: skill.color,
                  marginBottom: 12,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span>{skill.icon}</span>
                {skill.group}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {skill.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: 13,
                      color: "#8b949e",
                      padding: "3px 0",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <span style={{ color: skill.color, fontSize: 10 }}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
