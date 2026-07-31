import ProjectCard from '../components/ProjectCard'
import projects from '../projects'

function Dashboard() {
  return (
    <main>
      <h1>DevTrack Dashboard</h1>
      <p>Acompanhe seus projetos e evolução.</p>

      {projects.map((project) => (
        <ProjectCard
          key={project.name}
          name={project.name}
          description={project.description}
          progress={project.progress}
        />
      ))}
    </main>
  )
}

export default Dashboard