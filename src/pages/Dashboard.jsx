import ProjectCard from '../components/ProjectCard'

function Dashboard() {
  return (
    <main>
      <h1>DevTrack Dashboard</h1>
      <p>Acompanhe seus projetos e evolução.</p>

      <ProjectCard
        name="DevTrack"
        description="Projeto de portfólio com React e testes."
        progress={20}
      />

      <ProjectCard
        name="API Python"
        description="Estudos de backend e integração."
        progress={40}
      />
    </main>
  )
}

export default Dashboard