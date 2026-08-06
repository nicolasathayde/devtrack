import ProjectCard from '../components/ProjectCard'
import projects from '../projects'
import './Dashboard.css'

function Dashboard() {
  return (
    <main>
      <h1>DevTrack Dashboard</h1>
      <p>Acompanhe seus projetos e evolução.</p>

      <section className="projects-grid">
       {projects.map((project) => (
      <ProjectCard
      key={project.name}
      name={project.name}
      description={project.description}
      progress={project.progress}
      status={project.status}
    />
    ))}
    </section>
    </main>
  )
}

export default Dashboard