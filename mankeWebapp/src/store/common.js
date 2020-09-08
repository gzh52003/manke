const common = {
    state: {
        showTabbar: true,
        navTitle: ''
    },

    getters: {
        test() {
            return 'common';
        }
    },
    mutations: {
        displayTabbar(state, payload) {
            state.showTabbar = payload;
        },
        changeTitle(state, payload) {
            state.navTitle = payload
        }
    },
    actions: {

    }
}

export default common;
