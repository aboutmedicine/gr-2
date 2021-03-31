var mongoose = require('mongoose');
const Lesson = mongoose.model('Lesson');

exports.lessonsList = (req, res) => {
    Lesson.find(function(err, lessons) {
        if (!err) {                            
            res.json(lessons);
        }
    });
};
exports.getLesson = (req, res) => {
    Lesson.getLessonBySlug(req.params.id, (err, lesson) => {
        if (err) {
        throw err;
        }
        res.json(lesson);
    });
};
exports.addLesson = (req, res) => {
    const lesson = new Lesson(req.body);
    lesson.save((err) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json({result:"success"});
        }
    }); 
};