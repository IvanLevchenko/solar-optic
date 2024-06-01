import { ChangeEvent, useEffect, useState, MouseEvent } from "react";
import infoIcon from "../assets/infoIcon.png";
import { createPortal } from "react-dom";

type Props = {
  tooltip: string;
  description: string;
  defaultValue?: number;
  value?: number;
  onChange: (value: number) => void;
  type: HTMLInputElement["type"];
};

function Input(props: Props): JSX.Element {
  const [mouseX, setMouseX] = useState<number | null>();
  const [mouseY, setMouseY] = useState<number | null>();

  const [defeaultValue, setDefaultValue] = useState(props.defaultValue || "");
  const [value, setValue] = useState<number>();

  const handleMouseOver = (e: MouseEvent<HTMLImageElement>): void => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  const handleMouseLeave = (): void => {
    setMouseX(null);
    setMouseY(null);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const newValue = Number(e.target.value);

    setValue(newValue);
    props.onChange(newValue);
  };

  useEffect(() => {
    setDefaultValue(props.defaultValue || "");
  }, [props.defaultValue]);

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
    <div className="flex items-center gap-4 mb-4 relative">
      {portal}
      <p>{props.description}</p>
      <input
        className="w-[200px] 2xl:w-[300px] h-[40px] cursor-pointer ml-8 bg-background-gray rounded-3xl indent-4 outline-none"
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
