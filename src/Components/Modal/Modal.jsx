import { useEffect } from "react";
import * as CS from "./modal.styled";
import { IoCloseSharp } from "react-icons/io5";

export const Modal = ({ children, toggleModal }) => {
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

  const closeByClick = (event) => {
    if (event.target === event.currentTarget) {
      toggleModal();
    }

  };
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
