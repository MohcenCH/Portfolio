import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'
import photo from '../../assets/photo.jpeg'

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current)
      }
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className={styles.hero} ref={heroRef}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageContainer}>
              <div className={styles.imageGlow}></div>
              <img src={photo} alt="Profile" className={styles.profileImage} />
            </div>
          </div>
          <div className={styles.textContent}>
            <h1 className={styles.name}>
              <span className={styles.greeting}>Hi, I'm</span>
              <span className={styles.nameHighlight}>Mohcen Chaoui</span>
            </h1>
            <h2 className={styles.tagline}>Full Stack Developer</h2>
            <p className={styles.bio}>
              I craft beautiful, functional web experiences with modern technologies.
              Passionate about clean code, user experience, and bringing ideas to life
              through elegant solutions.
            </p>
            <div className={styles.ctaButtons}>
              <button
                className={styles.primaryButton}
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button
                className={styles.secondaryButton}
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

