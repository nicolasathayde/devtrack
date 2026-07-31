import './ProjectCard.css'
import ProgressBar from './ProgressBar'

function ProjectCard({ name, description, progress }) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{description}</p>

      <ProgressBar progress={progress} />
    </article>
  )
}

export default ProjectCard