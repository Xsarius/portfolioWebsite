import "./EducationModal.scss";

const EducationCardModal = (props) => {
  return (
    <div className="modal-box">
        <div className="body">
          <div className="title">{props.title} at {props.subtitle}</div>
          <div className="desc">
            {props.desc}
          </div>
        </div>
    </div>
  );
};

export default EducationCardModal;
