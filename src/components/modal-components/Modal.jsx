import React from 'react'
import AccordionModal from '../accordion-component/Accordion'
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
                    <div className="pesquisa-title">
                        <span>Título - </span>avaliação de liderança no setor financeiro
                    </div>
                    <div className="content-body">
                        <div className="modal-body">
                            <AccordionModal />
                        </div>
                    </div>
                    <div className="content-respondentes">
                        <div className="total-respondentes">
                            Total de respondentes -
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button onClick={props.onClose} className="modal-button"> Encerrar </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;