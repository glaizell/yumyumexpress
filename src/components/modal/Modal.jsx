import { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen z-40 bg-black bg-opacity-75
 backdrop-blur "
      onClick={props.onHide}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <div className=" fixed top-[10vh] left-1/2 transform -translate-x-1/2 w-1/3 min-h-min max-h-[90vh] mb-8 px-8 py-4 rounded-lg z-50 bg-[#F1F0F3] ">
      <div>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHide={props.onHideCart || props.onCloseMenu} />,
        document.getElementById("overlay")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlay")
      )}
    </Fragment>
  );
};
export default Modal;
