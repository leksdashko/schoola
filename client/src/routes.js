import Auth from "./pages/auth"
import Main from "./pages/main"
import Signup from "./pages/signup"

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
    }
]