export const parseCertificateText = (text: string) => {
  const [name, __, issuer, _, date, ___, credentialIdLine] = text.split("\n");

  let credentialId = "";
  if (credentialIdLine) {
    const [____, _____, Id] = credentialIdLine.split(" ");
    credentialId = Id;
  }

  return {
    credentialId,
    date,
    issuer,
    name,
  };
};
