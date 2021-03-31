var lesson = require("../controller/LessonController");

module.exports = (app) => {
    app.get("/lessons", lesson.lessonsList);
    app.get("/lesson/:id", lesson.getLesson);
    app.post("/lesson", lesson.addLesson);
};
