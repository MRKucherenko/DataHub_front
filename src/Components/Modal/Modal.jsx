import { useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import * as CS from "./modal.styled";
import { useModal } from "./hooks/useModal";

export const Modal = ({ children, toggleModal }) => {
  const { closeByClick } = useModal({ toggleModal });
  useEffect(() => {
    const closeByEsc = (event) => {
      if (event.code === "Escape") {
        toggleModal();
      }
    };
    window.addEventListener("keydown", closeByEsc);
    return () => {
      window.removeEventListener("keydown", closeByEsc);
    };
  }, []);

  return (
    <CS.Overlay onClick={closeByClick}>
      <CS.ModalBox>
        {children}
        <CS.CloseButton type="button" onClick={toggleModal}>
          <IoCloseSharp />
        </CS.CloseButton>
      </CS.ModalBox>
    </CS.Overlay>
  );
};
