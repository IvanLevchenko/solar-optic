import { ChangeEvent, useEffect, useState } from "react";
import infoIcon from "../assets/infoIcon.png";

type Props = {
  tooltip: string;
  description: string;
  defaultValue?: number;
  value?: number;
  onChange: (value: number) => void;
  type: HTMLInputElement["type"];
};

function Input(props: Props): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);
  const [defeaultValue, setDefaultValue] = useState(props.defaultValue || "");
  const [value, setValue] = useState<number>();

  const handleMouseOver = (): void => {
    setIsHovered(true);
  };

  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const newValue = Number(e.target.value);

    setValue(newValue);
    // setDefaultValue("");
    props.onChange(newValue);
  };

  useEffect(() => {
    setDefaultValue(props.defaultValue || "");
  }, [props.defaultValue]);

  return (
    <div className="flex items-center gap-4 mb-4 relative">
      <div
        className={`${
          isHovered ? "opacity-1" : "opacity-0"
        } left-[101%] w-fit z-[100] text-nowrap absolute transition-opacity ease-in-out bg-black right-[-50px] rounded-md bg-opacity-65 p-1 px-2 text-white`}
      >
        {props.tooltip}
      </div>
      <p>{props.description}</p>
      <input
        className="w-[300px] h-[40px] cursor-pointer ml-8 bg-background-gray rounded-3xl indent-4 outline-none"
        onChange={handleChange}
        type={props.type}
        min={0}
        // defaultValue={props.defaultValue || ""}
        value={defeaultValue || value}
      ></input>
      <img
        src={infoIcon}
        alt="Info icon"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
}

export default Input;
