import {Locale} from "@/i18n.config";
import {Wrapper} from "@/app/layouts/Wrapper";
import {CourseList} from "@/app/[lang]/(protected)/admin/CourseList";
import {AddCourseCard} from "@/app/[lang]/(protected)/admin/create/CourseCard";
import {AdminDashboard} from "@/app/[lang]/(protected)/admin/AdminDashboard";

export default async function AdminPage({params: { lang }}: {
  params: { lang: Locale }
}) {
  const {courses, units, lessons} = getLists()

  return (
    <AdminDashboard courses={courses} units={units} lessons={lessons} />
  )
}

function getLists() {
  return {
    courses,
    units,
    lessons,
  }
}


const units = [
  { id: 'u1', course_id: 'a1', name: "Unit 1", description: "unit.description - can be long or short, it doesn't matter. It will be truncated if it's too long.", lessonCount: 2, exerciseCount: 4 },
  { id: 'u2', course_id: 'a1', name: "Unit 2", description: "unit.description - can be long or short, it doesn't matter. It will be truncated if it's too long.", lessonCount: 1, exerciseCount: 4 },
  { id: 'u3', course_id: 'a1', name: "Unit 3", description: "unit.description - can be long or short, it doesn't matter. It will be truncated if it's too long.", lessonCount: 1, exerciseCount: 4 },
  { id: 'u4', course_id: 'a1', name: "Unit 4", description: "unit.description - can be long or short, it doesn't matter. It will be truncated if it's too long.", lessonCount: 1, exerciseCount: 4 },
  { id: 'u5', course_id: 'a2', name: "Unit 1", description: "unit.description - can be long or short, it doesn't matter. It will be truncated if it's too long.", lessonCount: 2, exerciseCount: 7 },
  { id: 'u6', course_id: 'a2', name: "Unit 2", description: "unit.description - can be long or short, it doesn't matter. It will be truncated if it's too long.", lessonCount: 2, exerciseCount: 7 },
  { id: 'u7',  course_id: 'a3', name: "Unit 1", description: "unit.description - can be long or short, it doesn't matter. It will be truncated if it's too long.", lessonCount: 1, exerciseCount: 4 },
  { id: 'u8',  course_id: 'a3', name: "Unit 2", description: "unit.description - can be long or short, it doesn't matter. It will be truncated if it's too long.", lessonCount: 1, exerciseCount: 4 },
  { id: 'u9',  course_id: 'a3', name: "Unit 3", description: "unit.description - can be long or short, it doesn't matter. It will be truncated if it's too long.", lessonCount: 1, exerciseCount: 4 },
  { id: 'u10', course_id: 'a3', name: "Unit 4", description: "unit.description - can be long or short, it doesn't matter. It will be truncated if it's too long.", lessonCount: 1, exerciseCount: 4 },
  { id: 'u11', course_id: 'a4', name: "Unit 1", description: "unit.description - can be long or short, it doesn't matter. It will be truncated if it's too long.", lessonCount: 2, exerciseCount: 9 },
  { id: 'u12', course_id: 'a4', name: "Unit 2", description: "unit.description - can be long or short, it doesn't matter. It will be truncated if it's too long.", lessonCount: 1, exerciseCount: 9 },
]

const courses = [
  { id: 'a1', name: "Course 1", description: "course.description - can be long or short, it doesn't matter. It will be truncated if it's too long.",
    price: 9500, discount: 0, premiumPrice: 16000, unitCount: 4, lessonCount: 5, exerciseCount: 16, currency: "₺"
  },
  { id: 'a2', name: "Course 1", description: "course.description - can be long or short, it doesn't matter. It will be truncated if it's too long.",
    price: 6700, discount: 0, premiumPrice: 12000, unitCount: 2, lessonCount: 4, exerciseCount: 14, currency: "₺"
  },
  { id: 'a3', name: "Course 1", description: "course.description - can be long or short, it doesn't matter. It will be truncated if it's too long.",
    price: 9500, discount: 0, premiumPrice: 16000, unitCount: 4, lessonCount: 4, exerciseCount: 12, currency: "₺"
  },
  { id: 'a4', name: "Course 1", description: "course.description - can be long or short, it doesn't matter. It will be truncated if it's too long.",
    price: 9500, discount: 0, premiumPrice: 16000, unitCount: 2, lessonCount: 3, exerciseCount: 18, currency: "₺"
  },
]

const lessons = [
  { id: 'l1', unit_id: 'u1', name: "Lesson 1", description: "lesson.description - can be long or short, it doesn't matter. It will be truncated if it's too long.", exerciseCount: 2 },
  { id: 'l2', unit_id: 'u1', name: "Lesson 2", description: "lesson.description - can be long or short, it doesn't matter. It will be truncated if it's too long.", exerciseCount: 2 },
  { id: 'l3', unit_id: 'u2', name: "Lesson 1", description: "lesson.description - can be long or short, it doesn't matter. It will be truncated if it's too long.", exerciseCount: 4 },
  { id: 'l4', unit_id: 'u3', name: "Lesson 1", description: "lesson.description - can be long or short, it doesn't matter. It will be truncated if it's too long.", exerciseCount: 2 },
  { id: 'l5', unit_id: 'u3', name: "Lesson 2", description: "lesson.description - can be long or short, it doesn't matter. It will be truncated if it's too long.", exerciseCount: 2 },
  { id: 'l6', unit_id: 'u4', name: "Lesson 1", description: "lesson.description - can be long or short, it doesn't matter. It will be truncated if it's too long.", exerciseCount: 4 },
  { id: 'l7', unit_id: 'u5', name: "Lesson 1", description: "lesson.description - can be long or short, it doesn't matter. It will be truncated if it's too long.", exerciseCount: 4 },
  { id: 'l8', unit_id: 'u5', name: "Lesson 2", description: "lesson.description - can be long or short, it doesn't matter. It will be truncated if it's too long.", exerciseCount: 3 },
  { id: 'l9', unit_id: 'u6', name: "Lesson 1", description: "lesson.description - can be long or short, it doesn't matter. It will be truncated if it's too long.", exerciseCount: 3 },
  { id: 'l10', unit_id: 'u6', name: "Lesson 2", description: "lesson.description - can be long or short, it doesn't matter. It will be truncated if it's too long.", exerciseCount: 4 },
  { id: 'l11', unit_id: 'u7', name: "Lesson 1", description: "lesson.description - can be long or short, it doesn't matter. It will be truncated if it's too long.", exerciseCount: 4 },
  { id: 'l12', unit_id: 'u8', name: "Lesson 1", description: "lesson.description - can be long or short, it doesn't matter. It will be truncated if it's too long.", exerciseCount: 4 },
  { id: 'l13', unit_id: 'u9', name: "Lesson 1", description: "lesson.description - can be long or short, it doesn't matter. It will be truncated if it's too long.", exerciseCount: 4 },
  { id: 'l14', unit_id: 'u10', name: "Lesson 1", description: "lesson.description - can be long or short, it doesn't matter. It will be truncated if it's too long.", exerciseCount: 4 },
  { id: 'l15', unit_id: 'u11', name: "Lesson 1", description: "lesson.description - can be long or short, it doesn't matter. It will be truncated if it's too long.", exerciseCount: 4 },
  { id: 'l16', unit_id: 'u11', name: "Lesson 2", description: "lesson.description - can be long or short, it doesn't matter. It will be truncated if it's too long.", exerciseCount: 5 },
  { id: 'l17', unit_id: 'u10', name: "Lesson 1", description: "lesson.description - can be long or short, it doesn't matter. It will be truncated if it's too long.", exerciseCount: 9 },
]