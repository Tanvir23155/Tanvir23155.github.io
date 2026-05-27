import { ReactNode } from "react";

type Variant = "note" | "success" | "warn" | "danger";

const styles: Record<Variant, { bg: string; border: string }> = {
  note: { bg: "#0d2040", border: "#58a6ff" },
  success: { bg: "#0d2a1f", border: "#3fb950" },
  warn: { bg: "#2a1f0d", border: "#d29922" },
  danger: { bg: "#2a0d0d", border: "#f85149" },
};

type Props = {
  variant: Variant;
  icon: string;
  children: ReactNode;
};

export default function InfoBox({ variant, icon, children }: Props) {
  return (
    <div
      style={{
        borderRadius: 8,
        padding: "16px 20px",
        margin: "16px 0",
        fontSize: 13.5,
        borderLeft: `4px solid ${styles[variant].border}`,
        display: "flex",
        gap: 12,
        background: styles[variant].bg,
      }}
    >
      <span style={{ fontSize: 18, flexShrink: 0, marginTop: 1 }}>{icon}</span>
      <div style={{ color: "#e6edf3" }}>{children}</div>
    </div>
  );
}
