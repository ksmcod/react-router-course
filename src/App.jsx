import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import RootLayout from "./layouts/RootLayout"
import { useEffect } from "react"
import HelpLayout from "./layouts/HelpLayout"
import Faq from "./pages/help/Faq"
import Contact from "./pages/help/Contact"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About/>} />
      <Route path="help" element={<HelpLayout/>}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Route>
  )
)


export default function App() {

  useEffect(() => {
    document.title = "React Router Course"
  },[])

  return (
    <RouterProvider router={router} />
  )
}
