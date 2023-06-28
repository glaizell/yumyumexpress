import { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen z-[888] bg-black bg-opacity-75
 backdrop-blur "
      onClick={props.onHide}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="rounded-lg bg-red-500">
      <div className=" w-[80%] sm:w-8/12 md:w-1/2 lg:w-1/3 fixed top-[24vh] left-1/2 transform -translate-x-1/2  min-h-min max-h-[70vh] mb-8  z-[999] overflow-y-scroll">
        <div>{props.children}</div>
      </div>
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
