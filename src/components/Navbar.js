import React from "react";
import { useHistory } from "react-router-dom";

function Navbar({ onLogout }) {
  const history = useHistory();

  function handleClick(){
    onLogout();
    history.push("./login");
  }
  return(
    <nav>
      <button onClick={handleClick}>Logout</button>
    </nav>
  )

}

export default Navbar;
