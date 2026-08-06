import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import Modal from '../components/Modal'
import './Dashboard.css'

function Dashboard() {
  const [projects, setProjects] = useState([
  {
    name: "DevTrack",
    description: "Projeto de portfólio com React e testes.",
    progress: 20,
    status: "Em andamento"
  },
  {
    name: "API Python",
    description: "Estudos de backend e integração.",
    progress: 40,
    status: "Pausado"
  }
])
function addProject(newProject) {
  setProjects([
    ...projects,
    newProject
  ])
}
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <main>
    <section className="dashboard-header">
    <div className="dashboard-title">
      <h1>DevTrack Dashboard</h1>
      <p>Acompanhe seus projetos e evolução.</p>
    </div>

    <div className="dashboard-actions">
      <button
        className="new-project-btn"
        onClick={() => setIsModalOpen(true)}
      >
        + Novo Projeto
      </button>
    </div>
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
    {isModalOpen && (
      <Modal
        onClose={() => setIsModalOpen(false)}
        onAddProject={addProject}
      />
    )}
    </main>
  )
}

export default Dashboard