import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import css from "./LoginForm.module.css";
import { logIn } from "../../redux/auth/operations";
import toast from "react-hot-toast";

export default function LoginForm() {
  const dispatch = useDispatch();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        toast.success("Successfully logged in!");
      })
      .catch(() => {
        toast.error("Oops! Something went wrong");
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.container}>
        <label htmlFor={emailId} className={css.label}>
          Email
        </label>
        <Field id={emailId} type="email" name="email" className={css.field} />
        <label htmlFor={passwordId} className={css.label}>
          Password
        </label>
        <Field
          id={passwordId}
          type="password"
          name="password"
          className={css.field}
        />
        <button type="submit" className={css.submitButton}>
          Login
        </button>
      </Form>
    </Formik>
  );
}
