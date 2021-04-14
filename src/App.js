import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import {Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";

const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route path='/dialogs' render={()=><Dialogs state={props.state.dialogsPage} />}/>
                    <Route path="/profile" render={()=><Profile state={props.state.profilePage} addPost={props.addPost} />}/>
                    {/*<Route path="/news" render={()=><News />}/>*/}
                    {/*<Route path="/music" render={()=><Music/>}/>*/}
                    {/*<Route path="/settings" render={()=><Settings/>}/>*/}
                </div>
            </div>
    );
}


export default App;
