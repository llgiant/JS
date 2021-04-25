let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi", likescount: 12},
                {id: 2, message: "Hi, how are you?", likescount: 122},
                {id: 3, message: "Fine thx and you?", likescount: 22},
                {id: 4, message: "Greate, thx", likescount: 42},
                {id: 5, message: "This is fifth param", likescount: 7},
            ],
            newPostText: "Сообщение",
            profileImage: {
                image:
                    "https://www.bergfreunde.eu/out/pictures/promo/picture_brandshop_1440x490_4(1).jpg",
                width: "800px",
            },
        },

        dialogsPage: {
            newDialogMessage: "Добавьте текст",
            newDialogName: "Имя",
            messages: [
                {message: "Ребята давайте жить дружно!"},
                {message: "Лена сиськи по колено"},
                {message: "Эх Леша Леша!"},
                {message: "Вам бы только отдыхать!!"},
                {message: "У Антохи 3 картохи"},
            ],
            dialogs: [
                {id: 1, name: "Витя"},
                {id: 2, name: "Леха"},
                {id: 3, name: "Lena"},
                {id: 4, name: "Rita"},
                {id: 5, name: "Антоха"},
            ],
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log('state has changed');
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: store._state.profilePage.newPostText,
                likescount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(store._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.text;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                name: {id: 1, name: this._state.dialogsPage.newDialogName},
                message: {message: this._state.dialogsPage.newDialogMessage}
            };
            this._state.dialogsPage.messages.push(newMessage.message);
            this._state.dialogsPage.dialogs.push(newMessage.name);
            this._state.dialogsPage.newDialogMessage = '';
            this._state.dialogsPage.newDialogName = '';
            this._callSubscriber(store._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newDialogMessage = action.newDialogMessage;
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-NAME-TEXT') {
            this._state.dialogsPage.newDialogName = action.newDialogName;
            this._callSubscriber(store._state);
        }
    }
};

window.state = store._state;
export default store;
