import Auth from "./pages/auth/auth"
import Main from "./pages/main/main"

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
    }
]