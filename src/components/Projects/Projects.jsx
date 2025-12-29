import { useEffect, useRef } from 'react'
import styles from './Projects.module.css'

const Projects = () => {
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

  const projects = [
    {
      id: 1,
      title: 'Kanban board',
      description: 'A task management board that lets users organize work into columns, track progress visually, and manage tasks efficiently using a drag-and-drop workflow.',
      tech: ['React', 'Vite', 'HTML', 'CSS', 'Jest'],
      github: 'https://github.com/MohcenCH/caw-labs/tree/main/Lab7_Kanban_board',
    },
    {
      id: 2,
      title: 'React Components & State Management',
      description: 'A collection of React exercises showcasing core concepts like state, props, event handling, conditional rendering, list manipulation, forms, and dynamic UI updates through interactive components.',
      tech: ['React', 'Vite', 'HTML', 'CSS'],
      github: 'https://github.com/MohcenCH/caw-labs/tree/main/Lab5',
    },
    {
      id: 3,
      title: 'JavaScript Unit Testing with Jest',
      description: 'A hands-on project focused on setting up Jest and writing unit tests for JavaScript utility functions, covering array operations, string manipulation, and test-driven validation of existing modules.',
      tech: ['JavaScript', 'Jest', 'HTML', 'CSS'],
      github: 'https://github.com/MohcenCH/caw-labs/tree/main/Lab4_Jest',
    },
    {
      id: 4,
      title: 'Node.js Fundamentals',
      description: 'A set of Node.js scripts demonstrating core concepts such as function modules, imports/exports, command-line arguments, and file system operations including reading, writing, and displaying file contents.',
      tech: ['Node.js', 'Javascript'],
      github: '#',
    },
    {
      id: 5,
      title: 'Git Fundamentals',
      description: 'Hands-on exercises covering core Git concepts such as repository initialization, commits, branching, merging, and version control workflows using the command line.',
      tech: ['Git'],
      github: 'https://github.com/MohcenCH/caw-labs/tree/lab2-setup',
    },
    {
      id: 6,
      title: 'CSS Selectors & Styling Fundamentals',
      description: 'A practical CSS project focused on mastering selectors, specificity, pseudo-classes, and layout styling by applying structured rules to HTML elements and understanding how styles are resolved and applied.',
      tech: ['HTML','CSS'],
      github: 'https://github.com/MohcenCH/caw-labs/tree/main/Lab1',
    },
  ]

  return (
    <section id="projects" className={styles.projects} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.titleNumber}>02.</span>
          Project Showcase
        </h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={project.id} className={styles.projectCard} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={styles.cardHeader}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <div className={styles.cardLinks}>
                  <a href={project.github} className={styles.linkIcon} aria-label="GitHub">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.techStack}>
                {project.tech.map((tech) => (
                  <span key={tech} className={styles.techTag}>
                    {tech}
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

export default Projects

