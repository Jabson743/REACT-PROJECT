import Login from "../assets/authentication/login"
import SignUp from "../assets/authentication/SignUp"
import BookListPage from "../components/BookListPage"

const routes = [
     {
          path: "/login",
          element: <Login/>
     },
     {
          path: "/signup",
          element: <SignUp/>
     },
     {
          path: "/booklist",
          element: <BookListPage/>
     }
]

export default routes;