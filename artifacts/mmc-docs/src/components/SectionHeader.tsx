type Props = {
  icon: string;
  iconBg: string;
  title: string;
  num: string;
};

export default function SectionHeader({ icon, iconBg, title, num }: Props) {
  return (
    <h2
      style={{
        fontSize: 20,
        fontWeight: 700,
        color: "#e6edf3",
        marginBottom: 20,
        paddingBottom: 10,
        borderBottom: "1px solid #30363d",
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      <span
        style={{
          width: 28,
          height: 28,
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 14,
          flexShrink: 0,
          background: iconBg,
        }}
      >
        {icon}
      </span>
      {title}
      <span
        style={{
          fontSize: 11,
          background: "#1f3a5f",
          color: "#79c0ff",
          padding: "2px 8px",
          borderRadius: 4,
          fontWeight: 600,
        }}
      >
        {num}
      </span>
    </h2>
  );
}
