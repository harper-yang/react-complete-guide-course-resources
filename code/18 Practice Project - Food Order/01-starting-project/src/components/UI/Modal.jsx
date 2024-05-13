import {createPortal} from "react-dom";
import {useEffect, useRef} from "react";

export const Modal = ({children, open, onClose, className = ""}) => {

  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }

    // 这是cleanup时执行的方法
    return () => modal.close();
  }, [open]);

  return createPortal(
      <dialog ref={dialog}
              className={`modal ${className}`} onClose={onClose}>{children}
      </dialog>,
      document.getElementById("modal"))
}
