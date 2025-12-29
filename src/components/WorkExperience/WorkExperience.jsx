import { useEffect, useRef } from 'react'
import styles from './WorkExperience.module.css'

const WorkExperience = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
            // Animate individual items
            const items = entry.target.querySelectorAll(`.${styles.experienceItem}`)
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add(styles.itemVisible)
              }, index * 150)
            })
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

  const experiences = [
    {
      id: 1,
      company: 'Tech Solutions Inc.',
      position: 'Senior Frontend Developer',
      location: 'Remote',
      period: 'Jan 2023 - Present',
      description: 'Leading frontend development initiatives, architecting scalable React applications, and mentoring junior developers. Collaborated with cross-functional teams to deliver high-quality products.',
      achievements: [
        'Improved application performance by 40% through code optimization',
        'Led migration to modern React patterns and TypeScript',
        'Mentored 3 junior developers and established best practices',
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS'],
    },
    {
      id: 2,
      company: 'Digital Innovations',
      position: 'Full Stack Developer',
      location: 'San Francisco, CA',
      period: 'Mar 2021 - Dec 2022',
      description: 'Developed and maintained full-stack applications using modern web technologies. Worked on multiple client projects, ensuring high code quality and timely delivery.',
      achievements: [
        'Built 5+ production-ready web applications from scratch',
        'Reduced API response time by 35% through database optimization',
        'Implemented CI/CD pipelines reducing deployment time by 50%',
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Docker', 'Kubernetes'],
    },
    {
      id: 3,
      company: 'StartupXYZ',
      position: 'Junior Web Developer',
      location: 'New York, NY',
      period: 'Jun 2019 - Feb 2021',
      description: 'Started my professional journey building responsive web applications and learning industry best practices. Contributed to various projects and gained hands-on experience.',
      achievements: [
        'Developed responsive UI components for company website',
        'Participated in agile development processes',
        'Contributed to open-source projects',
      ],
      technologies: ['JavaScript', 'HTML', 'CSS', 'React', 'Git'],
    },
  ]

  return (
    <section id="experience" className={styles.experience} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.titleNumber}>02.</span>
          Work Experience
        </h2>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={styles.experienceItem}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.timelineMarker}>
                <div className={styles.markerDot}></div>
                {index < experiences.length - 1 && <div className={styles.timelineLine}></div>}
              </div>
              <div className={styles.experienceContent}>
                <div className={styles.cardHeader}>
                  <div className={styles.headerLeft}>
                    <h3 className={styles.position}>{exp.position}</h3>
                    <div className={styles.companyInfo}>
                      <span className={styles.company}>{exp.company}</span>
                      <span className={styles.separator}>•</span>
                      <span className={styles.location}>{exp.location}</span>
                    </div>
                  </div>
                  <div className={styles.period}>{exp.period}</div>
                </div>
                <p className={styles.description}>{exp.description}</p>
                <div className={styles.achievements}>
                  <h4 className={styles.achievementsTitle}>Key Achievements:</h4>
                  <ul className={styles.achievementsList}>
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className={styles.achievementItem}>
                        <span className={styles.achievementIcon}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.technologies}>
                  {exp.technologies.map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkExperience

