
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create root and render app
const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// Log confirmation that the app has loaded
console.log("Invoice Generator application initialized");
