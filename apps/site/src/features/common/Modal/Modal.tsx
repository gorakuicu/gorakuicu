import clsx from 'clsx';
import React, { HTMLAttributes, useRef } from 'react';

export interface IModalProps extends React.HTMLAttributes<HTMLDivElement> {
  description?: string | JSX.Element;
  opened?: boolean;
  blur?: boolean;
  width?: string;
  submit: {
    label?: string;
    action?: () => void;
  };
}

export default function Modal({
  id = '',
  title = '',
  description = '',
  opened = false,
  blur = false,
  width = 'w-96',
  submit: { label = 'Submit', action = () => {} },
}: IModalProps & HTMLAttributes<HTMLDivElement>) {
  const checkboxRef = useRef<HTMLInputElement>(null);

  const modalClassNames = clsx('modal', { 'backdrop-blur': blur });
  const modalBoxClassNames = clsx('modal-box m-3 w-fit bg-slate-900 p-6 lg:m-6', width);

  const checkboxId = `${id}-modal`;

  const handleAction = () => {
    try {
      action();
    } catch (error) {
      console.error(
        '[Modal]/[handleAction] An error occurred while executing the modal action: ',
        error,
      );
    }
  };

  return (
    <>
      <input
        ref={checkboxRef}
        aria-checked={opened ? 'true' : 'false'}
        aria-label={label}
        checked={opened}
        className="modal-toggle"
        id={checkboxId}
        tabIndex={0}
        type="checkbox"
        onChange={handleAction}
        onKeyDown={() => {}}
      />
      <div className={modalClassNames} id={id}>
        <div className={modalBoxClassNames}>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="py-4">{description}</p>
          <div className="modal-action">
            <button
              aria-checked={opened ? 'true' : 'false'}
              aria-label={label}
              className="btn bg-accent hover:bg-primary text-black hover:text-white"
              role="radio"
              tabIndex={0}
              onClick={handleAction}
            >
              {label}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
