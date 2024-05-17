import React, { useState } from 'react';
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
    const [showModal, setShowModal] = useState(false);
    const [reservationData, setReservationData] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        try {
            const response = await fetch('api/reserve/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
            });

            if (response.ok) {
                setReservationData(values);
                setShowModal(true);
            } else {
                const data = await response.json();
                if (data.message === 'Se ha superado el número máximo de comensales en este período de dos horas. Las reservas en las próximas dos horas han sido bloqueadas.') {
                    setShowAlert(true);
                } else {
                    throw new Error('Error al crear reserva');
                }
            }
        } catch (error) {
            console.error('Error al crear reserva:', error);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        navigate('/');
    };

    const handleCloseModal = () => {
        setShowModal(false);
        navigate('/');
    };

    return (
        <section className="max-w-4xl mx-auto bg-white bg-opacity-75 p-6 rounded-lg shadow-md">
            <div>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 mt-0 lg:mt-0 xl:mt-0 text-center" style={{ marginTop: '6rem' }}>Hacer <span className='text-[#BBBC4E]'>Reservas</span></h2>
                {showAlert && (
                    <div className="bg-red-200 text-red-800 p-3 rounded-md mb-4">
                        Se ha superado el número máximo de comensales en este período de dos horas. Las reservas en las próximas dos horas han sido bloqueadas.
                    </div>
                )}
                <div className="flex justify-center mt-8">
                    <aside className=" w-[23] p-4 ml-15">
                        <Formik
                            initialValues={{
                                name: '',
                                people: 1,
                                place: 'Sala',
                                date: '',
                                hour: '',
                                phoneNumber: ''
                            }}
                            validate={(values) => {
                                const errors = {};
                                if (values.people < 1) {
                                    errors.people = 'El número mínimo de comensales es 1';
                                } else if (values.people > 10) {
                                    errors.people = 'El número máximo de comensales es 10';
                                }

                                const selectedDate = new Date(values.date);
                                const selectedDay = selectedDate.getDay(); // 0 = Domingo, 1 = Lunes, ..., 6 = Sábado
                                const selectedHour = parseInt(values.hour.substring(0, 2)); // Hora seleccionada

                                if ((selectedDay >= 3 && selectedDay <= 6) || selectedDay === 0) {
                                    // Días permitidos: Miércoles (3), Jueves (4), Viernes (5), Sábado (6), Domingo (0)
                                    if (
                                        (selectedHour >= 12 && selectedHour < 17) || // De 12:00 a 17:00 horas
                                        (selectedHour >= 20 && selectedHour < 24) // De 20:00 a 23:59 horas
                                    ) {
                                        // Hora válida
                                    } else {
                                        errors.hour = 'Hora no válida. Horario de reserva: Miércoles a Sábado (12:30 - 17:00, 20:00 - 23:30), Domingo (12:30 - 17:00)';
                                    }
                                } else {
                                    errors.hour = 'No se pueden hacer reservas los lunes y martes.';
                                }

                                return errors;
                            }}
                            onSubmit={(values) => {
                                handleSubmit(values);
                            }}
                        >
                            {({ resetForm }) => (
                                <Form className="w-full grid grid-cols-2 gap-4">
                                    <div>
                                        <div className="mb-4">
                                            <label htmlFor="name" className="block font-medium mb-1">Nombre</label>
                                            <Field type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded-md" />
                                            <ErrorMessage name="name" component="div" className="text-red-500 mt-1" />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="people" className="block font-medium mb-1">Número de comensales</label>
                                            <Field type="number" id="people" name="people" className="w-full p-2 border border-gray-300 rounded-md" min="1" max="10" />
                                            <ErrorMessage name="people" component="div" className="text-red-500 mt-1" />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="phoneNumber" className="block font-medium mb-1">Número de teléfono</label>
                                            <Field type="tel" id="phoneNumber" name="phoneNumber" className="w-full p-2 border border-gray-300 rounded-md" />
                                        </div>
                                    </div>
                                    <div>
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
                                            <ErrorMessage name="hour" component="div" className="text-red-500 mt-1" />
                                        </div>
                                    </div>
                                    <button type="submit" className="bg-gradient-to-r from-[#AEAF50] to-[#F3C14C] hover:from-[#adaf50bd] hover:to-[#F3C14C] text-white font-bold py-2 px-4 rounded-md col-span-2">Reservar</button>
                                </Form>
                            )}
                        </Formik>
                        <p className=' mt-4 text-center text-black font-bold'>Para grupos superiores a 10 personas contactar con el restaurante. Gracias</p>
                    </aside>
                </div>
                {/* Modal de confirmación */}
                {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                        <div className="bg-white p-8 rounded-md max-w-md">
                            <h3 className="text-2xl font-bold mb-4">Resumen de la reserva</h3>
                            <div className="flex justify-between mb-4">
                                <div>
                                    <p><strong>Nombre:</strong> {reservationData.name}</p>
                                    <p><strong>Número de comensales:</strong> {reservationData.people}</p>
                                    <p><strong>Número de teléfono:</strong> {reservationData.phoneNumber}</p>
                                </div>
                                <div>
                                    <p><strong>Lugar:</strong> {reservationData.place}</p>
                                    <p><strong>Fecha:</strong> {reservationData.date}</p>
                                    <p><strong>Hora:</strong> {reservationData.hour}</p>
                                <div>
                                    <p><strong>Lugar:</strong> {reservationData.place}</p>
                                    <p><strong>Fecha:</strong> {reservationData.date}</p>
                                    <p><strong>Hora:</strong> {reservationData.hour}</p>
                                </div>
                            </div>
                            <p className="text-green-500 font-bold mt-4">¡Reserva realizada con éxito!</p>
                            <div className="flex justify-center">
                                <button onClick={handleCloseModal} className="bg-gradient-to-r from-[#AEAF50] to-[#F3C14C] hover:from-[#adaf50bd] hover:to-[#F3C14C] text-white font-bold py-2 px-4 rounded-md mt-3">Cerrar</button>
                            </div>
                        </div>
                    </div>
                )}
                            </div>
                            <p className="text-green-500 font-bold mt-4">¡Reserva realizada con éxito!</p>
                            <div className="flex justify-center">
                                <button onClick={handleCloseModal} className="bg-gradient-to-r from-[#AEAF50] to-[#F3C14C] hover:from-[#adaf50bd] hover:to-[#F3C14C] text-white font-bold py-2 px-4 rounded-md mt-3">Cerrar</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
        </section>
    );
};

export default BookingForm;