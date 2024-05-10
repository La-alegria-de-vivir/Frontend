import React, { useState } from "react";
import foodPlateImage from "../../assets/imagecontact.jpg";
import validator from "validator";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear previous errors when the user starts typing again
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    let errors = {};
    if (!validator.isEmail(formData.email)) {
      errors.email = "Por favor, introduce un correo electrónico válido.";
    }
    if (!validator.isAlpha(formData.firstName.replace(/ /g, ""))) {
      errors.firstName = "Solo se permiten letras en el nombre.";
    }
    if (!validator.isNumeric(formData.phone.replace(/ /g, ""))) {
      errors.phone = "El teléfono solo puede contener números.";
    } else if (
      !validator.isLength(formData.phone.replace(/ /g, ""), { min: 9, max: 11 })
    ) {
      errors.phone = "El teléfono debe tener entre 9 y 11 números.";
    }
    if (!validator.isAlpha(formData.message.replace(/ /g, ""))) {
      errors.message = "Solo se permiten letras en el mensaje.";
    }
    if (formData.firstName.trim() === "") {
      errors.firstName = "El nombre es requerido.";
    }
    if (formData.email.trim() === "") {
      errors.email = "El correo electrónico es requerido.";
    }
    if (formData.message.trim() === "") {
      errors.message = "El mensaje es requerido.";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log("Formulario enviado:", formData);
      setFormData({
        firstName: "",
        email: "",
        phone: "",
        message: "",
      });
      setSuccessMessage("¡Tu consulta se ha enviado con éxito! Gracias.");
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    }
  };

  return (
    <div
      className="py-8 px-4"
      style={{
        backgroundImage: `url(${foodPlateImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        margin: "70px",
        padding: "70px",
        borderRadius: "20px",
      }}
    >
      <div className="max-w-4xl mx-auto bg-white bg-opacity-75 p-6 rounded-lg shadow-md">
        <p className="text-lg mb-6 text-center">
        Para cualquier consulta o sugerencia, <br />no dude en ponerse en <span className="font-bold">contacto</span> con nosotros.        </p>
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
          <label className="block mb-4">
            <span className="text-gray-700 font-bold">Nombre:</span>
            <input
              className={`form-input mt-1 block w-full ${
                errors.firstName ? "border-red-500" : ""
              }`}
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </label>
          <label className="block mb-4">
            <span className="text-gray-700 font-bold">Email:</span>
            <input
              className={`form-input mt-1 block w-full ${
                errors.email ? "border-red-500" : ""
              }`}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </label>
          <label className="block mb-4">
            <span className="text-gray-700 font-bold">Teléfono:</span>
            <input
              className={`form-input mt-1 block w-full ${
                errors.phone ? "border-red-500" : ""
              }`}
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </label>
          <label className="block mb-4">
            <span className="text-gray-700 font-bold">Mensaje:</span>
            <textarea
              className={`form-textarea mt-1 block w-full ${
                errors.message ? "border-red-500" : ""
              }`}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </label>
          <button
            type="submit"
            className="bg-gradient-to-r from-[#AEAF50] to-[#F3C14C] hover:from-[#adaf50bd] hover:to-[#F3C14C] text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            Enviar
          </button>
          {successMessage && (
            <p className="text-green-700 mt-2">{successMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
