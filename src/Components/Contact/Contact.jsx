import React, { useState, useRef } from "react";
import validator from "validator";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: "",
    hiddenField1: '', 
    hiddenField2: '' 
  });
  const [successMessage, setSuccessMessage] = useState(null);
  const [errors, setErrors] = useState({});
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    
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
  
    if (formData.firstName.trim() === "") {
      errors.firstName = "El nombre es requerido.";
    }
  
    if (formData.email.trim() === "") {
      errors.email = "El correo electrónico es requerido.";
    }
  
    if (formData.message.trim() === "") {
      errors.message = "El mensaje es requerido.";
    } else if (formData.message.length > 400) {
      errors.message = "El mensaje debe tener menos de 400 caracteres.";
    }
  
    setErrors(errors);
    return Object.keys(errors).length === 0;
  

   
     if (formData.hiddenField1.trim() || formData.hiddenField2.trim()) {
      setErrorMessage('Submission of hidden fields is not allowed');
      return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      emailjs
        .sendForm(
          'service_e35huc7',
          'template_ah6j6ru',
          formRef.current,
          'FmQTFTk_PVHqJqPhO'
        )
        .then(
          (result) => {
            console.log('Email enviado con éxito:', result.text);
            setSuccessMessage("¡Tu consulta se ha enviado con éxito! Gracias.");
            setTimeout(() => {
              setSuccessMessage(null);
              setFormData({
                firstName: "",
                email: "",
                phone: "",
                message: "",
              });
            }, 1000);
          },
          (error) => {
            console.error('Error al enviar el email:', error.text);
          }
        );
    }
  };

  return (
    <section id="Contacto"
      className="py-8 px-4"
      style={{
        backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/alegria-de-vivir-99.appspot.com/o/fondocontacto.JPG?alt=media&token=2c0ce69c-45e0-4295-8b6a-f9fcb4921ec1)`,        backgroundSize: "cover",
        backgroundPosition: "center",
        margin: "70px",
        padding: "25px",
        borderRadius: "20px",
      }}
    >
      <div className="max-w-3xl mx-auto bg-white bg-opacity-75 p-6 rounded-lg shadow-md">
        <p className="text-lg mb-6 text-center">
          Para cualquier consulta o sugerencia, <br />no dude en ponerse en <span className="font-bold">contacto</span> con nosotros.
        </p>
        <form ref={formRef} onSubmit={handleSubmit} className="max-w-sm mx-auto">
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

            <input className= "hidden" type="text" id="hiddenField1" name="hiddenField1" value={formData.hiddenField1} onChange={handleChange} />
            <input className= "hidden" type="text" id="hiddenField2" name="hiddenField2" value={formData.hiddenField2} onChange={handleChange} />

          <button
            type="submit"
            className="bg-gradient-to-r from-[#AEAF50] to-[#F3C14C] hover:from-[#adaf50bd] hover:to-[#F3C14C] text-white font-bold py-2 px-4 rounded transition-colors duration-300 block mx-auto"
          >
            Enviar
          </button>
          {successMessage && (
            <p className="text-green-700 mt-2">{successMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
