import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const BookingForm = () => {
    const [maxNumberOfPeople, setMaxNumberOfPeople] = useState(10); // Máximo número de comensales en sala o terraza
    const [selectedZone, setSelectedZone] = useState('Sala');

    const handleZoneChange = (event) => {
        setSelectedZone(event.target.value);
        // Actualizar el número máximo de comensales según la zona seleccionada
        setMaxNumberOfPeople(10); // Se establece un máximo de 10 personas para ambas zonas
    };

    return (
        <div>
            <h2 className="text-4xl font-bold mb-4 text-center">Hacer <span className='text-[#BBBC4E]'>Reservas</span></h2>
            <div className="flex justify-between mt-8">
                <aside className="w-1/2 p-4 mr-10">
                    <Formik
                        initialValues={{ numberOfPeople: 1, selectedDate: '', selectedTime: '' }}
                        validate={(values) => {
                            const errors = {};
                            if (values.numberOfPeople > maxNumberOfPeople) {
                                errors.numberOfPeople = `El número máximo de comensales en ${selectedZone.toLowerCase()} es ${maxNumberOfPeople}`;
                            }
                            if (values.numberOfPeople < 1) {
                                errors.numberOfPeople = 'El número mínimo de comensales es 1';
                            }
                            return errors;
                        }}
                        onSubmit={(values) => {
                            console.log('Reserva realizada:', values);
                            // Guardar datos en Local Storage
                            localStorage.setItem('bookingData', JSON.stringify(values));
                            // Redirigir a otra página para finalizar la reserva
                            window.location.href = '/finalizar-reserva';
                        }}
                    >
                        {({ values, handleChange }) => (
                            <Form className="w-full">
                                <div className="mb-4">
                                    <label htmlFor="numberOfPeople" className="block font-medium mb-1">Número de comensales</label>
                                    <Field type="number" id="numberOfPeople" name="numberOfPeople" className="w-full p-2 border border-gray-300 rounded-md" min="1" />
                                    <ErrorMessage name="numberOfPeople" component="div" className="text-red-500 mt-1" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="zone" className="block font-medium mb-1">Zona</label>
                                    <Field as="select" id="zone" name="selectedZone" value={selectedZone} onChange={handleZoneChange} className="w-full p-2 border border-gray-300 rounded-md">
                                        <option value="Sala">Sala</option>
                                        <option value="Terraza">Terraza</option>
                                    </Field>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </aside>
                <article className="w-1/2 p-4 mr-10">
                    <Formik
                        initialValues={{ selectedDate: '', selectedTime: '' }}
                        onSubmit={(values) => {
                            console.log('Fecha y hora seleccionadas:', values);
                            // Puedes realizar alguna acción con los datos de fecha y hora aquí
                        }}
                    >
                        {({ values, handleChange }) => (
                            <Form className="w-full">
                                <div className="mb-4">
                                    <label htmlFor="date" className="block font-medium mb-1">Fecha</label>
                                    <Field type="date" id="date" name="selectedDate" className="w-full p-2 border border-gray-300 rounded-md" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="time" className="block font-medium mb-1">Hora</label>
                                    <Field type="time" id="time" name="selectedTime" className="w-full p-2 border border-gray-300 rounded-md" />
                                </div>
                                <button type="submit" className="bg-gradient-to-r from-[#AEAF50] to-[#F3C14C] hover:from-[#adaf50bd] hover:to-[#F3C14C] text-white font-bold py-2 px-4 rounded-md">Reservar</button>
                            </Form>
                        )}
                    </Formik>
                </article>
            </div>
        </div>
    );
};

export default BookingForm;
