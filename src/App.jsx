import Router from "./router";
import Chat from "./copilot/Chat";

export default function App() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      <div style={{ flex: 1, padding: 20 }}>
        <Router />
      </div>

      <div style={{ width: 350, borderLeft: "1px solid #ddd" }}>
        <Chat />
      </div>

    </div>
  );
}
