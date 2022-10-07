import React from 'react'
import aboutImg from '../assets/aboutImg.jpg'
import logoAbout from '../assets/logoAbout.png'

const styles = {
  main: {
    display: 'flex',
    justifyContent: 'center',
  },
  div: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  h2: {
    margin: '20px 0px 0px 0px',
    textAlign: 'center',
    maxInlineSize: '1000px',
    overflowWrap: 'break-word',
  },
  h22: {
    margin: '20px 0px 20px 0px',
    textAlign: 'center',
    maxInlineSize: '1000px',
    overflowWrap: 'break-word',
  },
  div2: {
    margin: '20px 0px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  img: {
    width: '568px',
    height: '320px',
  },
  imgLogo: {
    width: '198.5px',
    height: '63.5px',
  },
}

const About = () => {
  return (
    <main style={styles.main}>
      <div style={styles.div}>
        <h2 style={styles.h2}>
          El crochet es un hermoso proceso de tejido, que con herramientas como un hilo, un gancho y manos creativas, se pueden hacer cosas soñadas.
          No hay límites para crear con el crochet, el único límite es la imaginación.
        </h2>
        <h2 style={styles.h22}>
          De esta manera surge <img style={styles.imgLogo} src={logoAbout} alt="" />, ofreciendo productos específicos como amigurumis, artículos para el hogar y accesorios; para que los amantes del crochet puedan adquirir el producto deseado.
        </h2>
        <div style={styles.div2}>
          <img style={styles.img} src={aboutImg} alt="Ovillos de lana" />
        </div>
      </div>
    </main>
  )
}

export default About;