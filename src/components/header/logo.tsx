import logo from "../../assets/logo.png";

function Logo(): JSX.Element {
  return (
    <img src={logo} alt="Logo" className="absolute md:relative w-[88px]"></img>
  );
}

export default Logo;
