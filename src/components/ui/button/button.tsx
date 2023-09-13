interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className={`${props.className} border-2 rounded-lg border-none bg-sky-500 hover:bg-sky-700 pr-3 pl-3 pt-2 pb-2 text-white transition-all hover:shadow-md focus:shadow-md`}
    >
      {props.children}
    </button>
  );
};
