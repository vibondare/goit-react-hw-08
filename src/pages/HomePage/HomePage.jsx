import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div>
      <h1 className={css.title}>Contacts book &#128222;</h1>
      <p className={css.text}>
        Welcome to our contact book website! Our main features include:
      </p>
      <ul className={css.list}>
        <li className={css.listItem}>
          &#128221; Add Contact: Easily add new contacts to your book after
          providing a name and a phone number.
        </li>
        <li className={css.listItem}>
          &#128465;&#65039; Delete Contact: If a contact is no longer needed,
          you can quickly delete it from the list. Simply select the contact and
          click the delete button — we will handle the rest.
        </li>
        <li className={css.listItem}>
          &#128269; Filter Contacts by Name: Find the contact you need in
          seconds. Use our filtering feature to display only the contacts that
          match the name you entered. This is convenient and fast, especially
          when you have a large list of contacts.
        </li>
      </ul>
    </div>
  );
}
