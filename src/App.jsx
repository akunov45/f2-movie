
import { BrowserRouter, Routes, Route } from "react-router";
import { menu } from "./routes/index"

const App = () => {
  return (
    <div>
      <BrowserRouter >
        <Routes>
          {menu.map((route, i) => {
            return (
              <Route key={i} path={route.path} element={route.element}>
                {route.children.map((route2 , i) => {
                  return <Route
                    key={i}
                    index={route2.index}
                    path={route2.path}
                    element={route2.element} />
                })}
              </Route>
            )
          })}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

// lesson1 start project and tailwind css add

// axios lybrary = fetch