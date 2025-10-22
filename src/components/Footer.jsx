// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer style={{
      background: "#f0f0f0",
      color: "#333",
      padding: "0.5rem",
      textAlign: "center",
      marginTop: "2rem"
    }}>
      <p>© {new Date().getFullYear()} Box Transit App</p>
    </footer>
  );
}
