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
      This project details the successful reverse engineering and modification of
      the Mini Militia Classic C++ engine (<strong>libcocos2dcpp.so</strong>). By
      targeting the <em>native layer</em> rather than the Smali/Java layer, we
      achieved stable, engine-level patches for:
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
          desc: "Ammo count frozen at max — synced across LAN/Multiplayer",
        },
        {
          icon: "⚡",
          name: "Unlimited Nitro",
          desc: "Jetpack fuel frozen at 100% — STR instruction replaced with NOP",
        },
        {
          icon: "🔄",
          name: "Infinite Reserve",
          desc: "Spare ammo count never decrements on reload",
        },
        {
          icon: "📱",
          name: "Dual Architecture",
          desc: "Supports 64-bit (ARM64-v8a) and 32-bit (ARMEABI-v7a)",
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
          <div style={{ fontSize: 12, color: "#8b949e" }}>{card.desc}</div>
        </div>
      ))}
    </div>

    <InfoBox variant="note" icon="ℹ️">
      <p>
        The project specifically addresses challenges in LAN/Multiplayer
        synchronization and multi-architecture compatibility (supporting both
        modern 64-bit and legacy 32-bit devices).
      </p>
    </InfoBox>
  </section>
));

SectionSummary.displayName = "SectionSummary";
export default SectionSummary;
