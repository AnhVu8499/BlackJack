import styles from "./styles.module.css";
import { useState, useEffect } from "react";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  // This function closes the login page and
  // opens up the window for gameplay
  function openGame() {
    window.close();
    const popup = window.open(
      "http://localhost:5501/Gameplay/devApp.html",
      "Popup",
      `width=2000,height=2000`
    );
    if (popup) {
      popup.opener = null;
    }
  }

  const [user, setUser] = useState(null);

  // Fetch user data from the server on component mount
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8080/api/profile')
      const json = await response.json()

      if (response.ok) {
        setUser(json)
      }
    }
    fetchData()
	// fetch("http://localhost:8080", {
	// 	method: "GET",
	// })
	// .then((res) => res.json())
	// .then((usersList) => {
	// 	console.log(usersList, "usersList");
	// 	setUsersList(usersList.usersList);
	// });
  }, []); 

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>Welcome to Black Jack</h1>
      </nav>
      <h2>Account Info</h2>
      {user ? (
        <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Money</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr key={user._id}>
              <td>{user.firstName}</td>
              <td>{user.money}</td>
            </tr>
          ))}
        </tbody>
      </table>
      ) : (
        <p>Loading user data...</p>
      )}
      <p>
        <button onClick={openGame}>Let's get started!</button>
      </p>
      <button className={styles.white_btn} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
  
};

export default Main;
