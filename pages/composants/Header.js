import style from "@/styles/Home.module.css"
// import {TypeWriter} from "react-typewriter-effect"



function Header() {
  return (
    <>
      <div className="haut">
        <h1 className={style.logo}>Clavien N.</h1>
        <input type="checkbox" id="nav_check" hidden />
        <nav className={style.nav} id='navig'>
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
      </div>

      <div className="container">
        <div className="info1">
          <img src='/Group 10.png' alt='' />
        </div>

        <div className="info2">
          <h1>Salut, Je suis </h1>
          <h2 className="nom">NAMBININA Clavien</h2>
          <h4>Développeur fullstack</h4>
          <div className="profil">
            <br />
            Développeur MERN ... MEVN ... Laravel
            {/* <TypeWriter
                  startDelay={2000}
                  cursorColor="#3F3D56"
                  multiText={[
                    'Développeur MERN',
                    'Développeur MERN',
                    'Développeur Laravel',
                  ]}
                  multiTextDelay={1000}
                  typeSpeed={30}
                /> */}
          </div>
          <div className="blur"></div>
        </div>

      </div>
    </>
  )
}

export default Header