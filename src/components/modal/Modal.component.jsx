import ReactDOM from "react-dom";
import classNames from "classnames";

const Modal = ({ children, className, isOpen, handleModalClose }) => {
    const modalStyles = classNames({
        "ns-modal__overlay": true,
        [className]: className,
    });

    const handleModalBodyClick = (event) => event.stopPropagation();

    if (isOpen) {
        return ReactDOM.createPortal(
            <div className="ns-modal" onMouseDown={handleModalClose}>
                <div className={modalStyles} onMouseDown={handleModalBodyClick}>
                    <div className="wrapper">{children}</div>
                </div>
            </div>,
            document.getElementById("root")
        );
    } else {
        return null;
    }
};

const ModalHeader = ({ children, className }) => {
    const ModalHeaderStyles = classNames({
        "ns-modal__header": true,
        [className]: className,
    });
    return <div className={ModalHeaderStyles}>{children}</div>;
};

const ModalBody = ({ children, className }) => {
    const bodyStyles = classNames({
        "ns-modal__body": true,
        [className]: className,
    });
    return <div className={bodyStyles}>{children}</div>;
};

export { Modal, ModalHeader, ModalBody };
