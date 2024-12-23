// import { useRef } from "react";
// import axios from "axios";

// function App() {
//   const name = useRef();
//   const pass = useRef();
//   const name2 = useRef();
//   const pass2 = useRef();

//   const signInHandler = async () => {
//     try {
//       const response = await axios.post("http://127.0.0.1:8000/api/token/", {
//         username: name.current.value,
//         password: pass.current.value,
//       });

//       const accessToken = response.data.access;
//       const refreshToken = response.data.refresh;

//       localStorage.setItem("access", accessToken);
//       localStorage.setItem("refresh", refreshToken);

//       console.log("Access Token:", accessToken);
//       console.log("Refresh Token:", refreshToken);

//       alert("Sign In Successful");
//     } catch (error) {
//       console.error("Sign In Error:", error);
//       alert("Sign In Failed");
//     }
//   };

//   const signUpHandler = async () => {
//     try {
//       const response = await axios.post("http://127.0.0.1:8000/api/tasks/signup/", {
//         username: name2.current.value,
//         password: pass2.current.value,
//       });

//       const accessToken = response.data.access;
//       const refreshToken = response.data.refresh;

//       localStorage.setItem("access", accessToken);
//       localStorage.setItem("refresh", refreshToken);

//       console.log("Access Token:", accessToken);
//       console.log("Refresh Token:", refreshToken);

//       alert("Sign Up Successful");
//     } catch (error) {
//       console.error("Sign Up Error:", error);
//       alert("Sign Up Failed");
//     }
//   };

//   return (
//     <div>
//       {/* Sign In Section */}
//       <h1>Sign In</h1>
//       <input type="text" placeholder="Username" ref={name} />
//       <input type="password" placeholder="Password" ref={pass} />
//       <button onClick={signInHandler}>Sign In</button>

//       <hr />

//       {/* Sign Up Section */}
//       <h1>Sign Up</h1>
//       <input type="text" placeholder="Username" ref={name2} />
//       <input type="password" placeholder="Password" ref={pass2} />
//       <button onClick={signUpHandler}>Sign Up</button>
//       {localStorage.getItem("access")}
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

const App = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:8000/signin/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            if (response.ok) {
                alert('Sign In Successful!');
                console.log(data);
            } else {
                alert(data.detail || 'Sign In Failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:8000/signup/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            if (response.ok) {
                alert('Sign Up Successful!');
                console.log(data);
            } else {
                alert(data.detail || 'Sign Up Failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Router>
            <nav>
                <Link to="/">Home</Link> | 
                <Link to="/signin">Sign In</Link> | 
                <Link to="/signup">Sign Up</Link>
            </nav>

            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            <h1>Welcome to the Home Page</h1>
                            <p>This is the default page.</p>
                        </div>
                    }
                />
                <Route
                    path="/signin"
                    element={
                        <div>
                            <h1>Sign In</h1>
                            <form onSubmit={handleSignIn}>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button type="submit">Sign In</button>
                            </form>
                        </div>
                    }
                />
                <Route
                    path="/signup"
                    element={
                        <div>
                            <h1>Sign Up</h1>
                            <form onSubmit={handleSignUp}>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button type="submit">Sign Up</button>
                            </form>
                        </div>
                    }
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default App;
