import { useId } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
// Namespace import
import * as Yup from "yup";
import css from "./OrderForm.module.css";

const OrderSchema = Yup.object().shape({
  username: Yup.string().min(2, "Too Short!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  delivery: Yup.string()
    .oneOf(["pickup", "courier", "drone"])
    .required("Required"),
  restrictions: Yup.array().of(
    Yup.string().oneOf(["vegan", "gluten-free", "nut-free"])
  ),
  deliveryTime: Yup.string().required("Required"),
  message: Yup.string().max(200, "Too long!"),
});

interface FormValues {
  username: string;
  email: string;
  delivery: "pickup" | "courier" | "drone";
  restrictions: ("vegan" | "gluten-free" | "nut-free")[];
  deliveryTime: string;
  message: string;
}

const initialFormValues: FormValues = {
  username: "Jacob",
  email: "j.mercer@mail.com",
  delivery: "pickup",
  restrictions: [],
  deliveryTime: "afternoon",
  message: "",
};

export default function OrderForm() {
  const fieldId = useId();

  const handleSubmit = async (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ) => {
    // await new Promise((r) => setTimeout(r, 1500));

    console.log(values);
    formikHelpers.resetForm();
  };

  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={OrderSchema}
      onSubmit={handleSubmit}
    >
      {(props) => {
        return (
          <Form className={css.form}>
            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Client Info</legend>
              <label htmlFor={`${fieldId}-username`} className={css.label}>
                Name
              </label>
              <Field
                type="text"
                name="username"
                id={`${fieldId}-username`}
                className={css.input}
              />
              <ErrorMessage
                name="username"
                component="span"
                className={css.error}
              />
              <label htmlFor={`${fieldId}-email`} className={css.label}>
                Email
              </label>
              <Field
                type="email"
                name="email"
                id={`${fieldId}-email`}
                className={css.input}
              />
              <ErrorMessage
                name="email"
                component="span"
                className={css.label}
              />
            </fieldset>

            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Delivery method</legend>

              <label className={css.option}>
                <Field type="radio" name="delivery" value="pickup" />
                Pickup
              </label>
              <label className={css.option}>
                <Field type="radio" name="delivery" value="courier" />
                Courier
              </label>
              <label className={css.option}>
                <Field type="radio" name="delivery" value="drone" />
                Drone delivery
              </label>
              <ErrorMessage
                name="delivery"
                component="span"
                className={css.label}
              />
            </fieldset>

            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Dietary restrictions</legend>

              <label className={css.option}>
                <Field type="checkbox" name="restrictions" value="vegan" />
                Vegan
              </label>
              <label className={css.option}>
                <Field
                  type="checkbox"
                  name="restrictions"
                  value="gluten-free"
                />
                Gluten-free
              </label>
              <label className={css.option}>
                <Field type="checkbox" name="restrictions" value="nut-free" />
                Nut-free
              </label>

              <ErrorMessage
                name="restrictions"
                component="span"
                className={css.error}
              />
            </fieldset>

            <label htmlFor={`${fieldId}-deliveryTime`} className={css.label}>
              Preferred delivery time
            </label>
            <Field
              as="select"
              name="deliveryTime"
              id={`${fieldId}-deliveryTime`}
              className={css.input}
            >
              <option value="">-- Choose delivery time --</option>
              <option value="morning">Morning (8:00-12:00)</option>
              <option value="afternoon">Afternoon (12:00-16:00)</option>
              <option value="evening">Evening (16:00-20:00)</option>
            </Field>
            <ErrorMessage
              name="deliveryTime"
              component="span"
              className={css.error}
            />

            <label htmlFor={`${fieldId}-message`} className={css.label}>
              Additional message
            </label>
            <Field
              as="textarea"
              name="message"
              rows={4}
              id={`${fieldId}-message`}
              className={css.textarea}
            ></Field>
            <ErrorMessage
              name="message"
              component="span"
              className={css.error}
            />

            <button type="submit" className={css.button}>
              {props.isSubmitting ? "Submitting order..." : "Place order"}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
