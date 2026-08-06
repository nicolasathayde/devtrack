import './ProgressBar.css'

function ProgressBar({ progress, status }) {

  let progressClass = 'low'

  if (status === 'Pausado') {
    progressClass = 'paused'
  }
  else if (progress > 0 && progress < 100) {
    progressClass = 'medium'
  }
  else if (progress === 100) {
    progressClass = 'complete'
  }

  return (
    <div className="progress-wrapper">

      <span className="progress-text">
        Progresso: {progress}%
      </span>

      <div className="progress-container">
        <div
          className={`progress-bar ${progressClass}`}
          style={{ width: `${progress}%` }}
        />
      </div>

    </div>
  )
}

export default ProgressBar