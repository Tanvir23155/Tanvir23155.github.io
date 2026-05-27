import { forwardRef } from "react";
import SectionHeader from "./SectionHeader";
import InfoBox from "./InfoBox";
import PatchTable from "./PatchTable";
import Code from "./Code";

type Props = { id: string };

const SectionPhase2 = forwardRef<HTMLElement, Props>(({ id }, ref) => (
  <section
    id={id}
    ref={ref as React.Ref<HTMLElement>}
    style={{ marginBottom: 56 }}
  >
    <SectionHeader
      icon="🩹"
      iconBg="#2a1a1a"
      title="Phase II — Native Binary Patching (Ghidra)"
      num="§ 4"
    />

    {/* Timeline wrapper */}
    <div style={{ position: "relative", paddingLeft: 32, margin: "16px 0" }}>
      <div
        style={{
          position: "absolute",
          left: 8,
          top: 0,
          bottom: 0,
          width: 2,
          background: "linear-gradient(to bottom, #58a6ff, #3fb950)",
          borderRadius: 2,
        }}
      />

      {/* 4.1 */}
      <div style={{ position: "relative", marginBottom: 28 }}>
        <div
          style={{
            position: "absolute",
            left: -28,
            top: 4,
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "#58a6ff",
            border: "2px solid #0d1117",
            boxShadow: "0 0 0 2px #58a6ff",
          }}
        />
        <h3 style={{ fontSize: 15, fontWeight: 700, color: "#58a6ff", margin: "0 0 10px" }}>
          4.1 — Unlimited Ammunition (LAN/Multiplayer Sync)
        </h3>
        <PatchTable
          rows={[
            { label: "Location", value: <Code>Weapon::subAmmo</Code> },
            { label: "Offset", value: <Code>0x00a482e0</Code> },
            {
              label: "Logic",
              value: "Master Subtractor — called during both Solo and LAN play",
            },
          ]}
        />
        <InfoBox variant="success" icon="🩹">
          <p>
            <strong>Patch:</strong> Replace the function entry instruction with{" "}
            <Code>RET</Code>
          </p>
          <ul style={{ margin: "8px 0 0 16px", fontSize: 13, color: "#c9d1d9" }}>
            <li>
              64-bit patch: <Code>C0 03 5F D6</Code>
            </li>
            <li>
              32-bit patch: <Code>1E FF 2F E1</Code>
            </li>
          </ul>
          <p style={{ marginTop: 8 }}>
            <strong>Result:</strong> The function returns immediately before
            subtraction occurs, ensuring ammo counts remain synchronized at
            maximum across the network.
          </p>
        </InfoBox>
      </div>

      {/* 4.2 */}
      <div style={{ position: "relative", marginBottom: 28 }}>
        <div
          style={{
            position: "absolute",
            left: -28,
            top: 4,
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "#58a6ff",
            border: "2px solid #0d1117",
            boxShadow: "0 0 0 2px #58a6ff",
          }}
        />
        <h3 style={{ fontSize: 15, fontWeight: 700, color: "#58a6ff", margin: "0 0 10px" }}>
          4.2 — Pro-Style Reloading (Infinite Reserve)
        </h3>
        <PatchTable
          rows={[
            {
              label: "Location",
              value: <Code>Weapon::completeReloadWeapon</Code>,
            },
          ]}
        />
        <InfoBox variant="success" icon="🩹">
          <p>
            <strong>Patch:</strong> Identify the call to{" "}
            <Code>setAmmo(this, count, false)</Code> at the end of the function.
            Replace the <strong>BL (Branch Link)</strong> instruction with{" "}
            <strong>NOP</strong>.
          </p>
          <p style={{ marginTop: 8 }}>
            <strong>Result:</strong> The gun reloads and empties its clip
            normally, but the "Spare Ammo" count never updates/decreases.
          </p>
        </InfoBox>
      </div>

      {/* 4.3 */}
      <div style={{ position: "relative", marginBottom: 28 }}>
        <div
          style={{
            position: "absolute",
            left: -28,
            top: 4,
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "#58a6ff",
            border: "2px solid #0d1117",
            boxShadow: "0 0 0 2px #58a6ff",
          }}
        />
        <h3 style={{ fontSize: 15, fontWeight: 700, color: "#58a6ff", margin: "0 0 10px" }}>
          4.3 — Unlimited Nitro (Jetpack)
        </h3>
        <PatchTable
          rows={[
            {
              label: "Location",
              value: <Code>SoldierLocalController::setPower</Code>,
            },
            { label: "Offset", value: <Code>0x009e68c4</Code> },
          ]}
        />
        <InfoBox variant="success" icon="🩹">
          <p>
            <strong>Patch:</strong> Identify the <strong>STR (Store)</strong>{" "}
            instruction that writes the fuel value to memory. Replace with{" "}
            <strong>NOP</strong>.
          </p>
          <p style={{ marginTop: 8 }}>
            <strong>Result:</strong> The update to the fuel variable is skipped;
            Nitro remains frozen at 100%.
          </p>
        </InfoBox>
      </div>
    </div>
  </section>
));

SectionPhase2.displayName = "SectionPhase2";
export default SectionPhase2;
