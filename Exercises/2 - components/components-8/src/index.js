import ReactDOM from "react-dom/client";
import { RenderApp } from "./App";

// Can you use the Hello component more than once in the App component? What happens if you do?

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RenderApp />);
