import FocusTrap from 'focus-trap-react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  title: string;
  closeModal: () => void;
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { isOpen, closeModal, children, title } = props;

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  if (!isOpen) return null;

  return createPortal(
    <FocusTrap focusTrapOptions={{ onDeactivate: closeModal }}>
      <div className='text-sm'>
        {isOpen && (
          <div
            onClick={closeModal}
            className='fixed top-0 left-0 z-20 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'
          >
            <div
              onClick={stopPropagation}
              className='bg-white rounded-lg z-30 p-4'
            >
              <h1 className='mb-2'>{title}</h1>
              {children}
            </div>
          </div>
        )}
      </div>
    </FocusTrap>,
    document.body
  );
};
