import Carousel from "react-material-ui-carousel";
import "./ProjectModal.scss";
import { useEffect, useRef } from "react";

function useOutsideAlerter(ref, func) {
  useEffect(() => {

    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        func();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, func]);
}

const ProjectCardModal = ({ enablePictures = false, onClose, ...props }) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, onClose);

  const imagePaths = ["/img/loading_placeholder.png"];

  const changeImageSrc = (index, path) => {
    imagePaths[index - 1] = path;
  };

  for (let index = 1; index <= props.imgNum; index++) {
    let src = `${props.imgSrc}/${index}.png`;
    changeImageSrc(index, src);
  }



  return (
    <div className="modal-container">
      <div className="modal" ref={wrapperRef}>
        <div className="body">
        <div className="title">{props.title}</div>
          {enablePictures && (
            <Carousel
              className="carousel"
              changeOnFirstRender
              autoPlay
              fullHeightHover
              indicators={false}
              animation="slide"
            >
              {imagePaths.map((path, index) => (
                <img
                  className="image"
                  key={index}
                  src={path}
                  alt=""
                />
              ))}
            </Carousel>
          )}
          
          <div className="desc">{props.desc}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardModal;
