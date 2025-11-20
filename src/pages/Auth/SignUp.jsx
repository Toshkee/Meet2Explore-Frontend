import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/auth";
import "./Auth.css";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordConf: "",
  });

  const {username, password, passwordConf} = formData;

    const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const newUser = await registerUser(formData);
      // Call the setUser function to update the user state, just like normal.
      setUser(newUser);
      // Take the user to the (non-existent) home page after they sign up.
      // We'll get to this shortly!
      navigate('/auth/signin');
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className="auth-container">
      <h2>Create Account</h2>

      <form className="auth-form" onSubmit={handleSubmit}>

        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder="Enter a username"
          required
          value={username}
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          type="password"
          name="hashedPassword"
          placeholder="Create a password"
          required
          value={password}
          onChange={handleChange}
        />

        <label>Confirm password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Repeat your password"
          required
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <button className="auth-btn" type="submit">Sign up</button>
      </form>

      <p className="auth-switch">
        Already have an account? <a href="/auth/signin">Sign in</a>
      </p>
    </div>
  );
};

export default SignUp;