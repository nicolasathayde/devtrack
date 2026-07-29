function ProjectCard({ name, description, progress }) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{description}</p>
      <span>Progresso: {progress}%</span>
    </article>
  )
}

export default ProjectCard