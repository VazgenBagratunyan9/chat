import ReactDOM from "react-dom";
import classNames from "classnames";
import {ReactComponent as CloseSVG} from "../../assets/next.svg";

const Modal = ({ children, className, isOpen, handleModalClose,start }) => {
    const modalStyles = classNames({
        "ns-modal": true,
        "open":isOpen && start,
        "close":!isOpen && start,
    });
    const wraperStyles = classNames({
        "ns-modal__wrapper": true,
        [className]: className,
    })

        return ReactDOM.createPortal(
            <div className={modalStyles} >
                <span className='close-modal' onClick={handleModalClose}> <CloseSVG/> </span>
                <div className={wraperStyles} >
                    <div className="wrapper">{children}</div>
                </div>
            </div>,
            document.getElementById("root")
        );

};

export {Modal}