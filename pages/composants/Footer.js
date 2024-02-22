import { useEffect, useState } from "react";
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2'
import { useRouter } from "next/router";
import { useRef } from "react";

function Footer() {

    const router = useRouter()
    useEffect(() => {
      AOS.init({
        duration: 1000, 
        easing: 'ease-in-out',
      });
    }, []);
    

    function valid() {
        Swal.fire({
          title: 'Succès !',
          text: 'Votre email est envoyée avec succès !',
          icon: 'success',
        });
      }

    const [input, setInput] = useState({ nom: '', email: '', objet: '',message:'' });
    const formref = useRef(null)
    const [chargement, setChargement] = useState(false);

    const change=(e)=>
    {
        const { name, value } = e.target;
        setInput(prevInput => ({ ...prevInput, [name]: value }));
    }

    const submit =async(e)=>
    {
        e.preventDefault();
        setChargement(true);
        const loadingAlert = Swal.fire({
            icon:"info",
            title: 'Envoi en cours...',
            showConfirmButton: false,
            // allowOutsideClick: false,
            onBeforeOpen: () => {
              Swal.showLoading();
            }
          });
        try {
            const response = await axios.post("/api/route", input);
            if (response) {
                formref.current.reset()

                  await new Promise(resolve => setTimeout(resolve, 3000));
                  loadingAlert.close();
                  Swal.fire({
                    icon: 'success',
                    title: 'Email envoyé avec succès!',
                    showConfirmButton: false,
                    timer: 2000
                  });
            } else {
                Swal.fire({
                    title: 'Erreur !',
                    text: 'Email non envoyer  !',
                    icon: 'error',
                  });
            }


      
          } catch (error) {
            console.error('Erreur lors de l\'envoi de l\'email:', error);
            setChargement(false);
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
                    <form onSubmit={submit} data-aos="zoom-in" ref={formref}> 
                    <input type='text' placeholder="Nom" className="xd" name="nom" onChange={change} />
                    <input type='email' placeholder="Email" className="xd" name="email" onChange={change} />
                    <br/>
                    <br/>
                    <input type='text' placeholder="Objet" className="objet"  name="objet" onChange={change} />
                    <br/>
                    <br/>
                    <label>Laissez un message</label>
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
