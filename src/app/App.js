
import './App.scss';

import {ReactComponent as MessageSVG} from "../assets/messenger.svg";
import {Modal} from "../components/modalChat/ModalChat";
import {useState} from "react";
import Chat from "../components/chat/Chat";




function App() {
    const [isOpen,setIsOpen] = useState(false)
    const [start,setStart] = useState(false)
  return (
    <div className="App">
        {!isOpen && <span className='message-button' onClick={() => {
            setIsOpen(prev => !prev)
            setStart(true)
        }}><MessageSVG /></span>}
      <Modal
          isOpen={isOpen}
          start={start}
          handleModalClose={
              ()=>{setIsOpen(prev=>!prev)}
          }
      >
          <Chat />
      </Modal>
    </div>
  );
}

export default App;
