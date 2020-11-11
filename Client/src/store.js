import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        wktab:'home',
        isLoggedIn: true,
        openProfile:false,
        maintab:'home',
        openedWkId: 'asdsad'
    },
    mutations: {
        changeWkTab(state,tab){
            state.wktab = tab;
        },
        toggleAuth(state,auth){
            state.isLoggedIn = auth;
        },
        openProfile(state,open){
            state.openProfile = open;
        },
        changeMainTab(state,tab){
            state.maintab = tab;
        },
        changeOpenedWkId(state,wid){
            state.openedWkId = wid;
        }
    }
});
