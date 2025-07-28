import css from "./OrderForm.module.css";

export default function OrderForm() {
  return (
    <form className={css.form}>
      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Client info:</legend>
        <label className={css.label}>Name</label>
        <input className={css.input} type="text" name="username" />

        <label className={css.label}>Email</label>
        <input className={css.input} type="email" name="email" />
      </fieldset>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Delivery method:</legend>
        <label className={css.option}>
          <input type="radio" name="delivery" value="pickup" defaultChecked />
          Pickup
        </label>
        <label className={css.option}>
          <input type="radio" name="delivery" value="courier" />
          Courier
        </label>
        <label className={css.option}>
          <input type="radio" name="delivery" value="drone" />
          Drone delivery
        </label>
      </fieldset>

      <button type="submit" className={css.button}>
        Place order
      </button>
    </form>
  );
}
