let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'This is first param', likescount: 12 },
            { id: 1, message: 'This is second param', likescount: 122 },
            { id: 1, message: 'This is third param', likescount: 22 },
            { id: 1, message: 'This is forth param', likescount: 42 },
            { id: 1, message: 'This is fifth param', likescount: 7 }
        ],
        profileImage: { image: "https://www.bergfreunde.eu/out/pictures/promo/picture_brandshop_1440x490_4(1).jpg", width: "800px" }

    },
    dialogsPage: {
        messages: [
            { message: "Ребята давайте жить дружно!" },
            { message: "Лена сиськи по колено" },
            { message: "Эх Леша Леша!" },
            { message: "Вам бы только отдыхать!!" },
            { message: "У Антохи 3 картохи" }
        ],
        dialogs: [
            { id: 1, name: "Витя" },
            { id: 2, name: "Леха" },
            { id: 3, name: "Lena" },
            { id: 4, name: "Rita" },
            { id: 5, name: "Антоха" }
        ]
    },
    sidebar: {}
}

export let addPost = (postMessage) => {
    debugger;
    let newPost = {
        id: 5,
        message: postMessage,
        likescount: 0
    };
    state.profilePage.posts.push(newPost);
}


export default state;