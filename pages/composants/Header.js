import style from "@/styles/Home.module.css"
import { useEffect, useState } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect'



function Header() {
  useEffect(() => {
    AOS.init({
      duration: 2000, 
      easing: 'ease-in-out',
    });
  }, []);


  return (
    <>
      <div className="haut">
        <header>
        <h1 className={style.logo} id="logo" data-aos="flip-up">Clavien N.</h1>
        <input type="checkbox" id="nav_check" hidden />
        <nav className={style.nav} id='navig' data-aos="flip-down">
          <ul className="nav__links">
            <li className="link"><a href=''>Accueil</a></li>
            <li className="link"><a href='#competence'>Compètence</a></li>
            {/* <li className="link"><a href=''>Projet</a></li> */}
            <li className="link"><a href='#apropos'>Apropos</a></li>
            <li className="link"><a href='#contact'>Contact</a></li>
          </ul>
        </nav>
        <label htmlFor="nav_check" className="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </label>
        <br />
        </header>
      </div>

      <div className="container">
        <div className="info1"  data-aos="zoom-in">
          <img src='/Group 10.png' alt='' />
        </div>

        <div className="info2"  data-aos="slide-left">
          <h1>Salut, Je suis </h1>
          <h2 className="nom">NAMBININA Clavien</h2>
          <h4>Développeur fullstack</h4>
          <div className="profil"  data-aos="zoom-in">
            <br />
    
            <Typewriter
              options={{
                strings: ['Développeur MERN', 'Développeur MEVN','Développeur Laravel', 'Développeur WEB'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="blur"></div>
        </div>
        
      </div>
    </>
  )
}

export default Header
