import { forwardRef } from "react";
import SectionHeader from "./SectionHeader";
import CmdBlock from "./CmdBlock";
import Code from "./Code";

type Props = { id: string };

const SectionPhase1 = forwardRef<HTMLElement, Props>(({ id }, ref) => (
  <section
    id={id}
    ref={ref as React.Ref<HTMLElement>}
    style={{ marginBottom: 56 }}
  >
    <SectionHeader
      icon="🔎"
      iconBg="#1a1a3a"
      title="Phase I — Symbol Discovery & Analysis"
      num="§ 3"
    />
    <p style={{ color: "#c9d1d9", marginBottom: 12, fontSize: 14 }}>
      The core gameplay logic is encapsulated in a shared object library. We
      utilized symbol extraction to identify{" "}
      <strong>"mangled" C++ function names</strong> responsible for resource
      management.
    </p>

    <h3 style={{ fontSize: 15, fontWeight: 700, color: "#58a6ff", margin: "24px 0 10px" }}>
      Identify Ammunition Subtraction Logic
    </h3>
    <CmdBlock
      label="Shell Script"
      segments={[
        { type: "prompt", text: "$ " },
        { type: "arg", text: "nm" },
        { type: "plain", text: " " },
        { type: "flag", text: "-D" },
        { type: "plain", text: " libcocos2dcpp.so " },
        { type: "pipe", text: "| " },
        { type: "arg", text: "grep" },
        { type: "plain", text: " " },
        { type: "str", text: '"subAmmo"' },
      ]}
    />

    <h3 style={{ fontSize: 15, fontWeight: 700, color: "#58a6ff", margin: "24px 0 10px" }}>
      Identify Nitro (Power) Management Logic
    </h3>
    <CmdBlock
      label="Shell Script"
      segments={[
        { type: "prompt", text: "$ " },
        { type: "arg", text: "nm" },
        { type: "plain", text: " " },
        { type: "flag", text: "-D" },
        { type: "plain", text: " libcocos2dcpp.so " },
        { type: "pipe", text: "| " },
        { type: "arg", text: "grep" },
        { type: "plain", text: " " },
        { type: "str", text: '"setPower"' },
      ]}
    />

    <h3 style={{ fontSize: 15, fontWeight: 700, color: "#58a6ff", margin: "24px 0 10px" }}>
      Identified Target Functions
    </h3>
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        margin: "16px 0",
        fontSize: 13,
      }}
    >
      <thead>
        <tr>
          {["#", "Function", "Purpose"].map((h) => (
            <th
              key={h}
              style={{
                background: "#21262d",
                border: "1px solid #30363d",
                padding: "10px 14px",
                textAlign: "left",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: 0.8,
                color: "#8b949e",
              }}
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[
          {
            n: "1",
            fn: "Weapon::subAmmo(int)",
            desc: "Handles bullet reduction (called every shot)",
          },
          {
            n: "2",
            fn: "SoldierLocalController::setPower(float)",
            desc: "Manages fuel levels for Nitro/Jetpack",
          },
          {
            n: "3",
            fn: "Weapon::completeReloadWeapon()",
            desc: "Manages clip transitions on reload",
          },
        ].map((row, i) => (
          <tr key={i}>
            {[row.n, <Code key="fn">{row.fn}</Code>, row.desc].map((cell, j) => (
              <td
                key={j}
                style={{
                  border: "1px solid #30363d",
                  padding: "10px 14px",
                  color: "#e6edf3",
                  background:
                    i % 2 === 1 ? "rgba(255,255,255,0.02)" : undefined,
                  verticalAlign: "top",
                }}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </section>
));

SectionPhase1.displayName = "SectionPhase1";
export default SectionPhase1;
