import { ChangeEvent, MouseEvent, useContext, useState } from "react";

import infoIcon from "../assets/infoIcon.png";
import countries from "../data/countries.json";
import { LanguageContext } from "../context/language-context";
import { createPortal } from "react-dom";

type Props = {
  tooltip: string;
  description: string;
  onChange: (value: string) => void;
};

function Dropdown(props: Props): JSX.Element {
  const { language } = useContext(LanguageContext);

  const [mouseX, setMouseX] = useState<number | null>();
  const [mouseY, setMouseY] = useState<number | null>();

  const handleMouseOver = (e: MouseEvent<HTMLImageElement>): void => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  const handleMouseLeave = (): void => {
    setMouseX(null);
    setMouseY(null);
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    props.onChange(e.target.value);
  };

  const portal = createPortal(
    <div
      style={{ left: mouseX || "", top: mouseY || "" }}
      className={`${
        mouseX && mouseX ? "opacity-1" : "opacity-0"
      } left-[101%] w-fit z-[100000] text-nowrap absolute transition-opacity ease-in-out bg-black right-[-50px] rounded-md bg-opacity-65 p-1 px-2 text-white`}
    >
      {props.tooltip}
    </div>,
    document.body
  );

  return (
    <div className="flex items-center gap-4 indent mb-4 relative">
      {portal}
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
