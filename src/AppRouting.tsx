import { Route, Routes } from "react-router-dom"
import MainContainer from "./Containers/MainContainer"
import Login from "./screen/auth/login/Login"
import Signup from "./screen/auth/Signup/Signup"
import ForgotPassword from "./screen/auth/ForgotPassword/FortgotPassword"
import MainPage from "./screen/Main/MainPage"
import Profile from "./screen/Main/Profile"
import Reels from "./screen/Main/Reels"
import Postview from "./screen/Post/Postview"

const Routers = [
  {path:'/login',
    component:<Login/>
  },
  {path:'/forgotpassword',
    component:<ForgotPassword/>
  }, 
  {path:'/signup',
    component:<Signup/>
  },  {path:'/postview',
    component:<Postview/>
  },  
  {
      path: '',
      component: <MainContainer />,
      children: [
        {
          path: '',
          component:<MainPage/>,
        },
        {
          path: '/profile',
          component:<Profile/>,
        } ,{
          path: '/reels',
          component:<Reels/>,
        }
      ]
    }
  ]
  
  function AppRouting() {
  
    return (
      <Routes>
        {
          Routers.map(({ path, component, children }) => (
            <Route path={path} element={component} key={Math.random()}>
              {
                children && children.map(({ path, component}) => (
                  <Route path={path} element={component} key={Math.random()} />
                ))
              }
            </Route>
          ))}
        {/* Add the new route for Google OAuth callback */}
        <Route path="*" element={<h1 className='text-2xl font-semibold text-center my-10'>404 NOT FOUND</h1>} />
      </Routes>
    )
  }
  export default AppRouting