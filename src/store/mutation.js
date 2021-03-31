    
    
const mutations = {
    SET_ACTIVE_LESSON(state,lessons){
        state.activeLessons = lessons;
    },
    SET_RESULT(state,result){
        state.result = result;
    },
    SET_LOGIN_USER(state,user){
        state.loginUser = user;
    },
    SET_TOKEN(state,token){
        state.token = token;
    },
    SET_LOGIN(state,login){
        state.login = login;
    },
    SET_LESSONS(state,lessons){
        state.lessons = lessons;
    },
    SET_ACTIVE_GROUP(state,group){

        state.activeGroup = group;
        var lessons = [];
        state.lessons.forEach(async function(lesson) {
            if(lesson.slug === group){
                lessons.push(lesson);
            }
        })
        state.activeLessons = lessons;
    }
    
}

export default mutations