const SET_USERS = 'SET_USERS';

let initialState = {
    profilePage: {
        info: [
            {id: 1, name: 'Yonas', position: 'ceo'},
            {id: 2, name: 'Marta', position: 'ceo'},
            {id: 3, name: 'Wilhelm', position: 'ceo'}
        ],
    }
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, info: action.info};

        default:
            return state;
    }
};

export const setUsersInfo = (info) => ({type: SET_USERS, info});

export default profileReducer;
