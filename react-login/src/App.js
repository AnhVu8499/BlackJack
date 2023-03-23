import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form action="action_page.php" method="post">
        <div className="container">
          <label htmlFor="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required />

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />

          <button type="submit">Login</button>
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember me
          </label>
        </div>

        <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
          <span className="psw">Forgot <a href="#">password?</a></span>
        </div>
      </form>

    </div>
  );
}


export default App;
