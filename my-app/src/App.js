import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import ReactDOM from "react-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";



const App = (props) => {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/me" element={ <Profile ProfilePage={props.state.ProfilePage}  dispatch={props.dispatch} />}/>
                    <Route path='/im/*' element={ <Dialogs state={props.state.MessagesPage}/>}/>
                    <Route path='/feed' element={ <News/> }/>
                    <Route path='/music' element={ <Music/> }/>
                    <Route path='/settings' element={ <Settings/> }/>
                </Routes>
            </div>
        </div>
        </BrowserRouter>
    )
}

export default App;
