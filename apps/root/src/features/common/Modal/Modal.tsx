import clsx from 'clsx';
import { forwardRef, KeyboardEvent, LegacyRef } from 'react';

export interface IModalProps {
  id?: string;
  title?: string;
  description?: string;
  opened?: boolean;
  blur?: boolean;
  width?: string;
  submit: {
    label?: string;
    action?: () => void;
  };
}

const Modal = forwardRef(
  (
    {
      id = '',
      title = '',
      description = '',
      opened = false,
      blur = false,
      width = 'w-96',
      submit: { label = 'Submit', action = () => {} },
    }: IModalProps & React.HTMLAttributes<HTMLDivElement>,
    ref: LegacyRef<HTMLInputElement> | undefined,
  ) => {
    const handleClose = (event: KeyboardEvent<HTMLLabelElement>) => {
      if ((event.key === 'Escape' || event.key === 'Esc' || event.key === 'Enter') && opened) {
        // @ts-ignore
        if (ref?.current?.checked) ref.current.checked = false;
        if (action) action();
      }
    };

    const modalClassNames = clsx('modal', { 'backdrop-blur': blur });
    const modalBoxClassNames = clsx('modal-box', 'm-4', 'w-max', 'bg-slate-900', 'md:m-6', width);

    return (
      <>
        <input
          ref={ref}
          checked={opened}
          className="modal-toggle"
          id={id}
          tabIndex={0}
          type="checkbox"
          onChange={action}
          onKeyDown={() => {}}
        />
        <div className={modalClassNames} id={id}>
          <div className={modalBoxClassNames}>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="py-4">{description}</p>
            <div className="modal-action">
              <label
                className="btn"
                htmlFor={`${id}-modal`}
                // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role, jsx-a11y/role-has-required-aria-props
                role="radio"
                tabIndex={0}
                onClick={action}
                onKeyDown={handleClose}
              >
                {label}
              </label>
            </div>
          </div>
        </div>
      </>
    );
  },
);

Modal.displayName = 'Modal';

export default Modal;
