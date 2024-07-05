import { useState, useEffect } from "react";
import axios from "axios";
import { UserContext } from "./UserContext.jsx";
import { useContext } from "react";

export default function RegisterAndLoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginOrRegiter, setIsLoginOrRegister] = useState("login");
  const { setUsername: setLoggedInUsername, setId } = useContext(UserContext);
  function handleSubmit(ev) {
    ev.preventDefault();
    const url = isLoginOrRegiter === "login" ? "/login" : "/register";
    const { data } = axios.post(url, { username, password }).then((res) => {
      //  console.log(res.data);
      const { id } = res.data;
      setId(id);
      setLoggedInUsername(username);
    });
  }
  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <form className="w-64 mx-auto mb-12" onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
          type="text"
          placeholder="username"
          className="block w-full rounded-sm p-2 mb-2 boarder"
        />
        <input
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          type="password"
          placeholder="password"
          className="block w-full rounded-sm p-2 mb-2 boarder"
        />
        <button className="block w-full bg-blue-500 text-white rounded-sm p-2">
          {isLoginOrRegiter === "login" ? "Login" : "Register"}
        </button>
        <div className="text-center mt-2">
          {isLoginOrRegiter === "register" && (
            <div>
              Already have an account?{" "}
              <button
                className="ml-1"
                onClick={() => {
                  setIsLoginOrRegister("login");
                }}
              >
                Login
              </button>
            </div>
          )}
          {isLoginOrRegiter === "login" && (
            <div>
              Do not have an account?{" "}
              <button
                className="ml-1"
                onClick={() => {
                  setIsLoginOrRegister("register");
                }}
              >
                Register
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
