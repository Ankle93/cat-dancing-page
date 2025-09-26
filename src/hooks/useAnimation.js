import { useState, useEffect } from 'react'

export function useAnimation() {
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationCount, setAnimationCount] = useState(0)
  const [lastAnimationTime, setLastAnimationTime] = useState(null)

  const toggleAnimation = () => {
    setIsAnimating(prev => {
      const newState = !prev
      if (newState) {
        setAnimationCount(count => count + 1)
        setLastAnimationTime(new Date())
      }
      return newState
    })
  }

  const startAnimation = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setAnimationCount(count => count + 1)
      setLastAnimationTime(new Date())
    }
  }

  const stopAnimation = () => {
    setIsAnimating(false)
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        event.preventDefault()
        toggleAnimation()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  useEffect(() => {
    let autoStopTimer
    if (isAnimating) {
      autoStopTimer = setTimeout(() => {
        setIsAnimating(false)
      }, 30000)
    }

    return () => {
      if (autoStopTimer) {
        clearTimeout(autoStopTimer)
      }
    }
  }, [isAnimating])

  return {
    isAnimating,
    animationCount,
    lastAnimationTime,
    toggleAnimation,
    startAnimation,
    stopAnimation
  }
}