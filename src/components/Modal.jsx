import './Modal.css'

function Modal({ onClose }) {
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

        <p>O formulário será criado nas próximas etapas.</p>
      </div>
    </div>
  )
}

export default Modal