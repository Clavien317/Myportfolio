import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { motion } from 'framer-motion';




function Contenu() {

    useEffect(() => {
        AOS.init({
          duration: 1000, 
          easing: 'ease-in-out',
        });
      }, []);

      const competence=
      [
        {
            titre:"#Next.js",
            image:"/1657707878-nextjs_logo.png"
        },
        {
            titre:"#React.js",
            image:"/React-icon.svg.png"
        },
        {
            titre:"#Vue.js",
            image:"/Vue.js_Logo_2.svg.png"
        },
        {
            titre:"#TypeScript",
            image:"/typescript333333333.svg"
        },
        {
            titre:"#Node.js",
            image:"/node-js.svg"
        },
        {
            titre:"#Express.js",
            image:"/Express js.png"
        },
        {
            titre:"#PHP",
            image:"/353261php.png"
        },
        {
            titre:"#Laravel",
            image:"/1969px-Laravel.svg.png"
        },
        {
            titre:"#Python",
            image:"/Python-Transparent-Background.png"
        },
        {
            titre:"#Flask",
            image:"/flask.png"
        },
        {
            titre:"#Socket",
            image:"/socket-io-icon-2048x2046-tx88w4en.png"
        },
        {
            titre:"#MongoDB",
            image:"/mongodb-logo-D13D67C930-seeklogo.com.png"
        },
        {
            titre:"#MySQL",
            image:"/pngimg.com - mysql_PNG29.png"
        },
        {
            titre:"#Git",
            image:"/Git_icon.svg.png"
        },
        {
            titre:"#Tailwind CSS",
            image:"/Tailwind_CSS_Logo.svg_GkNDLAs.webp"
        },
        {
            titre:"#HTML",
            image:"/1200px-HTML5_Badge.svg.png"
        },
        {
            titre:"#CSS",
            image:"/css3-logo-png-transparent.png"
        },
        {
            titre:"#JavaScript",
            image:"/Unofficial_JavaScript_logo_2.svg.png"
        },
        {
            titre:"#Bootstrap",
            image:"/Bootstrap_(front-end_framework)-Logo.wine.png"
        }
      ]

  return (
    <div>
        <motion.img
            initial={{
            opacity: 0,
            x: 50,
            }}
            whileInView={{
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.7,
            },
            }}
        src='/Titik-titik.png' alt='' className="rect"/>
        <div className="apropos" id="apropos"  whileInView={"visible"}>
            <motion.h1
                  initial={{
                    opacity: 0,
                    x: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      delay: 0.5,
                    },
                  }}
            >Apropos de moi</motion.h1>
            <br/>
            <motion.p
                initial={{
                opacity: 0,
                y: 50,
                }}
                whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1,
                    delay: 0.6,
                },
                }}
            >
            Actuellement, je suis étudiant à l'École Nationale d'Informatique (ENI) de l'Université de Fianarantsoa.
             Ma passion réside dans le développement web et logiciel de bureau. En général, 
             j'utilise les technologies JavaScript et PHP pour le développement web,
              ainsi que C# pour la création de logiciels de bureau. J'ai également des notions en Python (Flask) et en R.
               Je suis avide d'acquérir de nouvelles compétences.
            </motion.p>
        </div>
        <img src='/Looper-1.png' alt='' className="topo" data-aos="zoom-out"/>
        <br/>
        <div className="blur2"></div>
        <br/>
        <div className="competence" id="competence">
            <h1 data-aos="zoom-in">Compètences</h1>
            <br/>
                {
                    competence.map((skills,index)=>
                    {
                        return(
                            <>
                                <motion.div className="tech"  whileInView={"visible"}
                                    initial={{
                                    opacity: 0,
                                    }}
                                    variants={{
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                        duration: 1,
                                        delay: (index*0.3) * 0.2,
                                        },
                                    },
                                    }}
                                >
                                    <br/>
                                    <img src={`${skills.image}`} alt=''/>
                                    <h2>{skills.titre}</h2>
                                </motion.div>
                            </>
                        )
                    })
                }


        </div>
    </div>
  )
}

export default Contenu