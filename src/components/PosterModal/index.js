import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const PosterModal = (props) => {
  const { isOpen, handleCloseModal, poster } = props;

  const closeModalWithKey = (event) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  return (
    <Dialog open={isOpen} onKeyDown={closeModalWithKey}>
      <IconButton onClick={handleCloseModal}>
        <HighlightOffIcon />
      </IconButton>
      <img
        alt="movie-poster"
        src={poster}
        style={{ width: "450px", height: "666px" }}
      />
    </Dialog>
  );
};

export default PosterModal;
