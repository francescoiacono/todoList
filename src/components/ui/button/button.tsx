interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      {...props}
      className={`${props.className} px-3 py-2 rounded-lg border-none bg-sky-100 font-bold text-sky-600 hover:bg-sky-700 hover:text-white transition-all`}
    >
      {props.children}
    </button>
  );
};
