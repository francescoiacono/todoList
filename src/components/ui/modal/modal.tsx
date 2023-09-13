interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = (props) => {
  return (
    <div>
      {props.isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-4">{props.children}</div>
        </div>
      )}
    </div>
  );
};
