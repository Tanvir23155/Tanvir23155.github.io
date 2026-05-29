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
            background: "#3fb950",
            border: "2px solid #0d1117",
            boxShadow: "0 0 0 2px #3fb950",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: "#58a6ff", margin: 0 }}>
            4.1 — Unlimited Ammunition (LAN/Multiplayer Sync)
          </h3>
          <span style={{
            fontSize: 11, padding: "2px 8px", borderRadius: 20, fontWeight: 600,
            background: "#0d2a1f", color: "#3fb950",
          }}>✓ Both Architectures</span>
        </div>
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
              64-bit (ARM64) patch: <Code>C0 03 5F D6</Code>
            </li>
            <li>
              32-bit (ARMv7) patch: <Code>1E FF 2F E1</Code>
            </li>
          </ul>
          <p style={{ marginTop: 8 }}>
            <strong>Result:</strong> The function returns immediately before
            subtraction occurs. Ammo stays at maximum across the network.
            ✅ Works on both 64-bit and 32-bit devices.
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
            background: "#3fb950",
            border: "2px solid #0d1117",
            boxShadow: "0 0 0 2px #3fb950",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: "#58a6ff", margin: 0 }}>
            4.2 — Pro-Style Reloading (Infinite Reserve)
          </h3>
          <span style={{
            fontSize: 11, padding: "2px 8px", borderRadius: 20, fontWeight: 600,
            background: "#0d2a1f", color: "#3fb950",
          }}>✓ Both Architectures</span>
        </div>
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
          <ul style={{ margin: "8px 0 0 16px", fontSize: 13, color: "#c9d1d9" }}>
            <li>ARM64 NOP: <Code>1F 20 03 D5</Code></li>
            <li>ARMv7 NOP: <Code>00 00 A0 E3</Code></li>
          </ul>
          <p style={{ marginTop: 8 }}>
            <strong>Result:</strong> The gun reloads normally, but the "Spare
            Ammo" count never decreases. ✅ Works on both architectures.
          </p>
        </InfoBox>
      </div>

      {/* 4.3 — INCOMPLETE */}
      <div style={{ position: "relative", marginBottom: 28 }}>
        <div
          style={{
            position: "absolute",
            left: -28,
            top: 4,
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "#d29922",
            border: "2px solid #0d1117",
            boxShadow: "0 0 0 2px #d29922",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: "#58a6ff", margin: 0 }}>
            4.3 — Unlimited Nitro (Jetpack)
          </h3>
          <span style={{
            fontSize: 11, padding: "2px 8px", borderRadius: 20, fontWeight: 600,
            background: "#2a1f0d", color: "#d29922",
          }}>⚠️ ARM64 Only — Incomplete</span>
        </div>

        <InfoBox variant="warn" icon="⚠️">
          <p>
            <strong>Known Issue:</strong> The Nitro patch currently only works on{" "}
            <strong>64-bit (ARM64-v8a)</strong> devices. On 32-bit (ARMv7) devices,
            the jetpack has no fuel and the player cannot fly. The ARMv7 offset
            for <Code>SoldierLocalController::setPower</Code> has not yet been identified.
          </p>
        </InfoBox>

        <h3 style={{ fontSize: 14, fontWeight: 700, color: "#58a6ff", margin: "16px 0 8px" }}>
          ARM64 Patch (Working ✅)
        </h3>
        <PatchTable
          rows={[
            {
              label: "Location",
              value: <Code>SoldierLocalController::setPower</Code>,
            },
            { label: "Architecture", value: "ARM64-v8a only" },
            { label: "Confirmed Offset", value: <Code>0x009e68c4</Code> },
          ]}
        />
        <InfoBox variant="success" icon="🩹">
          <p>
            <strong>Patch:</strong> Replace the <strong>STR (Store)</strong>{" "}
            instruction at offset <Code>0x009e68c4</Code> with{" "}
            <strong>NOP</strong> <Code>1F 20 03 D5</Code>.
          </p>
          <p style={{ marginTop: 8 }}>
            <strong>Result:</strong> Fuel value write is skipped; Nitro stays
            frozen at 100% on 64-bit devices (e.g. Nothing Phone 3a Pro).
          </p>
        </InfoBox>

        <h3 style={{ fontSize: 14, fontWeight: 700, color: "#d29922", margin: "20px 0 8px" }}>
          ARMv7 Patch (Pending 🔍 — Needs Investigation)
        </h3>
        <PatchTable
          rows={[
            {
              label: "Location",
              value: <Code>SoldierLocalController::setPower</Code>,
            },
            { label: "Architecture", value: "ARMEABI-v7a" },
            { label: "Offset", value: "Unknown — must be found in armeabi-v7a lib" },
          ]}
        />
        <InfoBox variant="note" icon="🔎">
          <div>
            <p style={{ marginBottom: 8 }}>
              <strong>Next Steps to Fix ARMv7:</strong>
            </p>
            <ol style={{ margin: "0 0 0 16px", fontSize: 13, color: "#c9d1d9", lineHeight: 1.8 }}>
              <li>
                Open the <strong>armeabi-v7a</strong> version of{" "}
                <Code>libcocos2dcpp.so</Code> in Ghidra (separate from the arm64 lib).
              </li>
              <li>
                Search for the mangled symbol:{" "}
                <Code>SoldierLocalController::setPower</Code> using the Symbol Table.
              </li>
              <li>
                Inside the function, locate the <strong>STR</strong> instruction
                that writes the float fuel value to memory (look for a store after
                the float argument is processed).
              </li>
              <li>
                Note the offset and replace that instruction with ARMv7 NOP:{" "}
                <Code>00 00 A0 E3</Code>.
              </li>
            </ol>
          </div>
        </InfoBox>
      </div>

    </div>
  </section>
));

SectionPhase2.displayName = "SectionPhase2";
export default SectionPhase2;
