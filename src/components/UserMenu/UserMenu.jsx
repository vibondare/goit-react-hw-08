import css from "./UserMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import toast from "react-hot-toast";

export default function UserMenu() {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut())
      .unwrap()
      .then(() => {
        toast.success("You've successfully logged out!");
      })
      .catch(() => {
        toast.error("Oops! Something went wrong");
      });
  };

  return (
    <div className={css.userMenu}>
      <p className={css.text}>Welcome, {userName}</p>
      <button type="button" onClick={handleLogout} className={css.button}>
        Logout
      </button>
    </div>
  );
}
