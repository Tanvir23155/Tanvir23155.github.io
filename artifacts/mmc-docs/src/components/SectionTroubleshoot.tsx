import { forwardRef } from "react";
import SectionHeader from "./SectionHeader";
import Code from "./Code";

type Props = { id: string };

const issues = [
  {
    title: "⚠️ Nitro / Jetpack Not Working on Some Devices",
    severity: "high" as const,
    fix: (
      <>
        The Nitro patch is currently <strong>ARM64-only</strong>. Devices running
        the 32-bit (ARMv7) library will have no jetpack fuel. The ARMv7 offset for{" "}
        <Code>SoldierLocalController::setPower</Code> still needs to be identified
        in Ghidra using the armeabi-v7a library. See Phase II §4.3 for detailed
        next steps.
      </>
    ),
  },
  {
    title: "⚠️ YAML Metadata Parse Failure",
    severity: "medium" as const,
    fix: (
      <>
        If <Code>apktool.yml</Code> fails to parse, remove the top line (often a
        Windows/Linux path conflict).
      </>
    ),
  },
  {
    title: "⚠️ LAN Desync — Ammo Decreases Only for Host",
    severity: "medium" as const,
    fix: (
      <>
        Ensure the <strong>Host</strong> is running the modded APK and that the{" "}
        <Code>subAmmo</Code> patch is correctly applied with a <Code>RET</Code>.
      </>
    ),
  },
  {
    title: "⚠️ Installation Failure",
    severity: "medium" as const,
    fix: "Always verify the original game is uninstalled before installing the modded APK. Signatures must be unique for the user's keystore.",
  },
];

const severityStyles = {
  high: { border: "#f85149", bg: "#2a0d0d" },
  medium: { border: "#d29922", bg: "#21262d" },
};

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
            background: severityStyles[item.severity].bg,
            border: `1px solid #30363d`,
            borderLeft: `4px solid ${severityStyles[item.severity].border}`,
            borderRadius: 8,
            padding: "14px 16px",
            marginBottom: 10,
            fontSize: 13.5,
          }}
        >
          <div
            style={{
              fontWeight: 700,
              color: item.severity === "high" ? "#f85149" : "#d29922",
              marginBottom: 6,
            }}
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
