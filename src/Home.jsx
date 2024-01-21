import { Link } from "react-router-dom";

export default function Home() {
  return <ul>
    <li><Link to="/">home</Link></li>
    <li><Link to="/todos">todos app</Link></li>
    <li><Link to="/profile">profile</Link></li>
  </ul>
}