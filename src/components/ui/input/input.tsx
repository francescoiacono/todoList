interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      {...props}
      className={`${props.className} border-2 border-sky-300 rounded-lg pr-3 pl-3 pt-2 pb-2 focus:border-sky-500 focus:outline-none focus:shadow-md transition-shadow`}
    />
  );
};
