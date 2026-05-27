import { forwardRef } from "react";
import SectionHeader from "./SectionHeader";
import Code from "./Code";

type Props = { id: string };

const SectionEnvironment = forwardRef<HTMLElement, Props>(({ id }, ref) => (
  <section
    id={id}
    ref={ref as React.Ref<HTMLElement>}
    style={{ marginBottom: 56 }}
  >
    <SectionHeader
      icon="🛠️"
      iconBg="#1f3a1a"
      title="Technical Environment & Tools"
      num="§ 2"
    />
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: 12,
        margin: "16px 0",
      }}
    >
      {[
        {
          icon: "🖥️",
          name: "Operating System",
          desc: "Windows 11 / Kali Linux (WSL2)",
        },
        {
          icon: "🔍",
          name: "Static Analysis",
          desc: "Ghidra 11.x — ARM64 & ARMv7 Disassembler",
        },
        {
          icon: "🔧",
          name: "Binary Utilities",
          desc: null,
          custom: (
            <span style={{ fontSize: 12, color: "#8b949e" }}>
              <Code>nm</Code> Symbol extraction ·{" "}
              <Code>xxd</Code> / <Code>hexedit</Code> Binary patching
            </span>
          ),
        },
        {
          icon: "📦",
          name: "APK Tooling",
          desc: "Apktool 2.7.0 (AAPT2 enabled)",
        },
        {
          icon: "✍️",
          name: "Signature Suite",
          desc: null,
          custom: (
            <span style={{ fontSize: 12, color: "#8b949e" }}>
              <Code>keytool</Code> & <Code>apksigner</Code>
            </span>
          ),
        },
      ].map((card) => (
        <div
          key={card.name}
          style={{
            background: "#21262d",
            border: "1px solid #30363d",
            borderRadius: 8,
            padding: "14px 16px",
          }}
        >
          <div style={{ fontSize: 13, fontWeight: 700, color: "#e6edf3", marginBottom: 4 }}>
            {card.icon} {card.name}
          </div>
          {card.custom ?? (
            <div style={{ fontSize: 12, color: "#8b949e" }}>{card.desc}</div>
          )}
        </div>
      ))}
    </div>
  </section>
));

SectionEnvironment.displayName = "SectionEnvironment";
export default SectionEnvironment;
