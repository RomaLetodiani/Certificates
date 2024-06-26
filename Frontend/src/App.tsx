import { Analytics } from "@vercel/analytics/react";
import CertificatesDiv from "./Components/Certificates";

const App = () => {
  return (
    <div className="w-full min-h-screen p-5 min-w-[350px] bg-gradient-to-br from-green-300 to-blue-700">
      <Analytics />
      <CertificatesDiv />
    </div>
  );
};

export default App;
