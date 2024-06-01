type Props = {
  name: string;
  date: string;
  issuer: string;
  credentialId: string;
  credentialUrl: string;
  imageUrl: string;
};

const Certificate = ({ name, date, issuer, credentialId, credentialUrl, imageUrl }: Props) => {
  return (
    <a
      className="hover:scale-110 hover:from-green-500 hover:to-blue-500 transition-all ease-in hover:ease-out hover:duration-500 duration-300 flex text-white bg-gradient-to-br from-blue-500 to-green-500 p-5 border-sky-950 w-full min-w-[300px] max-w-[500px] rounded-lg shadow-md gap-5"
      href={credentialUrl}
      target="__blank"
    >
      <div className="w-[50px] h-[50px]">
        <img className="rounded-xl w-full h-full" src={imageUrl} alt={name} />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-lg font-semibold">{issuer}</p>
        <p className="text-sm">{date}</p>
        <h5 className="text-xs">Credential ID {credentialId}</h5>
      </div>
    </a>
  );
};

export default Certificate;
