import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [poster, setPoster] = useState("");

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleNewPoster = (posterLink) => {
    setPoster(posterLink);
  };

  return { isOpen, handleCloseModal, handleOpenModal, poster, handleNewPoster };
};

export default useModal;
