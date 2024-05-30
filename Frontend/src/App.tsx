import { certificates } from "./assets/Objects";

const App = () => {
  const cert: any[] = [];
  let i = 0;
  certificates.forEach((certificate) => {
    const splitText = Array.from(new Set(certificate.text.split("\n")));
    console.log("🚀 ~ certificates.forEach ~ splitText:", splitText);
  });

  console.log("🚀 ~ certificates.forEach ~ cert:", cert);
  return (
    <div>
      {certificates.map((certificate, index) => (
        <a key={index} href={certificate.href}>
          {certificate.text}
        </a>
      ))}
    </div>
  );
};

export default App;
