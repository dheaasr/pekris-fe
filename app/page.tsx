"use client";
export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <button
        onClick={() => alert("Hi")}
        style={{
          padding: "10px 20px",
          background: "#0070f3",
          color: "white",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Say Hi
      </button>
    </div>
  );
}
