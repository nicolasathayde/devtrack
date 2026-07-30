function ProgressBar({ progress }) {
  return (
    <div>
      <p>Progresso: {progress}%</p>

      <div>
        <div
          style={{
            width: `${progress}%`,
            height: '10px',
            backgroundColor: '#4caf50',
          }}
        />
      </div>
    </div>
  )
}

export default ProgressBar