import { useEffect, useState } from "react";
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer() {

    useEffect(() => {
      AOS.init({
        duration: 1000, 
        easing: 'ease-in-out',
      });
    }, []);
    

    const [input, setInput] = useState({ nom: '', email: '', objet: '' });

    const change=(e)=>
    {
        const { name, value } = e.target;
        setInput(prevInput => ({ ...prevInput, [name]: value }));
    }

    const submit =async(e)=>
    {
        e.preventDefault();
        try {
            const response = await axios.post("/api/route", input);
            if (response) {
                console.log("Envoyé avec succès !");
            } else {
                console.log("Erreur d'envoi ...");
            }
        } catch (error) {
            console.error("Erreur lors de l'envoi:", error);
        }
    }
  return (
    <div>
        <div className="blur3"></div>

        <footer id="contact">
            <div className="section">
                <h1 data-aos="zoom-in">Information</h1>
                <ul className="reso" data-aos="zoom-out">
                    <li> <img src='/gmail_logo_480px.png' alt=''/><p>Claviennambinina511@gmail.com</p></li>
                    <li><img src='/linkedin_480px.png' alt=''/><p>Clavien NAMBININA</p></li>
                    <li><img src='/whatsapp_480px.png' alt=''/><p>+261349856513</p></li>
                    <li><img src='/hhhhhhhh.png' alt=''/><p>Fianarantsoa Madagascar</p></li>
                </ul>
            </div>

            <div className="section">
                <fieldset> 
                    <legend data-aos="zoom-in"> Contactez-moi !</legend>
                    <br/>
                    <form onSubmit={submit} data-aos="zoom-in"> 
                    <input type='text' placeholder="Nom" className="xd" name="nom" onChange={change} />
                    <input type='email' placeholder="Email" className="xd" name="email" onChange={change} />
                    <br/>
                    <br/>
                    <input type='text' placeholder="Objet" className="objet"  name="objet" onChange={change} />
                    <br/>
                    <br/>
                    <textarea className="texte" placeholder="Description" name="message" onChange={change}> </textarea>
                    <br/>
                    <br/>
                    <button> Envoyer</button>
                    </form> 
                </fieldset>
            </div>
        </footer>
    </div>
  )
}

export default Footer
