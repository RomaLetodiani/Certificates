import { Certificates } from "../assets/Objects";
import { Issuers, getLogoByIssuer } from "../utils/issuerLogo";
import { parseCertificateText } from "../utils/parseCertificateText";
import { parseDate } from "../utils/parseDate";
import Certificate from "./Certificate";

const CertificatesDiv = () => {
  const sortedCertificates = Certificates.sort((a, b) => {
    const { date: dateA } = parseCertificateText(a.text);
    const { date: dateB } = parseCertificateText(b.text);
    return parseDate(dateB) - parseDate(dateA); // Sort in descending order
  });
  return (
    <div className="flex items-center justify-center flex-col gap-10">
      <h1 className="text-3xl text-white font-bold">Certificates</h1>
      <div className="flex flex-col gap-5 items-center justify-center">
        {sortedCertificates.map((certificate, index) => {
          const { href, text } = certificate;
          const { credentialId, date, issuer, name } = parseCertificateText(text);
          return (
            <Certificate
              key={index}
              credentialId={credentialId}
              credentialUrl={href}
              date={date}
              imageUrl={getLogoByIssuer(issuer as Issuers)}
              issuer={issuer}
              name={name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CertificatesDiv;
