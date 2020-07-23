import profileReducer from "./profile-reducer";

let store = {
        profilePage: {
            info: [
                {id: 1, name: 'Yonas', position: 'ceo'},
                {id: 2, name: 'Marta', position: 'ceo'},
                {id: 3, name: 'Wilhelm', position: 'ceo'}
            ],
        },

        getState() {
            return this.state;
        },
        _callSubscriber() {
            console.log('State changed');
        },

        subscribe(observer) {
            this._callSubscriber = observer;
        },
        dispatch(action) {
            this.state.profilePage = profileReducer(this.state.profilePage, action);
            this._callSubscriber(this.state);
        }
}
    export default store;
    window.store = store;
