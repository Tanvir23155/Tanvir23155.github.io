import { useState } from "react";

type Segment = {
  type: "prompt" | "arg" | "flag" | "pipe" | "str" | "plain";
  text: string;
};

type Props = {
  label: string;
  segments: Segment[];
};

const colors: Record<Segment["type"], string> = {
  prompt: "#56d364",
  arg: "#79c0ff",
  flag: "#ffa657",
  pipe: "#d2a8ff",
  str: "#a5d6ff",
  plain: "#e6edf3",
};

export default function CmdBlock({ label, segments }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = segments
      .filter((s) => s.type !== "prompt")
      .map((s) => s.text)
      .join("");
    navigator.clipboard.writeText(text.trim()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div
      style={{
        margin: "16px 0",
        borderRadius: 8,
        overflow: "hidden",
        border: "1px solid #264f78",
        boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
      }}
    >
      <div
        style={{
          background: "#1a3a5c",
          padding: "8px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #264f78",
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 1,
            color: "#79c0ff",
          }}
        >
          ⚡ {label}
        </span>
        <button
          onClick={handleCopy}
          style={{
            fontSize: 10,
            color: copied ? "#3fb950" : "#8b949e",
            cursor: "pointer",
            padding: "2px 8px",
            border: `1px solid ${copied ? "#3fb950" : "#30363d"}`,
            borderRadius: 4,
            background: "transparent",
            transition: "all 0.15s",
          }}
        >
          {copied ? "✓ Copied" : "Copy"}
        </button>
      </div>
      <div
        style={{
          background: "#1e2a3a",
          padding: "16px 20px",
          overflowX: "auto",
        }}
      >
        <code
          style={{
            fontFamily:
              "'JetBrains Mono', 'Fira Code', 'Cascadia Code', Consolas, monospace",
            fontSize: 13.5,
            whiteSpace: "pre",
            display: "block",
          }}
        >
          {segments.map((seg, i) => (
            <span
              key={i}
              style={{
                color: colors[seg.type],
                userSelect: seg.type === "prompt" ? "none" : "auto",
              }}
            >
              {seg.text}
            </span>
          ))}
        </code>
      </div>
    </div>
  );
}
