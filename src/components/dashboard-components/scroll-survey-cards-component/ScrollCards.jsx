import { useState } from "react";
import CardPesquisa from "../card-pesquisa-component/CardPesquisa";
import './scroll-cards-style.css'

function ScrollCards(props){

    //const [pesquisas, setPesquisas] = useState( [] );

    const pesquisas = props.pesquisas
        

    const [ultimoSelecionado, setUltimoSelecionado] = useState(pesquisas);

    //function unselectUltimoSelecionado(){      
    //    
    //}

    return(
        <>
            <div className="scroll-card-box">              
                {
                    pesquisas.map((pesquisa, index) => {
                        return (  
                            <>
                            <div>
                                <CardPesquisa
                                    key={pesquisa.id}
                                    isSelecionado={pesquisas[0] === pesquisa ? true : false}
                                    id={pesquisa.id}
                                    tipo={pesquisa.tipo}
                                    titulo={pesquisa.titulo}
                                    qtdPerguntas={pesquisa.qtdPerguntas}
                                    qtdPessoas={pesquisa.qtdPessoas}
                                    qtdRespostas={pesquisa.qtdRespostas}
                                    status={pesquisa.status}
                                />     
                            </div>
                            </>                                                   
                        );
                    })
                }
            </div>
        </>
    )
}

export default ScrollCards;
