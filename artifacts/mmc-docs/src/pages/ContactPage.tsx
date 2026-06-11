import GitHubLogo from "../components/GitHubLogo";

type Contact = {
  id: string;
  icon: string | "github";
  label: string;
  value: string;
  href: string | null;
  desc: string;
  color: string;
  bg: string;
  border: string;
  active: boolean;
};

const contacts: Contact[] = [
  {
    id: "email",
    icon: "✉️",
    label: "Email",
    value: "musfiqurrahman2456@gmail.com",
    href: "mailto:musfiqurrahman2456@gmail.com",
    desc: "Send me an email anytime",
    color: "#58a6ff",
    bg: "#0d1f3c",
    border: "#1a3a5c",
    active: true,
  },
  {
    id: "github",
    icon: "github",
    label: "GitHub",
    value: "github.com/Tanvir23155",
    href: "https://github.com/Tanvir23155",
    desc: "Check out my repositories and code",
    color: "#e6edf3",
    bg: "#161b22",
    border: "#30363d",
    active: true,
  },
  {
    id: "twitter",
    icon: "𝕏",
    label: "Twitter / X",
    value: "Coming soon",
    href: null,
    desc: "Will be added later",
    color: "#8b949e",
    bg: "#161b22",
    border: "#30363d",
    active: false,
  },
  {
    id: "linkedin",
    icon: "💼",
    label: "LinkedIn",
    value: "Coming soon",
    href: null,
    desc: "Will be added later",
    color: "#8b949e",
    bg: "#161b22",
    border: "#30363d",
    active: false,
  },
  {
    id: "discord",
    icon: "💬",
    label: "Discord",
    value: "Coming soon",
    href: null,
    desc: "Will be added later",
    color: "#8b949e",
    bg: "#161b22",
    border: "#30363d",
    active: false,
  },
  {
    id: "youtube",
    icon: "▶️",
    label: "YouTube",
    value: "Coming soon",
    href: null,
    desc: "Will be added later",
    color: "#8b949e",
    bg: "#161b22",
    border: "#30363d",
    active: false,
  },
];

function ContactIcon({ icon, color }: { icon: string; color: string }) {
  if (icon === "github") {
    return <GitHubLogo size={22} color={color} />;
  }
  return <span style={{ fontSize: 20 }}>{icon}</span>;
}

export default function ContactPage() {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "48px 40px 80px" }}>
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
          Get In Touch
        </div>
        <h1
          style={{
            fontSize: 28,
            fontWeight: 800,
            color: "#e6edf3",
            marginBottom: 10,
          }}
        >
          Contact
        </h1>
        <p style={{ fontSize: 14, color: "#8b949e", maxWidth: 480 }}>
          Feel free to reach out via email or check out my work on GitHub. More
          links will be added here over time.
        </p>
      </div>

      {/* Contact cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {contacts.map((c) => (
          <div
            key={c.id}
            style={{
              background: c.bg,
              border: `1px solid ${c.border}`,
              borderRadius: 10,
              padding: "18px 22px",
              display: "flex",
              alignItems: "center",
              gap: 18,
              opacity: c.active ? 1 : 0.55,
              transition: "border-color 0.15s",
            }}
            onMouseEnter={(e) => {
              if (c.active)
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "#444c56";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = c.border;
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                background: "#21262d",
                border: "1px solid #30363d",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <ContactIcon icon={c.icon} color={c.active ? c.color : "#8b949e"} />
            </div>

            {/* Info */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#8b949e",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 2,
                }}
              >
                {c.label}
              </div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: c.active ? c.color : "#8b949e",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {c.value}
              </div>
              <div style={{ fontSize: 12, color: "#8b949e", marginTop: 2 }}>
                {c.desc}
              </div>
            </div>

            {/* Action */}
            {c.active && c.href && (
              <a
                href={c.href}
                target={c.id !== "email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                style={{
                  flexShrink: 0,
                  background: "#21262d",
                  color: c.color,
                  border: "1px solid #30363d",
                  borderRadius: 8,
                  padding: "8px 18px",
                  fontSize: 13,
                  fontWeight: 600,
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  transition: "border-color 0.15s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.borderColor =
                    c.color)
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "#30363d")
                }
              >
                {c.id === "email" ? "Send Email →" : "Open →"}
              </a>
            )}

            {!c.active && (
              <span
                style={{
                  flexShrink: 0,
                  fontSize: 11,
                  padding: "4px 12px",
                  borderRadius: 20,
                  background: "#21262d",
                  color: "#8b949e",
                  border: "1px solid #30363d",
                }}
              >
                Coming soon
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
