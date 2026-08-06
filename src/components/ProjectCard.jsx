import './ProjectCard.css'
import ProgressBar from './ProgressBar'

function ProjectCard({ name, description, progress, status }) {

  const statusClass = status
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(' ', '-')

  return (
    <article className="project-card">

      <h2>{name}</h2>

      <p>{description}</p>

      <ProgressBar progress={progress} />

      <div className="status-container">
        <span className="status-label">
          Status
        </span>

        <span className={`status status-${statusClass}`}>
          {status}
        </span>
      </div>

    </article>
  )
}

export default ProjectCard