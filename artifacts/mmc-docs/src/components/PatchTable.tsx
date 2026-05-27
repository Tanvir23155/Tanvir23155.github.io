type Row = { label: string; value: React.ReactNode };

type Props = {
  rows: Row[];
};

export default function PatchTable({ rows }: Props) {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        margin: "16px 0",
        fontSize: 13,
      }}
    >
      <thead>
        <tr>
          <th
            style={{
              background: "#21262d",
              border: "1px solid #30363d",
              padding: "10px 14px",
              textAlign: "left",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: 0.8,
              color: "#8b949e",
            }}
          >
            Property
          </th>
          <th
            style={{
              background: "#21262d",
              border: "1px solid #30363d",
              padding: "10px 14px",
              textAlign: "left",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: 0.8,
              color: "#8b949e",
            }}
          >
            Value
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            <td
              style={{
                border: "1px solid #30363d",
                padding: "10px 14px",
                color: "#e6edf3",
                background: i % 2 === 1 ? "rgba(255,255,255,0.02)" : undefined,
              }}
            >
              {row.label}
            </td>
            <td
              style={{
                border: "1px solid #30363d",
                padding: "10px 14px",
                color: "#e6edf3",
                background: i % 2 === 1 ? "rgba(255,255,255,0.02)" : undefined,
              }}
            >
              {row.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
