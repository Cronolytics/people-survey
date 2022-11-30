import React, { useEffect, useState } from 'react'
import api from '../../api'
import '../modal-components/modal.css'
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import '../accordion-component/Accordion.css';

function Modal(props) {

    const [pesquisaCompleta,      setPesquisaCompleta     ] = useState();
    const [isPesquisaVazia,       setIsPesquisaVazia      ] = useState(true);

    console.log(props.idPesquisa)

    useEffect(function(){
        api.get(`/pesquisas/media-pesquisa?idPesquisa=${props.idPesquisa}`
        ).then(function (pesquisasResumidasAPI) {
            setPesquisaCompleta(pesquisasResumidasAPI.data);
            setIsPesquisaVazia(false);
        }).catch((error) => {
            console.log(error);
        })
    },[props.idPesquisa])

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
                        <div><b>Título</b> - {props.titulo}</div>
                    </div>
                    <div className="content-body">
                        <div className="modal-body">
                            <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
                                {
                                    isPesquisaVazia ? <></> : 
                                    pesquisaCompleta.perguntas.map((pergunta, index) => {
                                        return(
                                                <Accordion.Item key={index} className="AccordionItem" value={`item-${index+1}`}>
                                                    <AccordionTrigger>Pergunta 1 - {pergunta.titulo}</AccordionTrigger>
                                                    {pergunta.respostas.map((resposta, index) => {
                                                        return(
                                                                <AccordionContent key={index}>
                                                                    <div className='label-respostas-area'>
                                                                        <div className='label-resposta-box'>
                                                                            {index + 1} - {resposta.label}
                                                                        </div>
                                                                        <div className='label-resultado'>
                                                                            {resposta.qtdRespostas}
                                                                        </div>
                                                                    </div>
                                                                </AccordionContent>
                                                        )
                                                    })}
                                                </Accordion.Item>
                                        )
                                    })
                                }
                            </Accordion.Root>
                        </div>
                    </div>
                    <div className="content-respondentes">
                        <div className="total-respondentes">
                            <b>Total de respondentes - </b> {props.qtdRespondentes}
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button onClick={props.onClose} className="modal-button"> Voltar </button>
                    </div>
                </div>
            </div>
        </>
    )
}

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
        <Accordion.Trigger
            className={classNames('AccordionTrigger', className)}
            {...props}
            ref={forwardedRef}
        >
            {children}
            <ChevronDownIcon className="AccordionChevron" aria-hidden />
        </Accordion.Trigger>
    </Accordion.Header>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
        className={classNames('AccordionContent', className)}
        {...props}
        ref={forwardedRef}
    >
        <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
));

export default Modal;