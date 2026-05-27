type Props = { children: string };

export default function Code({ children }: Props) {
  return (
    <code
      style={{
        fontFamily:
          "'JetBrains Mono', 'Fira Code', Consolas, monospace",
        fontSize: 12,
        background: "#1e2a3a",
        padding: "1px 6px",
        borderRadius: 3,
        color: "#ffa657",
      }}
    >
      {children}
    </code>
  );
}
