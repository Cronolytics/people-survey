import React from 'react'
import '../modal-components/modal.css'

function Modal(props) {
    if (!props.show) {
        return null;
    }
    return (
        <>
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Resultados</h4>
                    </div>
                    <div className="modal-body">
                        Este é o corpo do modal
                    </div>
                    <div className="modal-footer">
                        <button
                            onClick={props.onClose}
                            className="modal-button">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;