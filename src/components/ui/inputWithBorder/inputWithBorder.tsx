interface InputWithBorderProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const InputWithBorder: React.FC<InputWithBorderProps> = (props) => {
  return (
    <div className=' flex-col'>
      {props.label && (
        <label htmlFor={props.label} className='text-sm text-gray-500'>
          {props.label}
        </label>
      )}
      <input
        {...props}
        name={props.label}
        className={`${props.className} p-2 rounded-lg outline-none border-2 border-gray-300 focus:border-sky-500 transition-all`}
      />
    </div>
  );
};
