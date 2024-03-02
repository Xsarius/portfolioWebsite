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

  const splitDescription = (desc) => {
    const chunks = [];
    let remainingDesc = desc;
    const CHAR_NUM = 100;

    while (remainingDesc.length > 0) {
      let dotIndex = remainingDesc.indexOf(".");

      if (dotIndex === -1)
      {
        chunks.push(remainingDesc);
        break;
      }

      let splitIndex = dotIndex + 1;

      chunks.push(remainingDesc.substring(0, splitIndex));

      remainingDesc = remainingDesc.substring(splitIndex).trim();

      if(splitIndex < 100)
      {
        splitIndex = remainingDesc.indexOf(".") + 1;
        
        let prevDesc = chunks[chunks.length - 1];
        let nextDesc = remainingDesc.substring(0,splitIndex);
        
        let newDesc = prevDesc.concat(' ', nextDesc);

        chunks.pop();
        chunks.push(newDesc);

        remainingDesc = remainingDesc.substring(splitIndex).trim();
      }
    }

    return chunks;
  };

  return (
    <div className="modal-container">
      <div className="modal" ref={wrapperRef}>
        <div className="body">
          <div className="title">{props.title}</div>
          {(enablePictures && props.imgNum) ? (
            <Carousel
              className="carousel"
              changeOnFirstRender
              autoPlay
              fullHeightHover
              indicators={false}
              animation="slide"
            >
              {imagePaths.map((path, index) => (
                <img className="image" key={index} src={path} alt="" />
              ))}
            </Carousel>
          ) : <></>}

          <div className="desc">
            {splitDescription(props.desc).map((chunk, index) => (
              <div className="chunk" key={index}>
                {chunk}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardModal;
