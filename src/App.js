import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";

import {Route} from "react-router-dom";
import ProfileInfo from "./Components/Profile/ProfileInfo/ProfileInfo";
// import Music from "./Components/Music/Music";
// import Settings from "./Components/Settings/Settings";
// import {updateNewPostText} from "./redux/state";
// import News from "./Components/News/News";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>

            <div className={"app-wrapper-content"}>

                <Route path='/dialogs'
                       render={() => <Dialogs
                           state={props.state.dialogsPage}
                           dispatch={props.dispatch}/>}/>

                <Route path="/profile"
                       render={() => <Profile
                           state={props.state.profilePage}
                           dispatch={props.dispatch}/>}/>


                {/*<Route path="/news" render={()=><News />}/>*/}
                {/*<Route path="/music" render={()=><Music/>}/>*/}
                {/*<Route path="/settings" render={()=><Settings/>}/>*/}
            </div>
        </div>
    );
}


export default App;
