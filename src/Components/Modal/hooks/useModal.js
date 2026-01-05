export const useModal = ({toggleModal}) => {
  const closeByClick = (event) => {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  };

  return {
    closeByClick
  }
}