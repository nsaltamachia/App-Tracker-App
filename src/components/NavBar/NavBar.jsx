import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import "./NavBar.css";


export default function NavBar({ user, setUser}) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <p id="welcome" >Welcome back, {user.name}. <span>You've got this!</span></p>
     
      <button className="log-out" to="" onClick={handleLogOut}>Log Out</button>
    </nav>
  );
}