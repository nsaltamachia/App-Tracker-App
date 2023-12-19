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
      <p id="welcome" >Welcome, {user.name}</p>
     
      <button to="" onClick={handleLogOut}>Log Out</button>
    </nav>
  );
}