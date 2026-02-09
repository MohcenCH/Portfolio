import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from './Carousel.module.css'

const Carousel = ({ images, projectTitle, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'ArrowRight') goToNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientX)
    handleSwipe()
  }

  const handleSwipe = () => {
    if (touchStart - touchEnd > 50) {
      goToNext()
    }
    if (touchEnd - touchStart > 50) {
      goToPrevious()
    }
  }

  const carouselContent = (
    <div className={styles.carouselOverlay} onClick={onClose}>
      <div className={styles.carouselContainer}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close carousel">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div
          className={styles.carouselContent}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            className={styles.navButton + ' ' + styles.prev}
            onClick={(e) => { goToPrevious(); e.stopPropagation(); }}
            aria-label="Previous image"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className={styles.imageWrapper}>
            {images.map((image, index) => (
              <div
                key={index}
                className={styles.imageSlide + ' ' + (index === currentIndex ? styles.active : '')}
              >
                <img src={image} alt={`${projectTitle} - slide ${index + 1}`} onClick={(e) => e.stopPropagation()} />
              </div>
            ))}
          </div>

          <button
            className={styles.navButton + ' ' + styles.next}
            onClick={(e) => { goToNext(); e.stopPropagation(); }}
            aria-label="Next image"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        <div className={styles.dotsContainer}>
          {images.map((_, index) => (
            <button
              key={index}
              className={styles.dot + ' ' + (index === currentIndex ? styles.activeDot : '')}
              onClick={(e) => { setCurrentIndex(index); e.stopPropagation(); }}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className={styles.counter}>
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  )

  return createPortal(carouselContent, document.body)
}

export default Carousel
