import { useState } from 'react'
import './Modal.css'

function Modal({ onClose, onAddProject }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [progress, setProgress] = useState(0)
  const [status, setStatus] = useState('Em andamento')
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

        <form className="project-form">
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
            value={progress}
            onChange={(event) => setProgress(event.target.value)}
          />
        </label>

        <label>
          Status
         <select
          value={status}
          onChange={(event) => setStatus(event.target.value)}
         >
            <option>Em andamento</option>
            <option>Pausado</option>
            <option>Concluído</option>
          </select>
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