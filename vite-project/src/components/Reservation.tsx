// src/BookingForm.tsx
import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/BookingForm.css';

const BookingForm: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logique de traitement du formulaire
    console.log({
      firstName,
      lastName,
      email,
      selectedDate,
      selectedRoom,
    });
  };

  return (
    <div id="Booking">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      <h1>Réservez Votre Évasion</h1>
      <form>
        <input type="text" placeholder="Prénom"/>
        <input type="text" placeholder="Nom"/>
        <input type="email" placeholder="E-Mail"/>
        <input type="date" placeholder="Date de réservation"/>
        <select>
          <option value="" disabled>
            Choisissez une salle
          </option>
          <option value="La Crypte Maudite">La Crypte Maudite</option>
          <option value="L’Asile Abandonné">L’Asile Abandonné</option>
          <option value="Le Vol du Siècle">Le Vol du Siècle</option>
        </select>
        <input type="submit" value="Réserver" />
      </form>
    </div>
  );
};

export default BookingForm;
