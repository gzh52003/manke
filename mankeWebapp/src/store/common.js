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
<<<<<<< HEAD
    actions: {

=======
    actions:{
>>>>>>> 191b92474260cb2d024cec9a195d222f57b15643
    }
}

export default common;
