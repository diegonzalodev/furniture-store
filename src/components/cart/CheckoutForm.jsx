import Input from "./Input";

function CheckoutForm({
  formState,
  insertOrder,
  handleInputBlur,
  handleInputChanged,
  error,
}) {
  const { names, phone, email, reemail } = formState;

  return (
    <form
      className="bg-white shadow-md rounded mt-5 px-8 pt-6 pb-8"
      onSubmit={insertOrder}
    >
      <div className="grid grid-cols-2 gap-5">
        <Input
          labelInput="Names:"
          id="names"
          name="names"
          value={names}
          type="text"
          placeholder="Ex: Alexander Miller"
          handleInputBlur={handleInputBlur}
          handleInputChanged={handleInputChanged}
        >
          {error.names && (
            <div
              className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 mt-2 p-2"
              role="alert"
            >
              <p>{error.names}</p>
            </div>
          )}
        </Input>

        <Input
          labelInput="Phone:"
          id="phone"
          name="phone"
          value={phone}
          type="tel"
          placeholder="Ex: +1 (637) 766-3602"
          handleInputBlur={handleInputBlur}
          handleInputChanged={handleInputChanged}
        >
          {error.phone && (
            <div
              className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 mt-2 p-2"
              role="alert"
            >
              <p>{error.phone}</p>
            </div>
          )}
        </Input>
        <Input
          labelInput="Email:"
          id="email"
          name="email"
          value={email}
          type="email"
          placeholder="email@domain.com"
          handleInputBlur={handleInputBlur}
          handleInputChanged={handleInputChanged}
        >
          {error.email && (
            <div
              className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 mt-2 p-2"
              role="alert"
            >
              <p>{error.email}</p>
            </div>
          )}
        </Input>
        <Input
          labelInput="Repeat Email:"
          id="reemail"
          name="reemail"
          value={reemail}
          type="email"
          placeholder="email@domain.com"
          handleInputBlur={handleInputBlur}
          handleInputChanged={handleInputChanged}
        >
          {error.reemail && (
            <div
              className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 mt-2 p-2"
              role="alert"
            >
              <p>{error.reemail}</p>
            </div>
          )}
        </Input>
      </div>
      <div className="mt-3 flex items-center">
        <input
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          value="Register"
        />
      </div>
    </form>
  );
}

export default CheckoutForm;
