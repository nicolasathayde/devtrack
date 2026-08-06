import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import projects from '../projects'
import Modal from '../components/Modal'
import './Dashboard.css'

function Dashboard() {
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
      <Modal onClose={() => setIsModalOpen(false)} />
    )}
    </main>
  )
}

export default Dashboard