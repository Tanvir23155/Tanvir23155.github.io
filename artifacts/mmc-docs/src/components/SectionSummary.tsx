import { forwardRef } from "react";
import SectionHeader from "./SectionHeader";
import InfoBox from "./InfoBox";

type Props = { id: string };

const SectionSummary = forwardRef<HTMLElement, Props>(({ id }, ref) => (
  <section
    id={id}
    ref={ref as React.Ref<HTMLElement>}
    style={{ marginBottom: 56 }}
  >
    <SectionHeader
      icon="📋"
      iconBg="#1a3a5c"
      title="Executive Summary"
      num="§ 1"
    />
    <p style={{ color: "#c9d1d9", marginBottom: 12, fontSize: 14 }}>
      This project details the reverse engineering and modification of the Mini
      Militia Classic C++ engine (<strong>libcocos2dcpp.so</strong>). By
      targeting the <em>native layer</em> rather than the Smali/Java layer, we
      achieved engine-level patches for:
    </p>

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
          icon: "🔫",
          name: "Unlimited Ammunition",
          desc: "Ammo frozen at max — synced across LAN/Multiplayer",
          status: "✓ Complete",
          statusColor: "#3fb950",
          statusBg: "#0d2a1f",
        },
        {
          icon: "🔄",
          name: "Infinite Reserve",
          desc: "Spare ammo never decrements on reload",
          status: "✓ Complete",
          statusColor: "#3fb950",
          statusBg: "#0d2a1f",
        },
        {
          icon: "⚡",
          name: "Unlimited Nitro",
          desc: "Jetpack frozen at 100% — ARM64 only, ARMv7 pending",
          status: "⚠️ Partial",
          statusColor: "#d29922",
          statusBg: "#2a1f0d",
        },
        {
          icon: "📱",
          name: "Dual Architecture",
          desc: "ARM64 fully patched, ARMv7 nitro offset still needed",
          status: "⚠️ Partial",
          statusColor: "#d29922",
          statusBg: "#2a1f0d",
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
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#e6edf3",
              marginBottom: 4,
            }}
          >
            {card.icon} {card.name}
          </div>
          <div style={{ fontSize: 12, color: "#8b949e", marginBottom: 8 }}>
            {card.desc}
          </div>
          <span
            style={{
              fontSize: 10,
              padding: "2px 8px",
              borderRadius: 20,
              fontWeight: 600,
              background: card.statusBg,
              color: card.statusColor,
            }}
          >
            {card.status}
          </span>
        </div>
      ))}
    </div>

    <InfoBox variant="warn" icon="⚠️">
      <p>
        <strong>Project Status — In Progress:</strong> Ammo and reload patches
        are complete and work on all devices. The Nitro (jetpack) patch is
        confirmed working on <strong>ARM64 devices only</strong> (e.g. Nothing
        Phone 3a Pro). The ARMv7 offset for{" "}
        <code
          style={{
            fontFamily: "monospace",
            fontSize: 12,
            background: "#1e2a3a",
            padding: "1px 5px",
            borderRadius: 3,
            color: "#ffa657",
          }}
        >
          SoldierLocalController::setPower
        </code>{" "}
        still needs to be located in the armeabi-v7a library.
      </p>
    </InfoBox>
  </section>
));

SectionSummary.displayName = "SectionSummary";
export default SectionSummary;
