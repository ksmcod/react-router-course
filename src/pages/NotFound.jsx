import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
        <h2>Page not found!</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut illo earum iste vitae, fugiat et debitis impedit commodi harum error quasi quia aliquid quae aliquam consequuntur! Nisi placeat recusandae distinctio.</p>

        <p>Go back to <Link to="/">Home</Link></p>
    </div>
  )
}
