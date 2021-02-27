import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";

const App = (props) => {

    let dialogsData = [
        {id: 1, name: "Victor"},
        {id: 2, name: "Shaha"},
        {id: 3, name: "Lena"},
        {id: 4, name: "Rita"},
        {id: 5, name: "Antoha"}
    ]

    let messages = [
        {message: "Hello World!"},
        {message: "Shaha"},
        {message: "Lena"},
        {message: "Rita"},
        {message: "Antoha"}
    ]

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route path='/dialogs' render={()=><Dialogs dialogsArr={dialogsData} messagesArr={messages} />}/>
                    <Route path="/profile" render={()=><Profile/>}/>
                    <Route path="/news" render={News}/>
                    <Route path="/music" render={Music}/>
                    <Route path="/settings" render={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
