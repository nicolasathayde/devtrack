import ProjectCard from '../components/ProjectCard'
import projects from '../projects'
import './Dashboard.css'

function Dashboard() {
  return (
    <main>
    <section className="dashboard-header">
      <div>
        <h1>DevTrack Dashboard</h1>
        <p>Acompanhe seus projetos e evolução.</p>
      </div>

      <button className="new-project-btn">
        + Novo Projeto
      </button>
    </section>

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