import React from 'react'
import PieChart from '../pie-chart-component/PieChart'
import './pergunta-analytics-style.css'

function PerguntaAnalytics(props){

    return(
        <div className="card-responses-charts-box">
            <div className="responses-area">
                <div className="responses-box">
                    <div className="title-pergunta contador-pergunta">{props.index + 1}° Pergunta</div>
                </div>
                <div className="titulo-pergunta">
                    {props.pergunta.titulo}
                </div>
                <div className="box-alternativas">
                    {
                        props.pergunta.respostas.map((resposta, index) => {

                            return(
                                <div key={index} className="pergunta">
                                    <b>{(index + 1)}</b> - {resposta.label}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="chart-box">
                <div>
                    <PieChart respostas={props.pergunta.respostas}/>
                </div>
            </div>
        </div>
    )
}

export default PerguntaAnalytics;