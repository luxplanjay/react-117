import { useId } from "react";
import css from "./OrderForm.module.css";

export default function OrderForm() {
  const fieldId = useId();

  return (
    <form className={css.form}>
      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Client Info</legend>
        <label htmlFor={`${fieldId}-username`} className={css.label}>
          Name
        </label>
        <input
          type="text"
          name="username"
          id={`${fieldId}-username`}
          className={css.input}
        />
        <label htmlFor={`${fieldId}-email`} className={css.label}>
          Email
        </label>
        <input
          type="email"
          name="email"
          id={`${fieldId}-email`}
          className={css.input}
        />
      </fieldset>

      <button type="submit" className={css.button}>
        Place order
      </button>
    </form>
  );
}
