import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const BookingForm = () => {
    const handleSubmit = async (values) => {
        const username = localStorage.getItem('username');
        const bookingData = {
            people: values.numberOfPeople,
            place: values.place,
            date: values.date,
            hour: values.hour,
            name: username,
            phoneNumber: values.phoneNumber
        };

        try {
            const response = await fetch('api/reserve/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bookingData)
            });

            if (response.ok) {
                console.log('¡Reserva exitosa!');
                // Puedes realizar alguna acción después de una reserva exitosa
            } else {
                throw new Error('Error al crear reserva');
            }
        } catch (error) {
            console.error('Error al crear reserva:', error);
            // Puedes manejar el error de alguna manera
        }
    };

    return (
        <div>
            <h2 className="text-4xl font-bold mb-4 text-center">Hacer <span className='text-[#BBBC4E]'>Reservas</span></h2>
            <div className="flex justify-between mt-8">
                <aside className="w-1/2 p-4 mr-10">
                    <Formik
                        initialValues={{
                            numberOfPeople: 1,
                            place: 'Sala',
                            date: '',
                            hour: '',
                            phoneNumber: ''
                        }}
                        validate={(values) => {
                            const errors = {};
                            if (values.numberOfPeople < 1) {
                                errors.numberOfPeople = 'El número mínimo de comensales es 1';
                            }
                            return errors;
                        }}
                        onSubmit={(values) => {
                            handleSubmit(values);
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
                                    <label htmlFor="place" className="block font-medium mb-1">Lugar</label>
                                    <Field as="select" id="place" name="place" className="w-full p-2 border border-gray-300 rounded-md">
                                        <option value="Sala">Sala</option>
                                        <option value="Terraza">Terraza</option>
                                    </Field>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="date" className="block font-medium mb-1">Fecha</label>
                                    <Field type="date" id="date" name="date" className="w-full p-2 border border-gray-300 rounded-md" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="hour" className="block font-medium mb-1">Hora</label>
                                    <Field type="time" id="hour" name="hour" className="w-full p-2 border border-gray-300 rounded-md" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="phoneNumber" className="block font-medium mb-1">Número de teléfono</label>
                                    <Field type="tel" id="phoneNumber" name="phoneNumber" className="w-full p-2 border border-gray-300 rounded-md" />
                                </div>
                                <button type="submit" className="bg-gradient-to-r from-[#AEAF50] to-[#F3C14C] hover:from-[#adaf50bd] hover:to-[#F3C14C] text-white font-bold py-2 px-4 rounded-md">Reservar</button>
                            </Form>
                        )}
                    </Formik>
                </aside>
            </div>
        </div>
    );
};

export default BookingForm;
