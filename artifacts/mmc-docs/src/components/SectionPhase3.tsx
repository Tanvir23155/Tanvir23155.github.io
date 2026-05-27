import { forwardRef } from "react";
import SectionHeader from "./SectionHeader";
import InfoBox from "./InfoBox";

type Props = { id: string };

const SectionPhase3 = forwardRef<HTMLElement, Props>(({ id }, ref) => (
  <section
    id={id}
    ref={ref as React.Ref<HTMLElement>}
    style={{ marginBottom: 56 }}
  >
    <SectionHeader
      icon="📱"
      iconBg="#1a2a1a"
      title="Phase III — Multi-Architecture Compatibility"
      num="§ 5"
    />
    <p style={{ color: "#c9d1d9", marginBottom: 12, fontSize: 14 }}>
      To ensure the mod works for friends with older devices, the patches must
      be applied to <strong>both</strong> libraries contained within the APK.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16,
        margin: "16px 0",
      }}
    >
      <div
        style={{
          background: "#21262d",
          border: "1px solid #30363d",
          borderRadius: 8,
          padding: 18,
        }}
      >
        <div
          style={{ fontSize: 14, fontWeight: 700, color: "#56d364", marginBottom: 6 }}
        >
          64-bit (arm64-v8a)
        </div>
        <p style={{ fontSize: 13, color: "#c9d1d9", margin: 0 }}>
          Uses <strong>RET</strong> for returns.
          <br />
          Target for modern devices (e.g., Nothing Phone).
        </p>
      </div>
      <div
        style={{
          background: "#21262d",
          border: "1px solid #30363d",
          borderRadius: 8,
          padding: 18,
        }}
      >
        <div
          style={{ fontSize: 14, fontWeight: 700, color: "#ffa198", marginBottom: 6 }}
        >
          32-bit (armeabi-v7a)
        </div>
        <p style={{ fontSize: 13, color: "#c9d1d9", margin: 0 }}>
          Uses <strong>BX LR</strong> for returns.
          <br />
          Target for legacy/budget devices.
        </p>
      </div>
    </div>

    <InfoBox variant="warn" icon="⚠️">
      <p>
        <strong>Best Practice:</strong> If distributing to a group, mod{" "}
        <em>both</em> files and package them into a "Universal" APK. If only
        64-bit is modded, 32-bit users will experience the original, un-modded
        gameplay.
      </p>
    </InfoBox>
  </section>
));

SectionPhase3.displayName = "SectionPhase3";
export default SectionPhase3;
