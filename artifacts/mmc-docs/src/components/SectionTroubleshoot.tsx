import { forwardRef } from "react";
import SectionHeader from "./SectionHeader";
import Code from "./Code";

type Props = { id: string };

const issues = [
  {
    title: "⚠️ YAML Metadata Parse Failure",
    fix: (
      <>
        If <Code>apktool.yml</Code> fails to parse, remove the top line (often a
        Windows/Linux path conflict).
      </>
    ),
  },
  {
    title: "⚠️ LAN Desync — Ammo Decreases Only for Host",
    fix: (
      <>
        Ensure the <strong>Host</strong> is running the modded APK and that the{" "}
        <Code>subAmmo</Code> patch is correctly applied with a <Code>RET</Code>.
      </>
    ),
  },
  {
    title: "⚠️ Installation Failure",
    fix: "Always verify the original game is uninstalled before installing the modded APK. Signatures must be unique for the user's keystore.",
  },
];

const SectionTroubleshoot = forwardRef<HTMLElement, Props>(({ id }, ref) => (
  <section
    id={id}
    ref={ref as React.Ref<HTMLElement>}
    style={{ marginBottom: 56 }}
  >
    <SectionHeader
      icon="🔧"
      iconBg="#2a1a2a"
      title="Troubleshooting & Maintenance"
      num="§ 7"
    />
    <ul style={{ listStyle: "none", padding: 0, margin: "16px 0" }}>
      {issues.map((item, i) => (
        <li
          key={i}
          style={{
            background: "#21262d",
            border: "1px solid #30363d",
            borderRadius: 8,
            padding: "14px 16px",
            marginBottom: 10,
            fontSize: 13.5,
          }}
        >
          <div
            style={{ fontWeight: 700, color: "#d29922", marginBottom: 4 }}
          >
            {item.title}
          </div>
          <div style={{ color: "#c9d1d9" }}>{item.fix}</div>
        </li>
      ))}
    </ul>
  </section>
));

SectionTroubleshoot.displayName = "SectionTroubleshoot";
export default SectionTroubleshoot;
