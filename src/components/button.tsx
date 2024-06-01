type Props = {
  text: string;
  className?: string;
  onClick?: () => void;
};

function Button(props: Props): JSX.Element {
  return (
    <button
      className={`${props.className} bg-base-blue active:scale-95 hover:bg-darker-base-blue transition-all rounded-3xl w-fit text-white text-xl py-[12px] px-[44px]`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

export default Button;
