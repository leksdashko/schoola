import Auth from "./pages/auth"
import Main from "./pages/main"
import Signup from "./pages/signup"
import Teacher from "./pages/teacher/teacher"
import Teachers from "./pages/teachers"

export const authRoutes = [
    {
        path: '/admin',
        Component: Main
    },
]

export const publicRoutes = [
    {
        path: '/',
        Component: Main
    },
    {
        path: '/login',
        Component: Auth
    },
    {
        path: '/signup',
        Component: Signup
    },
    {
        path: '/teachers',
        Component: Teachers
    },
    {
        path: '/teachers/1',
        Component: Teacher
    }
]