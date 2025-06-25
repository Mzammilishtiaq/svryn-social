import { Route, Routes } from "react-router-dom"
import MainContainer from "./Containers/MainContainer"
import Login from "./screen/auth/login/Login"

const Routers = [
  {path:'/login',
    component:<Login/>
  },  
  {
      path: '',
      component: <MainContainer />,
      children: [
        {
          path: '/cc',
          component:"ll",
          protectedPath: false,
          role: 'client',
        },
        {
          path: '/contributor',
          component:"",
          role: 'client',
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