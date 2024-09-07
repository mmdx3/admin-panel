import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { registerLicense } from "@syncfusion/ej2-base";
import { ContextProvider } from "./context/ContextProvider.tsx";
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NCaF1cWWhIfkxwWmFZfVpgdl9CaFZURWYuP1ZhSXxXdkxjX39cdHxQRGVcU0c=",
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>,
);
