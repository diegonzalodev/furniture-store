import { useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useCartContext } from "../../context/CartContext";
import CheckoutForm from "./CheckoutForm";
import CheckoutSuccessful from "./CheckoutSuccessful";

function CheckoutContainer() {
  const { cartList, emptyCart, totalPrice } = useCartContext();

  const [formState, setFormState] = useState({
    names: "",
    phone: "",
    email: "",
    reemail: "",
    password: "",
  });

  const [error, setError] = useState({});

  const [isUserValidated, setIsUserValidated] = useState(false);
  const [isFormValidated, setIsFormValidated] = useState(false);

  const handleInputChanged = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  const handleInputBlur = () => {
    setError(validateForm(formState));
  };

  const validateForm = (form) => {
    let errors = {};
    let regexNames = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexPhone = /[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{8})|(\d{3}[\*\.\-\s]){3}|(\d{2}[\*\.\-\s]){4}|(\d{4}[\*\.\-\s]){2})|\d{8}|\d{10}|\d{12}/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

    if (!form.names.trim()) {
      errors.names = "The field 'Names' is required";
    } else if (!regexNames.test(form.names.trim())) {
      errors.names = "This field only accepts letters and whitespace";
    } else {
      delete errors.names;
    }

    if (!form.phone.trim()) {
      errors.phone = "The field 'Phone' is required";
    } else if (!regexPhone.test(form.phone.trim())) {
      errors.phone = "Enter a valid phone number";
    } else {
      delete errors.phone;
    }

    if (!form.email.trim()) {
      errors.email = "The field 'Email' is required";
    } else if (!regexEmail.test(form.email.trim())) {
      errors.email = "Enter a valid email";
    } else {
      delete errors.email;
    }

    if (!form.reemail.trim()) {
      errors.reemail = "This field is empty, enter your email";
    } else if (form.reemail.trim() !== form.email.trim()) {
      errors.reemail = "Enter the same email, please";
    } else {
      delete errors.reemail;
    }

    if (!form.password.trim()) {
      errors.password = "The field 'Password' is required";
    } else if (!regexPassword.test(form.password.trim())) {
      errors.password =
        "Your password must have a minimum of 8 characters, a capital letter, a number and a special character";
    } else {
      delete errors.password;
    }

    if (Object.entries(errors).length === 0) {
      setIsFormValidated(true);
    }

    return errors;
  };

  const insertOrder = (e) => {
    e.preventDefault();

    if (!isFormValidated) {
      return;
    }

    const order = {};
    order.buyer = formState;
    order.items = cartList.map(({ id, name, price, quantity }) => ({
      id,
      name,
      price,
      quantity,
    }));
    order.total = totalPrice;

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order)
      .then((response) => response)
      .catch((error) => console.log(error))
      .finally(() => {
        setIsUserValidated(true),
          emptyCart(),
          setFormState({
            names: "",
            phone: "",
            email: "",
            reemail: "",
            password: "",
          });
      });
  };

  return (
    <div className="w-11/12 mx-auto my-5 md:max-w-7xl">
      {isUserValidated ? (
        <CheckoutSuccessful />
      ) : (
        <>
          <h2 className="text-center text-2xl font-bold md:text-3xl">
            First, you should register!
          </h2>
          <CheckoutForm
            formState={formState}
            insertOrder={insertOrder}
            handleInputBlur={handleInputBlur}
            handleInputChanged={handleInputChanged}
            error={error}
          />
        </>
      )}
    </div>
  );
}

export default CheckoutContainer;
