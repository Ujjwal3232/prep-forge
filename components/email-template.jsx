export const EmailTemplate = ({ message }) => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#020617", // slate-950
        padding: "20px",
        color: "#cbd5e1", // slate-300
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#0f172a", // slate-900
          borderRadius: "8px",
          overflow: "hidden",
          border: "1px solid #1e293b", // slate-800
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.4)",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "20px",
            borderBottom: "1px solid #1e293b", // slate-800
            backgroundColor: "#020617", // slate-950
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "24px",
              color: "#818cf8", // indigo-400
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Prep-Forge
          </h1>
        </div>

        {/* Body */}
        <div
          style={{
            padding: "20px",
            backgroundColor: "#0f172a", // slate-900
          }}
        >
          <p
            style={{
              margin: "0 0 10px",
              fontSize: "16px",
              lineHeight: "1.7",
              color: "#cbd5e1", // slate-300
            }}
          >
            {message}
          </p>
        </div>

        {/* Footer */}
        <div
          style={{
            padding: "20px",
            backgroundColor: "#020617", // slate-950
            borderTop: "1px solid #1e293b", // slate-800
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: "0",
              fontSize: "14px",
              color: "#94a3b8", // slate-400
              lineHeight: "1.6",
            }}
          >
            This email was sent by Your Company. If you have any
            questions, feel free to{" "}
            <a
              href="mailto:support@example.com"
              style={{
                color: "#818cf8", // indigo-400
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              contact us
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};