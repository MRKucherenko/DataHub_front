import { useCallback, useState } from "react";

export const useToggleModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = useCallback(() => {
    setIsOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return {
    isOpenModal,
    toggleModal,
  };
};
