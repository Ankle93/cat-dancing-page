import catImage from '../assets/images/cat.svg'
import AnimationControls from './AnimationControls'
import { useAnimation } from '../hooks/useAnimation'
import '../styles/animations.css'

function DancingCat() {
  const {
    isAnimating,
    animationCount,
    toggleAnimation,
    startAnimation,
    stopAnimation
  } = useAnimation()

  const handleCatClick = () => {
    toggleAnimation()
  }

  return (
    <div className="dancing-cat-container">
      <div
        className={`cat-wrapper ${isAnimating ? 'dancing' : ''}`}
        onClick={handleCatClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleCatClick()
          }
        }}
        aria-label="고양이를 클릭하여 춤추게 하기"
      >
        <img src={catImage} alt="Dancing Cat" className="cat-image" />
      </div>

      <p className="dance-status">
        {isAnimating ? '고양이가 신나게 춤추고 있어요! 🎶' : '고양이가 쉬고 있어요 😴'}
      </p>

      <AnimationControls
        isAnimating={isAnimating}
        animationCount={animationCount}
        onToggle={toggleAnimation}
        onStart={startAnimation}
        onStop={stopAnimation}
      />
    </div>
  )
}

export default DancingCat