import { useEffect, useRef, useState } from "react";
import CmdBlock from "../components/CmdBlock";
import InfoBox from "../components/InfoBox";
import Code from "../components/Code";
import SectionHeader from "../components/SectionHeader";
import GitHubLogo from "../components/GitHubLogo";

type Props = {
  onBack?: () => void;
};

const NAV_ITEMS = [
  { id: "overview", label: "Overview", group: "Introduction" },
  { id: "part1", label: "Part 1 — Setup the Lab", group: "Guide" },
  { id: "part2", label: "Part 2 — Prepare Project", group: "Guide" },
  { id: "part3", label: "Part 3 — Native Patching", group: "Guide" },
  { id: "part4", label: "Part 4 — Rebuild & Sign", group: "Guide" },
  { id: "part5", label: "Part 5 — Deploy to Phone", group: "Guide" },
  { id: "offsets", label: "Offsets Reference", group: "Reference" },
];

export default function DocsPageGuide({ onBack }: Props) {
  const [activeId, setActiveId] = useState("overview");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { threshold: 0.25 }
    );
    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const setRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  const groups = Array.from(new Set(NAV_ITEMS.map((i) => i.group)));

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 260,
          height: "100vh",
          background: "#161b22",
          borderRight: "1px solid #30363d",
          overflowY: "auto",
          padding: "24px 0",
          zIndex: 100,
        }}
      >
        <div
          style={{
            padding: "0 20px 20px",
            borderBottom: "1px solid #30363d",
            marginBottom: 16,
          }}
        >
          {onBack && (
            <button
              onClick={onBack}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#8b949e",
                fontSize: 12,
                padding: "0 0 12px 0",
                display: "flex",
                alignItems: "center",
                gap: 6,
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.color = "#58a6ff")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.color = "#8b949e")
              }
            >
              ← Back to Projects
            </button>
          )}
          <div style={{ fontSize: 13, fontWeight: 700, color: "#58a6ff", textTransform: "uppercase", letterSpacing: 1 }}>
            Project Reverso
          </div>
          <div style={{ fontSize: 11, color: "#8b949e", marginTop: 2 }}>
            MMC · From-Scratch Guide
          </div>
        </div>

        {groups.map((group) => (
          <div key={group}>
            <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.2, color: "#8b949e", padding: "8px 20px 4px" }}>
              {group}
            </div>
            {NAV_ITEMS.filter((i) => i.group === group).map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "7px 20px",
                  fontSize: 13,
                  color: activeId === item.id ? "#e6edf3" : "#8b949e",
                  background: activeId === item.id ? "#21262d" : "transparent",
                  borderTop: "none",
                  borderRight: "none",
                  borderBottom: "none",
                  borderLeft: `3px solid ${activeId === item.id ? "#58a6ff" : "transparent"}`,
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e) => {
                  if (activeId !== item.id) {
                    (e.currentTarget as HTMLButtonElement).style.color = "#e6edf3";
                    (e.currentTarget as HTMLButtonElement).style.background = "#21262d";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeId !== item.id) {
                    (e.currentTarget as HTMLButtonElement).style.color = "#8b949e";
                    (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  }
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        ))}
      </nav>

      {/* Main */}
      <div style={{ marginLeft: 260, flex: 1 }}>
        {/* Topbar */}
        <div
          style={{
            background: "#161b22",
            borderBottom: "1px solid #30363d",
            padding: "14px 40px",
            display: "flex",
            alignItems: "center",
            gap: 12,
            position: "sticky",
            top: 0,
            zIndex: 50,
          }}
        >
          <span style={{ fontSize: 14, fontWeight: 600, color: "#e6edf3", marginRight: "auto" }}>
            Mini Militia Classic — Complete From-Scratch Modding Guide
          </span>
          {[{ label: "v0.14.4", bg: "#1f3a5f", color: "#79c0ff" }, { label: "ARM64-v8a", bg: "#1a3a2a", color: "#56d364" }, { label: "ARMEABI-v7a", bg: "#3a1f1f", color: "#ffa198" }].map((b) => (
            <span key={b.label} style={{ fontSize: 11, padding: "2px 10px", borderRadius: 20, fontWeight: 600, background: b.bg, color: b.color }}>{b.label}</span>
          ))}
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 40px 80px" }}>

          {/* Hero */}
          <div style={{ background: "linear-gradient(135deg, #0d1f3c 0%, #1a2a4a 60%, #0d2a1f 100%)", border: "1px solid #30363d", borderRadius: 12, padding: 40, marginBottom: 48, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -60, right: -60, width: 200, height: 200, background: "radial-gradient(circle, rgba(88,166,255,0.08) 0%, transparent 70%)", borderRadius: "50%" }} />
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 2, color: "#58a6ff", fontWeight: 700, marginBottom: 10 }}>
              📑 Complete From-Scratch Guide
            </div>
            <h1 style={{ fontSize: 26, fontWeight: 800, lineHeight: 1.2, marginBottom: 12, background: "linear-gradient(90deg, #e6edf3, #79c0ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Mini Militia Classic 0.14.4<br />Unlimited Ammo / Nitro Mod
            </h1>
            <p style={{ color: "#8b949e", fontSize: 14, margin: 0 }}>
              A step-by-step guide to building the mod from zero — environment setup through phone deployment.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 20, marginTop: 20, fontSize: 13, color: "#8b949e" }}>
              <span><strong style={{ color: "#e6edf3" }}>Author</strong> Tanvir</span>
              <span><strong style={{ color: "#e6edf3" }}>Target</strong> libcocos2dcpp.so</span>
              <span><strong style={{ color: "#e6edf3" }}>Parts</strong> 5</span>
            </div>
          </div>

          {/* Overview */}
          <section id="overview" ref={setRef("overview")} style={{ marginBottom: 56 }}>
            <SectionHeader icon="📋" iconBg="#1a3a5c" title="Overview" num="§ 0" />
            <p style={{ color: "#c9d1d9", fontSize: 14, marginBottom: 12 }}>
              This guide walks through every step needed to mod Mini Militia Classic — from installing the tools to deploying the final APK on your phone.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12, margin: "16px 0" }}>
              {[
                { n: "1", title: "Setup the Lab", desc: "WSL, Kali Linux, Ghidra, tools" },
                { n: "2", title: "Prepare Project", desc: "Download & decode the APK" },
                { n: "3", title: "Native Patching", desc: "Patch 64-bit and 32-bit libs" },
                { n: "4", title: "Rebuild & Sign", desc: "Build APK & sign with keystore" },
                { n: "5", title: "Deploy to Phone", desc: "Transfer & install on device" },
              ].map((p) => (
                <div key={p.n} style={{ background: "#21262d", border: "1px solid #30363d", borderRadius: 8, padding: "14px 16px" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#58a6ff", marginBottom: 4 }}>Part {p.n}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#e6edf3", marginBottom: 4 }}>{p.title}</div>
                  <div style={{ fontSize: 12, color: "#8b949e" }}>{p.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Part 1 */}
          <section id="part1" ref={setRef("part1")} style={{ marginBottom: 56 }}>
            <SectionHeader icon="🖥️" iconBg="#1a2a3a" title="Part 1 — Setting Up the Environment (The Lab)" num="§ 1" />

            <h3 style={{ fontSize: 15, fontWeight: 700, color: "#58a6ff", margin: "0 0 10px" }}>1.1 — Install WSL and Kali Linux</h3>
            <CmdBlock label="PowerShell (Run as Administrator)" segments={[
              { type: "prompt", text: "PS> " },
              { type: "arg", text: "wsl" },
              { type: "flag", text: " --install" },
              { type: "flag", text: " -d" },
              { type: "str", text: " kali-linux" },
            ]} />
            <InfoBox variant="note" icon="ℹ️">
              <p>After running the command, <strong>restart your PC</strong>. Then open the <strong>Kali Linux</strong> app from the Start menu and create your username and password.</p>
            </InfoBox>

            <h3 style={{ fontSize: 15, fontWeight: 700, color: "#58a6ff", margin: "20px 0 10px" }}>1.2 — Install Development Tools</h3>
            <p style={{ color: "#c9d1d9", fontSize: 14, marginBottom: 8 }}>Run these commands in your Kali terminal:</p>
            <CmdBlock label="Shell Script — Update & upgrade" segments={[
              { type: "prompt", text: "$ " },
              { type: "arg", text: "sudo apt" },
              { type: "plain", text: " update " },
              { type: "pipe", text: "&& " },
              { type: "arg", text: "sudo apt" },
              { type: "plain", text: " upgrade " },
              { type: "flag", text: "-y" },
            ]} />
            <CmdBlock label="Shell Script — Install tools" segments={[
              { type: "prompt", text: "$ " },
              { type: "arg", text: "sudo apt install" },
              { type: "plain", text: " openjdk-17-jdk apktool apksigner zipalign unzip hexedit " },
              { type: "flag", text: "-y" },
            ]} />

            <h3 style={{ fontSize: 15, fontWeight: 700, color: "#58a6ff", margin: "20px 0 10px" }}>1.3 — Install Ghidra</h3>
            <ol style={{ margin: "0 0 0 20px", color: "#c9d1d9", fontSize: 14, lineHeight: 2 }}>
              <li>Download the Ghidra zip from <strong>ghidra-sre.org</strong> on Windows.</li>
              <li>Extract it to a folder (e.g. <Code>C:\Ghidra</Code>).</li>
              <li>To launch, double-click <Code>ghidraRun.bat</Code>.</li>
            </ol>
          </section>

          {/* Part 2 */}
          <section id="part2" ref={setRef("part2")} style={{ marginBottom: 56 }}>
            <SectionHeader icon="📦" iconBg="#1a2a1a" title="Part 2 — Preparing the Project" num="§ 2" />

            <h3 style={{ fontSize: 15, fontWeight: 700, color: "#58a6ff", margin: "0 0 10px" }}>2.1 — Download the Original APK</h3>
            <InfoBox variant="warn" icon="⚠️">
              <p>Download Mini Militia Classic <strong>v0.14.4</strong>. Make sure it is a <strong>"Universal" APK</strong> that contains both <Code>arm64-v8a</Code> and <Code>armeabi-v7a</Code> libraries — otherwise it will only work on one type of device.</p>
            </InfoBox>

            <h3 style={{ fontSize: 15, fontWeight: 700, color: "#58a6ff", margin: "20px 0 10px" }}>2.2 — Decode the APK</h3>
            <p style={{ color: "#c9d1d9", fontSize: 14, marginBottom: 8 }}>Move the APK to your Kali home folder (<Code>/home/yourname/</Code>) and run:</p>
            <CmdBlock label="Shell Script — Decode APK" segments={[
              { type: "prompt", text: "$ " },
              { type: "arg", text: "apktool" },
              { type: "plain", text: " d " },
              { type: "str", text: '"Mini_Militia.apk"' },
              { type: "flag", text: " -o" },
              { type: "plain", text: " mm_mod" },
            ]} />
            <p style={{ color: "#c9d1d9", fontSize: 14 }}>
              This creates a folder called <Code>mm_mod/</Code> with the decoded contents. The native libraries are inside <Code>mm_mod/lib/</Code>.
            </p>
          </section>

          {/* Part 3 */}
          <section id="part3" ref={setRef("part3")} style={{ marginBottom: 56 }}>
            <SectionHeader icon="🩹" iconBg="#2a1a1a" title="Part 3 — Native Patching (The Brains)" num="§ 3" />

            <h3 style={{ fontSize: 15, fontWeight: 700, color: "#58a6ff", margin: "0 0 10px" }}>3.1 — The 64-bit Mod (Modern Phones)</h3>
            <p style={{ color: "#c9d1d9", fontSize: 14, marginBottom: 12 }}>
              Open Ghidra and import <Code>mm_mod/lib/arm64-v8a/libcocos2dcpp.so</Code>.
            </p>

            {[
              {
                title: "LAN Ammo Fix",
                rows: [
                  { label: "Function", value: <Code>Weapon::subAmmo</Code> },
                  { label: "Address", value: <Code>0x00a482e0</Code> },
                  { label: "Patch", value: "Change first instruction → RET" },
                  { label: "Effect", value: "Ammo never decreases — synced over LAN" },
                ],
              },
              {
                title: "Pro-Reload Fix",
                rows: [
                  { label: "Function", value: <Code>Weapon::completeReloadWeapon</Code> },
                  { label: "Patch", value: <>Find the <Code>bl setAmmo</Code> line at the bottom → change to NOP</> },
                  { label: "Effect", value: "Spare ammo never decreases on reload" },
                ],
              },
              {
                title: "Nitro Fix",
                rows: [
                  { label: "Function", value: <Code>SoldierLocalController::setPower</Code> },
                  { label: "Patch", value: "Find the STR (Store) instruction → change to NOP" },
                  { label: "Effect", value: "Jetpack fuel frozen at 100%" },
                ],
              },
            ].map((patch) => (
              <div key={patch.title} style={{ marginBottom: 20 }}>
                <h4 style={{ fontSize: 13, fontWeight: 700, color: "#3fb950", margin: "16px 0 8px" }}>✦ {patch.title}</h4>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                  <tbody>
                    {patch.rows.map((row, i) => (
                      <tr key={i}>
                        <td style={{ border: "1px solid #30363d", padding: "8px 14px", color: "#8b949e", background: "#21262d", width: "120px", fontWeight: 600, fontSize: 11, textTransform: "uppercase", letterSpacing: 0.5 }}>{row.label}</td>
                        <td style={{ border: "1px solid #30363d", padding: "8px 14px", color: "#e6edf3", background: i % 2 === 1 ? "rgba(255,255,255,0.02)" : undefined }}>{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}

            <InfoBox variant="note" icon="💾">
              <p><strong>Export after patching:</strong> File → Export Program → Format: <strong>Binary</strong>. Save back to <Code>mm_mod/lib/arm64-v8a/libcocos2dcpp.so</Code>.</p>
            </InfoBox>

            <h3 style={{ fontSize: 15, fontWeight: 700, color: "#58a6ff", margin: "28px 0 10px" }}>3.2 — The 32-bit Mod (Older Phones)</h3>
            <p style={{ color: "#c9d1d9", fontSize: 14, marginBottom: 12 }}>
              Import <Code>mm_mod/lib/armeabi-v7a/libcocos2dcpp.so</Code> into Ghidra (as a separate project).
            </p>
            <InfoBox variant="warn" icon="⚠️">
              <p>
                Search the <strong>Symbol Tree</strong> for the same function names (<Code>subAmmo</Code>, <Code>completeReloadWeapon</Code>). For 32-bit returns, use <strong>BX LR</strong> instead of <strong>RET</strong>. The Nitro offset for ARMv7 is still unknown — see troubleshooting.
              </p>
            </InfoBox>
            <p style={{ color: "#c9d1d9", fontSize: 14 }}>
              Export back to <Code>mm_mod/lib/armeabi-v7a/libcocos2dcpp.so</Code>.
            </p>
          </section>

          {/* Part 4 */}
          <section id="part4" ref={setRef("part4")} style={{ marginBottom: 56 }}>
            <SectionHeader icon="🔐" iconBg="#2a2a1a" title="Part 4 — Rebuilding & Signing" num="§ 4" />

            <h3 style={{ fontSize: 15, fontWeight: 700, color: "#58a6ff", margin: "0 0 10px" }}>4.1 — Build the APK</h3>
            <CmdBlock label="Shell Script — Build with AAPT2" segments={[
              { type: "prompt", text: "$ " },
              { type: "arg", text: "apktool" },
              { type: "plain", text: " b " },
              { type: "flag", text: "--use-aapt2" },
              { type: "plain", text: " mm_mod " },
              { type: "flag", text: "-o" },
              { type: "plain", text: " " },
              { type: "str", text: "unsigned_mod.apk" },
            ]} />

            <h3 style={{ fontSize: 15, fontWeight: 700, color: "#58a6ff", margin: "20px 0 10px" }}>4.2 — Create Your Keystore (Do this once)</h3>
            <InfoBox variant="danger" icon="⚠️">
              <p><strong>IMPORTANT:</strong> Back up your <Code>.jks</Code> file! If you lose it, you cannot update your mod later.</p>
            </InfoBox>
            <CmdBlock label="Shell Script — Generate keystore" segments={[
              { type: "prompt", text: "$ " },
              { type: "arg", text: "keytool" },
              { type: "flag", text: " -genkey" },
              { type: "flag", text: " -v" },
              { type: "flag", text: " -keystore" },
              { type: "plain", text: " my-mod-key.jks " },
              { type: "flag", text: "-alias" },
              { type: "plain", text: " mm-alias " },
              { type: "flag", text: "-keyalg" },
              { type: "plain", text: " RSA " },
              { type: "flag", text: "-keysize" },
              { type: "plain", text: " 2048 " },
              { type: "flag", text: "-validity" },
              { type: "plain", text: " 10000" },
            ]} />

            <h3 style={{ fontSize: 15, fontWeight: 700, color: "#58a6ff", margin: "20px 0 10px" }}>4.3 — Sign the APK</h3>
            <CmdBlock label="Shell Script — Sign APK" segments={[
              { type: "prompt", text: "$ " },
              { type: "arg", text: "apksigner" },
              { type: "plain", text: " sign " },
              { type: "flag", text: "--ks" },
              { type: "plain", text: " my-mod-key.jks " },
              { type: "flag", text: "--out" },
              { type: "plain", text: " " },
              { type: "str", text: "final-modded.apk" },
              { type: "plain", text: " unsigned_mod.apk" },
            ]} />
          </section>

          {/* Part 5 */}
          <section id="part5" ref={setRef("part5")} style={{ marginBottom: 56 }}>
            <SectionHeader icon="📲" iconBg="#1a2a1a" title="Part 5 — Deployment" num="§ 5" />

            <h3 style={{ fontSize: 15, fontWeight: 700, color: "#58a6ff", margin: "0 0 10px" }}>5.1 — Start a Transfer Server</h3>
            <CmdBlock label="Shell Script — HTTP file server" segments={[
              { type: "prompt", text: "$ " },
              { type: "arg", text: "python3" },
              { type: "flag", text: " -m" },
              { type: "plain", text: " http.server " },
              { type: "str", text: "8000" },
            ]} />
            <p style={{ color: "#c9d1d9", fontSize: 14 }}>
              From your phone's browser, go to <Code>http://[PC-IP]:8000</Code> and download <Code>final-modded.apk</Code>.
            </p>

            <h3 style={{ fontSize: 15, fontWeight: 700, color: "#58a6ff", margin: "20px 0 10px" }}>5.2 — Install on Phone</h3>
            <ol style={{ margin: "0 0 0 20px", color: "#c9d1d9", fontSize: 14, lineHeight: 2 }}>
              <li>Uninstall the original Mini Militia from your phone.</li>
              <li>Enable "Install from unknown sources" in Settings.</li>
              <li>Open the downloaded APK and install it.</li>
            </ol>

            <InfoBox variant="success" icon="✅">
              <p><strong>LAN Tip:</strong> When playing in LAN mode, always have the person with the <strong>modded APK be the Host</strong> of the room for the most stable experience.</p>
            </InfoBox>
          </section>

          {/* Offsets */}
          <section id="offsets" ref={setRef("offsets")} style={{ marginBottom: 56 }}>
            <SectionHeader icon="📍" iconBg="#1f3a1a" title="Cheat Offsets Reference" num="§ Ref" />
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr>
                  {["Function", "Address / Method", "Arch", "Status"].map((h) => (
                    <th key={h} style={{ background: "#21262d", border: "1px solid #30363d", padding: "10px 14px", textAlign: "left", fontSize: 11, textTransform: "uppercase", letterSpacing: 0.8, color: "#8b949e" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { fn: "Weapon::subAmmo", addr: "0x00a482e0 → RET", arch: "Both", ok: true },
                  { fn: "Weapon::completeReloadWeapon", addr: "bl setAmmo → NOP", arch: "Both", ok: true },
                  { fn: "SoldierLocalController::setPower", addr: "0x009e68c4 → NOP", arch: "ARM64 only", ok: false },
                  { fn: "SoldierLocalController::setPower", addr: "Offset unknown", arch: "ARMv7", ok: false },
                ].map((row, i) => (
                  <tr key={i}>
                    <td style={{ border: "1px solid #30363d", padding: "10px 14px", background: i % 2 === 1 ? "rgba(255,255,255,0.02)" : undefined }}><Code>{row.fn}</Code></td>
                    <td style={{ border: "1px solid #30363d", padding: "10px 14px", color: "#ffa657", fontFamily: "monospace", fontSize: 12, background: i % 2 === 1 ? "rgba(255,255,255,0.02)" : undefined }}>{row.addr}</td>
                    <td style={{ border: "1px solid #30363d", padding: "10px 14px", color: "#8b949e", background: i % 2 === 1 ? "rgba(255,255,255,0.02)" : undefined }}>{row.arch}</td>
                    <td style={{ border: "1px solid #30363d", padding: "10px 14px", background: i % 2 === 1 ? "rgba(255,255,255,0.02)" : undefined }}>
                      <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, fontWeight: 600, background: row.ok ? "#0d2a1f" : "#2a1f0d", color: row.ok ? "#3fb950" : "#d29922" }}>
                        {row.ok ? "✓ Working" : row.arch === "ARMv7" ? "○ Pending" : "⚠️ Partial"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Footer */}
          <div style={{ marginTop: 64, paddingTop: 24, borderTop: "1px solid #30363d", fontSize: 12, color: "#8b949e", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
            <span>Mini Militia Classic — Complete Modding Guide · v0.14.4</span>
            <span>Author: Tanvir · Targets: ARM64-v8a &amp; ARMEABI-v7a</span>
          </div>
        </div>
      </div>
    </div>
  );
}
