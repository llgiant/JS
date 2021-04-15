import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi", likescount: 12 },
      { id: 2, message: "Hi, how are you?", likescount: 122 },
      { id: 3, message: "Fine thx and you?", likescount: 22 },
      { id: 4, message: "Greate, thx", likescount: 42 },
      { id: 5, message: "This is fifth param", likescount: 7 },
    ],
    newPostText:"Добавьте текст",
    profileImage: {
      image:
        "https://www.bergfreunde.eu/out/pictures/promo/picture_brandshop_1440x490_4(1).jpg",
      width: "800px",
    }
  },
  dialogsPage: {
    messages: [
      { message: "Ребята давайте жить дружно!" },
      { message: "Лена сиськи по колено" },
      { message: "Эх Леша Леша!" },
      { message: "Вам бы только отдыхать!!" },
      { message: "У Антохи 3 картохи" },
    ],
    dialogs: [
      { id: 1, name: "Витя" },
      { id: 2, name: "Леха" },
      { id: 3, name: "Lena" },
      { id: 4, name: "Rita" },
      { id: 5, name: "Антоха" },
    ],
  },
  sidebar: {},
};

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likescount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};


export let updateNewPostText = (text) =>
{
  state.profilePage.newPostText = text;
  rerenderEntireTree(state);
}
window.state = state;

export default state;
