import { useState } from 'react'
import './Modal.css'

function Modal({ onClose, onAddProject }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [progress, setProgress] = useState(0)
   
  function handleSubmit(event) {
  event.preventDefault()

  const progressValue = Number(progress)
  if (progressValue < 0 || progressValue > 100) {
    alert('O progresso deve estar entre 0 e 100%.')
    return
  }

  let projectStatus = "Em andamento"
  if (progressValue === 0) {
    projectStatus = "Não iniciado"
  }

  if (progressValue === 100) {
    projectStatus = "Concluído"
  }

  const newProject = {
    name,
    description,
    progress: progressValue,
    status: projectStatus
  }

  onAddProject(newProject)
  setName('')
  setDescription('')
  setProgress(0)
  
  onClose()
}

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Novo Projeto</h2>

          <button
            className="close-button"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <form
          className="project-form"
          onSubmit={handleSubmit}
        >
        <label>
          Nome do projeto
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>

        <label>
          Descrição
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>

        <label>
          Progresso (%)
          <input
            type="number"
            min="0"
            max="100"
            value={progress}
            onChange={(event) => setProgress(event.target.value)}
          />
        </label>
        
        <div className="form-actions">
          <button
            type="button"
            onClick={onClose}
          >
            Cancelar
          </button>

          <button type="submit">
            Criar projeto
          </button>
        </div>

      </form>
      </div>
    </div>
  )
}

export default Modal