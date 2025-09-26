function AnimationControls({
  isAnimating,
  animationCount,
  onToggle,
  onStart,
  onStop
}) {
  return (
    <div className="animation-controls">
      <div className="control-buttons">
        <button
          className={`control-btn primary ${isAnimating ? 'stop' : 'start'}`}
          onClick={onToggle}
          aria-label={isAnimating ? '애니메이션 멈추기' : '애니메이션 시작하기'}
        >
          {isAnimating ? '🛑 멈추기' : '🎵 춤추기'}
        </button>

        <button
          className="control-btn secondary"
          onClick={onStart}
          disabled={isAnimating}
          aria-label="애니메이션 시작"
        >
          ▶️ 시작
        </button>

        <button
          className="control-btn secondary"
          onClick={onStop}
          disabled={!isAnimating}
          aria-label="애니메이션 정지"
        >
          ⏹️ 정지
        </button>
      </div>

      <div className="animation-info">
        <p className="dance-count">
          🎭 총 춤 횟수: <span className="count-number">{animationCount}</span>
        </p>
        <p className="keyboard-hint">
          💡 스페이스바를 눌러서도 제어할 수 있어요!
        </p>
      </div>
    </div>
  )
}

export default AnimationControls