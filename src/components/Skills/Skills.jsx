import { useEffect, useRef } from 'react'
import styles from './Skills.module.css'

const Skills = () => {
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

  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
    },
    {
      category: 'Frameworks & Libraries',
      skills: ['React', 'Node.js', 'Angular', 'Vue.js', 'Django', 'Bootstrap'],
    },
    {
      category: 'Tools & Technologies',
      skills: ['Git', 'Vite', 'Jest', 'Cypress', 'Pytest'],
    },
  ]

  return (
    <section id="skills" className={styles.skills} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.titleNumber}>03.</span>
          Skills & Technologies
        </h2>
        <div className={styles.skillsGrid}>
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.category}
              className={styles.categoryCard}
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              <h3 className={styles.categoryTitle}>{category.category}</h3>
              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className={styles.skillTag}
                    style={{ animationDelay: `${(catIndex * 0.1 + skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

