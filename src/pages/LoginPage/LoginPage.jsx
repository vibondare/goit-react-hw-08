import LoginForm from "../../components/LoginForm/LoginForm";
import { NavLink } from "react-router-dom";

export default function LoginPage() {
  return (
    <div>
      <h1>Login page</h1>
      <LoginForm />
      <span>Don't have an account? <NavLink to="/register">Click here</NavLink></span>
    </div>
  );
}
