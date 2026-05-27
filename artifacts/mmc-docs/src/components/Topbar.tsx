export default function Topbar() {
  return (
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
      <span
        style={{
          fontSize: 14,
          fontWeight: 600,
          color: "#e6edf3",
          marginRight: "auto",
        }}
      >
        Mini Militia Classic — Reverse Engineering Documentation
      </span>
      <span
        style={{
          fontSize: 11,
          padding: "2px 10px",
          borderRadius: 20,
          fontWeight: 600,
          background: "#1f3a5f",
          color: "#79c0ff",
        }}
      >
        v0.14.4
      </span>
      <span
        style={{
          fontSize: 11,
          padding: "2px 10px",
          borderRadius: 20,
          fontWeight: 600,
          background: "#1a3a2a",
          color: "#56d364",
        }}
      >
        ARM64-v8a
      </span>
      <span
        style={{
          fontSize: 11,
          padding: "2px 10px",
          borderRadius: 20,
          fontWeight: 600,
          background: "#3a1f1f",
          color: "#ffa198",
        }}
      >
        ARMEABI-v7a
      </span>
    </div>
  );
}
