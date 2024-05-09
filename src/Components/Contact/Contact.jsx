import React, { useState } from "react";
import foodPlateImage from "../../assets/imagecontact.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <p className="text-lg mb-6">
          Para cualquier consulta o sugerencia, no dude en ponerse en contacto con nosotros.
        </p>
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
          <label className="block mb-4">
            <span className="text-gray-700">Nombre:</span>
            <input
              className="form-input mt-1 block w-full"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Email:</span>
            <input
              className="form-input mt-1 block w-full"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Teléfono:</span>
            <input
              className="form-input mt-1 block w-full"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Mensaje:</span>
            <textarea
              className="form-textarea mt-1 block w-full"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
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
