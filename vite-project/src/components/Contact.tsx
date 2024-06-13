// Contact.tsx
import '../css/contact.css';

function Contact() {
  return (
    <div id='contact'>
      <p></p>
      <p></p>
      <p></p>
      <h1>CONTACTEZ NOUS</h1>
      <form>
        <input type='text' placeholder='Nom Prenom' required/>
        <input type='email' placeholder='E-Mail' required/>
        <textarea placeholder='Ecrivez ici...' name='message'></textarea>
        <input type='submit' value='Envoyer'/>
      </form>
    </div>
  );
}

export default Contact;
