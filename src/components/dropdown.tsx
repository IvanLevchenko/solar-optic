import { ChangeEvent, useContext, useState } from "react";

import infoIcon from "../assets/infoIcon.png";
import countries from "../data/countries.json";
import { LanguageContext } from "../context/language-context";

type Props = {
  tooltip: string;
  description: string;
  onChange: (value: string) => void;
};

function Dropdown(props: Props): JSX.Element {
  const { language } = useContext(LanguageContext);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = (): void => {
    setIsHovered(true);
  };

  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    props.onChange(e.target.value);
  };

  return (
    <div className="flex items-center gap-4 indent mb-4 relative">
      <div
        className={`${
          isHovered ? "opacity-1" : "opacity-0"
        } left-[101%] w-fit z-[100] text-nowrap absolute transition-opacity ease-in-out bg-black right-[-50px] rounded-md bg-opacity-65 p-1 px-2 text-white`}
      >
        {props.tooltip}
      </div>
      <p>{props.description}</p>
      <select
        className="w-[200px] 2xl:w-[300px] h-[40px] cursor-pointer appearance-none ml-8 bg-background-gray rounded-3xl indent-4 outline-none"
        onChange={handleChange}
      >
        {countries.map(({ country }, index) => {
          return (
            <option
              key={country[language]}
              defaultChecked={!index}
              className="rounded-full bg-background-gray border-none"
            >
              {country[language]}
            </option>
          );
        })}
      </select>
      <img
        src={infoIcon}
        alt="Info icon"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
}

export default Dropdown;
