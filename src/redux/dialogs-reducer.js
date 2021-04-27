const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const UPDATE_NEW_NAME_TEXT = 'UPDATE-NEW-NAME-TEXT';

const dialogsReducer = (state, action) => {

    switch (action.type){
        case ADD_MESSAGE:
            let newMessage = {
                name: {id: 1, name: state.newDialogName},
                message: {message: state.newDialogMessage}
            };
            state.messages.push(newMessage.message);
            state.dialogs.push(newMessage.name);
            state.newDialogMessage = '';
            state.newDialogName = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            this._state.dialogsPage.newDialogMessage = action.newDialogMessage;
            this._callSubscriber(this._state);
            return state;
        case UPDATE_NEW_NAME_TEXT:
            state.dialogsPage.newDialogName = action.newDialogName;
            return state;
        default:
            return state;
    }

}

export const AddMessageActionCreator = () => ({type: ADD_MESSAGE})
export const UpdateNewNameTextActionCreator = (text) => ({type: UPDATE_NEW_NAME_TEXT, newDialogName: text})
export const UpdateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newDialogMessage: text})

export default dialogsReducer;