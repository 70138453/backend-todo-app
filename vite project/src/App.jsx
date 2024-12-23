import { useRef } from "react";
import axios from "axios";

function App() {
  const name = useRef();
  const pass = useRef();
  const name2 = useRef();
  const pass2 = useRef();

  const signInHandler = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/token/", {
        username: name.current.value,
        password: pass.current.value,
      });

      const accessToken = response.data.access;
      const refreshToken = response.data.refresh;

      localStorage.setItem("access", accessToken);
      localStorage.setItem("refresh", refreshToken);

      console.log("Access Token:", accessToken);
      console.log("Refresh Token:", refreshToken);

      alert("Sign In Successful");
    } catch (error) {
      console.error("Sign In Error:", error);
      alert("Sign In Failed");
    }
  };

  const signUpHandler = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/tasks/signup/", {
        username: name2.current.value,
        password: pass2.current.value,
      });

      const accessToken = response.data.access;
      const refreshToken = response.data.refresh;

      localStorage.setItem("access", accessToken);
      localStorage.setItem("refresh", refreshToken);

      console.log("Access Token:", accessToken);
      console.log("Refresh Token:", refreshToken);

      alert("Sign Up Successful");
    } catch (error) {
      console.error("Sign Up Error:", error);
      alert("Sign Up Failed");
    }
  };

  return (
    <div>
      {/* Sign In Section */}
      <h1>Sign In</h1>
      <input type="text" placeholder="Username" ref={name} />
      <input type="password" placeholder="Password" ref={pass} />
      <button onClick={signInHandler}>Sign In</button>

      <hr />

      {/* Sign Up Section */}
      <h1>Sign Up</h1>
      <input type="text" placeholder="Username" ref={name2} />
      <input type="password" placeholder="Password" ref={pass2} />
      <button onClick={signUpHandler}>Sign Up</button>
      {localStorage.getItem("access")}
    </div>
  );
}

export default App;
