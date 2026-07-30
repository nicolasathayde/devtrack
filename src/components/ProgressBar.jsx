import './ProgressBar.css'

function ProgressBar({ progress }) {
  return (
    <div className="progress-container">
      <p>Progresso: {progress}%</p>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

export default ProgressBar