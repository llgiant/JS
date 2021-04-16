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
import {updateNewPostText} from "./redux/state";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Route path='/dialogs'
                       render={() => <Dialogs
                           state={props.state.dialogsPage}
                           updateNewNameText={props.updateNewNameText}
                           updateNewMessageText={props.updateNewMessageText}
                           addMessage={props.addMessage}
                       />}/>

                <Route path="/profile"
                       render={() => <Profile
                           profilePage={props.state.profilePage}
                           addPost={props.addPost}
                           updateNewPostText={props.updateNewPostText}/>}/>

                {/*<Route path="/news" render={()=><News />}/>*/}
                {/*<Route path="/music" render={()=><Music/>}/>*/}
                {/*<Route path="/settings" render={()=><Settings/>}/>*/}
            </div>
        </div>
    );
}


export default App;
