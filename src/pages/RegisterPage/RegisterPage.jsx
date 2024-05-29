import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { NavLink } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div>
      <h1>Register page</h1>
      <RegistrationForm />
      <span>Already have an account? <NavLink to="/login">Click here</NavLink></span>
    </div>
  );
}
