import { useEffect, useRef } from 'react'
import styles from './Contact.module.css'

const Contact = () => {
  const sectionRef = useRef(null)

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const socialLinks = [
    {
      name: 'Email',
      url: 'mailto:choauimohcen@gmail.com',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mohcen-chaoui/',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
    },
    {
      name: 'GitHub',
      url: 'https://github.com/MohcenCH',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ),
    },

  ]

  return (
    <section id="contact" className={styles.contact} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.titleNumber}>05.</span>
          Get In Touch
        </h2>
        <div className={styles.content}>
          <div className={styles.textSection}>
            <p className={styles.description}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              Feel free to reach out!
            </p>
          </div>
          <div className={styles.socialSection}>
            <div className={styles.socialGrid}>
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialCard}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.socialIcon}>{social.icon}</div>
                  <span className={styles.socialName}>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <p className={styles.footerText}>
            Designed & Built with <span className={styles.heart}>❤️</span> by Mohcen Chaoui
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact

