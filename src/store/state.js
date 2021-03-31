import images from './images'
import videos from './videos'
import quizzes from './quizzes'

const state = {
    login              :    false,
    token              :    '',
    loginUser          :    {},
    result             :    '',
    images             :    images,
    videos             :    videos,
    quizzes            :    quizzes,
    activeLessons       :   [],
    lessonList         :    ['Chest X-rays: Part 1', 'Chest X-rays: Part 2', 'Chest X-rays: Part 3'],
    lessons            :    [],
    activeGroup        :    ""
}

export default state