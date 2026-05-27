import { forwardRef } from "react";
import SectionHeader from "./SectionHeader";
import CmdBlock from "./CmdBlock";
import InfoBox from "./InfoBox";
import Code from "./Code";

type Props = { id: string };

const SectionPhase4 = forwardRef<HTMLElement, Props>(({ id }, ref) => (
  <section
    id={id}
    ref={ref as React.Ref<HTMLElement>}
    style={{ marginBottom: 56 }}
  >
    <SectionHeader
      icon="📦"
      iconBg="#2a2a1a"
      title="Phase IV — APK Reconstruction & Signing"
      num="§ 6"
    />
    <p style={{ color: "#c9d1d9", marginBottom: 12, fontSize: 14 }}>
      After exporting the patched <Code>.so</Code> files from Ghidra and
      replacing them in the <Code>lib/</Code> directory:
    </p>

    <h3 style={{ fontSize: 15, fontWeight: 700, color: "#58a6ff", margin: "24px 0 10px" }}>
      6.1 — Building the APK
    </h3>
    <p style={{ color: "#c9d1d9", marginBottom: 8, fontSize: 14 }}>
      AAPT2 is required for modern Android resource compatibility.
    </p>
    <CmdBlock
      label="Shell Script — Build APK"
      segments={[
        { type: "prompt", text: "$ " },
        { type: "arg", text: "apktool" },
        { type: "plain", text: " " },
        { type: "flag", text: "b" },
        { type: "plain", text: " " },
        { type: "flag", text: "--use-aapt2" },
        { type: "plain", text: " mod_project " },
        { type: "flag", text: "-o" },
        { type: "plain", text: " " },
        { type: "str", text: "MiniMilitia_Mod.apk" },
      ]}
    />

    <h3 style={{ fontSize: 15, fontWeight: 700, color: "#58a6ff", margin: "24px 0 10px" }}>
      6.2 — Signing & Verification
    </h3>
    <p style={{ color: "#c9d1d9", marginBottom: 8, fontSize: 14 }}>
      Android will reject unsigned packages. We utilize a private{" "}
      <Code>.jks</Code> keystore.
    </p>

    <CmdBlock
      label="Shell Script — Sign the Package"
      segments={[
        { type: "prompt", text: "$ " },
        { type: "arg", text: "apksigner" },
        { type: "plain", text: " " },
        { type: "flag", text: "sign" },
        { type: "plain", text: " " },
        { type: "flag", text: "--ks" },
        { type: "plain", text: " " },
        { type: "str", text: "my-release-key.jks" },
        { type: "plain", text: " " },
        { type: "flag", text: "--out" },
        { type: "plain", text: " " },
        { type: "str", text: "final-modded.apk" },
        { type: "plain", text: " MiniMilitia_Mod.apk" },
      ]}
    />

    <CmdBlock
      label="Shell Script — Verify Signature Integrity"
      segments={[
        { type: "prompt", text: "$ " },
        { type: "arg", text: "apksigner" },
        { type: "plain", text: " " },
        { type: "flag", text: "verify" },
        { type: "plain", text: " " },
        { type: "str", text: "final-modded.apk" },
      ]}
    />

    <InfoBox variant="note" icon="🔑">
      <p>
        Signatures must be unique for the user's keystore. Always keep your{" "}
        <Code>.jks</Code> file secure and backed up.
      </p>
    </InfoBox>
  </section>
));

SectionPhase4.displayName = "SectionPhase4";
export default SectionPhase4;
