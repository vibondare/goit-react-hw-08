import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import css from "./RegistrationForm.module.css";
import { register } from "../../redux/auth/operations";
import toast from "react-hot-toast";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success("Successfully registered!");
      })
      .catch(() => {
        toast.error("Oops! Something went wrong");
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.container}>
        <label htmlFor={nameId} className={css.label}>
          Username
        </label>
        <Field id={nameId} type="text" name="name" className={css.field} />
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
          Register
        </button>
      </Form>
    </Formik>
  );
}
