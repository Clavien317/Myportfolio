import { useState } from "react";
import axios from "axios";

function Footer() {


    const [input,setInput] = useState([])

    const change=(e)=>
    {
        const name = e.target.name;
        const value = e.target.value

        setInput(values=>({...values,[name]:value}))
    }

    const submit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await fetch("/api/send", 
          {
            method:"POST",
            body:JSON.stringify({
                input
            })
            
          })
      
          if (response.status === 200) {
            console.log("Tout va bien");
          } else {
            console.error("Error:", response.statusText);
            alert("Erreur d'envoi ...");
          }
        } catch (error) {
          console.error("Error:", error.message);
          alert("Erreur d'envoi ...");
        }
      
        console.log(input);
      };
      


  return (
    <div>
        <div className="blur3"></div>

        <footer id="contact">
            <div className="section">
                <h1>Information</h1>
                <ul className="reso">
                    <li> <img src='/gmail_logo_480px.png' alt=''/><p>Claviennambinina511@gmail.com</p></li>
                    <li><img src='/linkedin_480px.png' alt=''/><p>Clavien NAMBININA</p></li>
                    <li><img src='/whatsapp_480px.png' alt=''/><p>+261349856513</p></li>
                    <li><img src='/hhhhhhhh.png' alt=''/><p>Fianarantsoa Madagascar</p></li>
                </ul>
            </div>

            <div className="section">
                <fieldset> 
                    <legend> Contactez-moi !</legend>
                    <br/>
                    <form onSubmit={submit}> 
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