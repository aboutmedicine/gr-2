import axios from 'axios';
import { Config } from '../config';
import router from '../router'
axios.defaults.baseURL = Config.api_url;


const actions = {
    setActiveLesson( { commit } ,lesson){
        commit('SET_ACTIVE_LESSON',lesson)
    },
    setActiveGroup( { commit } ,group){
        commit('SET_ACTIVE_GROUP',group)
    },
    logout({commit}){
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        localStorage.removeItem("id");
        commit('SET_LOGIN_USER',null);
        commit('SET_TOKEN',null);
        commit('SET_LOGIN',false);
        router.push('/login');
    },
    getLessons({commit}){
        axios.get(`/lessons`)
            .then(({ data }) => {
                if (data) {
                    commit('SET_LESSONS',data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    },
    login( { commit }, params){
        const data = {
            username: params.email,
            hash: params.password
        }
        axios.post(`/signin`, data)
            .then(({ data }) => {
                if (data) {
                    if (data.success) {
                        localStorage.setItem("token", data.token);
                        localStorage.setItem("email", data.user.email);
                        localStorage.setItem("id", data.user._id);
                        commit('SET_LOGIN_USER',data.user);
                        commit('SET_TOKEN',data.token);
                        commit('SET_LOGIN',true);
                        router.push('/');
                    } else {
                        commit('SET_LOGIN',false);
                        console.log('err');
                    }
                }
            })
            .catch((err) => {
                console.log(err);
            });
    },
    register({ commit }, data){
        axios.post(`/signup`, data)
            .then(({ data }) => {
                if (data) {
                    commit('SET_RESULT',"success");
                    router.push('/login');
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

export default actions