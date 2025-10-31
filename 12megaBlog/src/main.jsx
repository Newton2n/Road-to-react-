
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import {AuthLayout} from "./components/index.js"
import Home from './components/Pages/Home.jsx'
import SignupPage from './components/Pages/Signup.jsx'
import LoginPage from './components/Pages/Login.jsx'
import EditPost from './components/Pages/EditPost.jsx'
import AllPost from './components/Pages/AllPost.jsx'
import AddPost from './components/Pages/Addpost.jsx'
// import EditPost from './components/Pages/EditPost.jsx'
import Post from './components/Pages/Post.jsx'
import { BrowserRouter, createBrowserRouter,RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path :"/",
    element :<App/>,
    children :[
      {path : "", element : <Home/>},
      {path : "/login", element :<AuthLayout authentication={false}><LoginPage/></AuthLayout>},
      {path : "/signup", element :<AuthLayout authentication={false}><SignupPage/></AuthLayout>},
      {path : "/all-post", element :<AuthLayout authentication={false} ><AllPost/></AuthLayout>},
      {path : "/add-post", element :<AuthLayout authentication ={true} > <AddPost/></AuthLayout>},
      {path : "/edit-post/:postId", element :<AuthLayout authentication ={true} >  <EditPost/></AuthLayout>},
      {path : "/post/:postId", element :<AuthLayout> <Post/></AuthLayout>},
    ]
  }
])
createRoot(document.getElementById('root')).render(
    
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>

)
