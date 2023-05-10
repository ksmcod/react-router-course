import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import RootLayout from "./layouts/RootLayout"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  )
)

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
