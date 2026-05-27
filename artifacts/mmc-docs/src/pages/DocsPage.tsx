import { useEffect, useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import SectionSummary from "../components/SectionSummary";
import SectionEnvironment from "../components/SectionEnvironment";
import SectionPhase1 from "../components/SectionPhase1";
import SectionPhase2 from "../components/SectionPhase2";
import SectionPhase3 from "../components/SectionPhase3";
import SectionPhase4 from "../components/SectionPhase4";
import SectionTroubleshoot from "../components/SectionTroubleshoot";

const NAV_ITEMS = [
  { id: "summary", label: "Executive Summary", group: "Overview" },
  { id: "environment", label: "Tech Environment", group: "Overview" },
  { id: "phase1", label: "Phase I — Symbol Discovery", group: "Phases" },
  { id: "phase2", label: "Phase II — Binary Patching", group: "Phases" },
  { id: "phase3", label: "Phase III — Multi-Arch", group: "Phases" },
  { id: "phase4", label: "Phase IV — APK Signing", group: "Phases" },
  { id: "troubleshoot", label: "Troubleshooting", group: "Reference" },
];

type Props = {
  projectId?: string;
  onBack?: () => void;
};

export default function DocsPage({ onBack }: Props) {
  const [activeId, setActiveId] = useState("summary");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActiveId(e.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const setRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar navItems={NAV_ITEMS} activeId={activeId} onBack={onBack} />
      <div style={{ marginLeft: 260, flex: 1, minHeight: "100vh" }}>
        <Topbar />
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "48px 40px 80px",
          }}
        >
          {/* Hero */}
          <div
            style={{
              background:
                "linear-gradient(135deg, #0d1f3c 0%, #1a2a4a 60%, #0d2a1f 100%)",
              border: "1px solid #30363d",
              borderRadius: 12,
              padding: 40,
              marginBottom: 48,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -60,
                right: -60,
                width: 200,
                height: 200,
                background:
                  "radial-gradient(circle, rgba(88,166,255,0.08) 0%, transparent 70%)",
                borderRadius: "50%",
              }}
            />
            <div
              style={{
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: 2,
                color: "#58a6ff",
                fontWeight: 700,
                marginBottom: 10,
              }}
            >
              Master Technical Documentation
            </div>
            <h1
              style={{
                fontSize: 28,
                fontWeight: 800,
                lineHeight: 1.2,
                marginBottom: 12,
                background: "linear-gradient(90deg, #e6edf3, #79c0ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Mini Militia Classic (MMC)
              <br />
              Reverse Engineering Project
            </h1>
            <p style={{ color: "#8b949e", fontSize: 14, margin: 0 }}>
              Engine-Level Resource Modification — Native C++ Layer
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 20,
                marginTop: 20,
                fontSize: 13,
                color: "#8b949e",
              }}
            >
              <span>
                <strong style={{ color: "#e6edf3" }}>Author</strong> Tanvir
              </span>
              <span>
                <strong style={{ color: "#e6edf3" }}>Date</strong> May 2024
              </span>
              <span>
                <strong style={{ color: "#e6edf3" }}>Target Library</strong>{" "}
                libcocos2dcpp.so
              </span>
              <span>
                <strong style={{ color: "#e6edf3" }}>Targets</strong>{" "}
                ARM64-v8a · ARMEABI-v7a
              </span>
            </div>
          </div>

          <SectionSummary ref={setRef("summary")} id="summary" />
          <SectionEnvironment ref={setRef("environment")} id="environment" />
          <SectionPhase1 ref={setRef("phase1")} id="phase1" />
          <SectionPhase2 ref={setRef("phase2")} id="phase2" />
          <SectionPhase3 ref={setRef("phase3")} id="phase3" />
          <SectionPhase4 ref={setRef("phase4")} id="phase4" />
          <SectionTroubleshoot ref={setRef("troubleshoot")} id="troubleshoot" />

          {/* Footer */}
          <div
            style={{
              marginTop: 64,
              paddingTop: 24,
              borderTop: "1px solid #30363d",
              fontSize: 12,
              color: "#8b949e",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            <span>
              Mini Militia Classic — Reverse Engineering Project · v0.14.4
              (Classic)
            </span>
            <span>
              Author: Tanvir · May 2024 · Targets: ARM64-v8a &amp; ARMEABI-v7a
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
