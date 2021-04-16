import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {addPost, updateNewPostText, updateNewMessageText, addMessage, updateNewNameText} from "./redux/state";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App
                    state={state}
                    addPost={addPost}
                    updateNewPostText={updateNewPostText}
                    updateNewNameText={updateNewNameText}
                    updateNewMessageText={updateNewMessageText}
                    addMessage={addMessage}
                />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById("root")
    );
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//отобразить аватарки в мессаджах
//сообщениия прижаты к разным бокам вкружочек в сообщении
//добавить в sidebar блок friends три друга будут отображаться рядом
