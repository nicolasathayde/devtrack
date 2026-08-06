import './ProjectCard.css'
import ProgressBar from './ProgressBar'

function ProjectCard({ name, description, progress, status }) {
  return (
    <article>
      <h2>{name}</h2>

      <p>{description}</p>

      <ProgressBar progress={progress} />

      <div className="status-container">
      <span className="status-label">Status</span>

      <span className={`status status-${status
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(' ', '-')
      }`}>
        {status}
      </span>
      </div>
    </article>
  )
}

export default ProjectCard