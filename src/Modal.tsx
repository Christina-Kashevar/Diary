import React from 'react';

interface ModalProps {
  isCorrectDate: boolean
  deleteIsWrongDate: ()=> void
}

const Modal:React.FC<ModalProps> = ({isCorrectDate, deleteIsWrongDate}) => {
  let classOverlay:Array<string> = ['modal-overlay'];
  let classModal:Array<string> = ['modal'];
  if (isCorrectDate) {
    classOverlay.push('modal_closed')
    classModal.push('modal_closed')
  }

  const closeModal =() => {
    classOverlay.push('modal_closed')
    classModal.push('modal_closed')
    deleteIsWrongDate()
  }

  return (
    <React.Fragment>
      <div className={classOverlay.join(' ')} key='overlay'></div>
      <div className={classModal.join(' ')} id="modal" key='modal'>
        <a href="#"
          className="modal__close"
          id="modal-close"
          title="Close modal window"
          onClick={closeModal}>Close</a>
        <p className= "modal__info">Incorrect date entered!</p>
        <button id="modal-save" className="modal__save" title="Ok" onClick={closeModal}>OK</button>
      </div>
    </React.Fragment>
  )
}

export default Modal