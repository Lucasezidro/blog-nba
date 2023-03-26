import { Outlet } from "react-router-dom"
import { Global } from "./theme/global"


function App() {
 
  return (
    <>
      <Global />
      <Outlet />
    </>
  )
}

export default App
