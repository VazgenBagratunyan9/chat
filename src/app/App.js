import './App.scss';
import {ReactComponent as MessageSVG} from "../assets/messenger.svg";
import {Modal} from "../components/modalChat/ModalChat";
import {createContext, useEffect, useState} from "react";
import Chat from "../components/chat/Chat";
import {connect} from "react-redux";
import Header from "../header/Header";
import {Route, Switch} from "react-router-dom";
import Login from "../components/auth/Login";
import Registration from "../components/auth/Registration";
import {getUserAction, loadingAction} from "../redux/user/user.action";
// import Loading from "../components/loading/Loading";
import User from "../components/user/User";


export const Context = createContext({})

function App(props) {
    const [isOpen,setIsOpen] = useState(false);
    const [start,setStart] = useState(false);
    const status = props.user.status;
    const {user,dispatch} = props
    console.log(user)
    useEffect(() => {
        const token = localStorage.getItem('token') ?? '';
        dispatch(getUserAction(token))
    }, [status])
  return (
    <Context.Provider value={{
        status: status
    }}>
        <div className="App">
            {/*{*/}
            {/*    props.user.loading?*/}
            {/*        <Loading />:''*/}
            {/*}*/}
            <Header id={user.data?user.data.id: null}/>
            {(!isOpen) && <span className='message-button' onClick={() => {
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
            {
                props.user.status?
                    <User user={props.user}/>:
                    <Switch>
                        <Route path={'/login'}>
                            <Login />
                        </Route>
                        <Route path={'/registration'}>
                            <Registration />
                        </Route>
                    </Switch>
            }
        </div>
    </Context.Provider>
  );
}
const mapStateToProps = (state) => {

    return{
        user: state.user
    }
}
export default connect(mapStateToProps)(App);
