interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      {...props}
      className={`${props.className} rounded-lg w-full h-full focus:outline-none`}
    />
  );
};
