import React, { useEffect, useState } from "react";
import NovaPergunta from '../components/criar-pesquisa-components/NovaPergunta'
import { Form } from 'semantic-ui-react'
import Menu from "../components/menu-conponents/NavbarMenu";
import '../assets/css/criar-pesquisa.css'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

//=====================================================================
// === CLASSES ========================================================
//=====================================================================
class Pesquisa {
    constructor (nome, desc, participantesAlvo, empresa, interna, perguntas) {
        this.nome = nome;
        this.desc = desc;
        this.participantesAlvo = participantesAlvo;
        this.empresa = empresa;
        this.interna = interna;
        this.perguntas = perguntas;
    }
}
class Pergunta {
    constructor (descricao, respostas) {
        this.descricao = descricao || "";
        this.respostas = respostas || new Array();
    }
}

function CriarPesquisa(){
    //=====================================================================
    // === ESTADOS ========================================================
    //=====================================================================

    const [pesquisa,     setPesquisa    ] = useState(new Pesquisa());
    const [nomePesquisa, setNomePesquisa] = useState([]);
    const [perguntas,    setPerguntas   ] = useState([]);
    const [qtdPerguntas, setQtdPerguntas] = useState(1);

    //=====================================================================
    //=== USE EFFECT'S ====================================================
    //=====================================================================
    useEffect(() => {
        setPerguntas([{
            descricao: "",
            respostas: ["",""]
        }]);
        console.log(pesquisa);
        var user = sessionStorage.getItem("usuarioLogado");
        console.log("USER ID: " + user.id)
        }       
    , [])

    useEffect(() => {
        var user = sessionStorage.getItem("usuarioLogado");
        var pesquisaAux = new Pesquisa(nomePesquisa, "teste", 5, user.id, false, perguntas);
        setPesquisa(pesquisaAux); 
        console.log(JSON.stringify(pesquisa, null, 4));
    }, [nomePesquisa,perguntas])

    //=====================================================================
    //=== FUNCTIONS =======================================================
    //=====================================================================
    function atualizarPergunta(valor, index) {
        var novasPerguntas = perguntas;
        novasPerguntas = novasPerguntas.map((el, i) => {
            if (i === index) {
                el = valor;
            }           
            return el;
        })
        setPerguntas(novasPerguntas);
        //console.log(JSON.stringify(pesquisa, null, 4));
    }

    function incrementarPergunta(){
        var arrayPerguntasAtualizadoAuxiliar = [...perguntas, new Pergunta()]
        setPerguntas(arrayPerguntasAtualizadoAuxiliar)
        setQtdPerguntas(qtdPerguntas + 1);
        //console.log(JSON.stringify(pesquisa, null, 4));
    }

    function decrementarPergunta() {
        if(perguntas.length === 1){
            Toastify({
                text: "Não é possível ter menos de 1 Pergunta!",
                duration: 3000,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: { background: "linear-gradient(to right, #a8323c, #e00d1f)" }
            }).showToast();
        }
        else{
            var arrayPerguntasAtualizadoAuxiliar = [...perguntas];
            arrayPerguntasAtualizadoAuxiliar.pop();   
            setPerguntas(arrayPerguntasAtualizadoAuxiliar);
            //console.log(JSON.stringify(pesquisa, null, 4));
        }
    }

    return(
        <>
            <div className="navbar-menu-dashboard">
                <Menu />
            </div>         

            <div className="gray-background">
                <div className="container">
                    <div className="card-conteudo">
                        <Form>
                            <div className="page-titulo">
                                <h1>Criar uma nova pesquisa</h1>
                                <div className="ui button-or-limiter">
                                    <button className="ui button">Cancel</button>
                                    <div className="or"></div>
                                    <button className="ui positive button">Save</button>
                                </div>
                            </div>
                        
                            <div className="pesquisa-config">
                                <div className="area-titulo">
                                    <div className="titulo-box">
                                        Título:
                                    </div>
                                        <div className="ui transparent input input-titulo-size">
                                            <input onChange={(e) => setNomePesquisa(e.target.value)} type="text"  placeholder="Digite o título da pesquisa."/>
                                        </div>
                                    </div>
                                <div className="area-tipo-pesquisa">
                                    <div className="area-tipo-item">
                                        Esta pesquisa será:
                                    </div>
                                    <div className="area-tipo-item">
                                        <Form.Field control='select' className="select-limiter">
                                            <option value='01'>Pesquisa Interna</option>
                                            <option value='02'>Pesquisa Externa</option>
                                        </Form.Field>
                                    </div>                               
                                </div>
                            </div>
                            

                            <div className="respostas-area">
                                <div className="field-resposta">Perguntas:</div>
                                <div className="contador-area">
                                    <button onClick={decrementarPergunta} className="ui icon button button-limiter"><i aria-hidden="true" className="minus icon"></i></button>
                                    <div className='contador'>{perguntas.length}</div>
                                    <button onClick={incrementarPergunta} className="ui icon button button-limiter"><i aria-hidden="true" className="add center icon"></i></button>
                                </div> 
                            </div>                          
                            <div className="area-content">
                                <div className="area-tipo-item">
                                {
                                    perguntas.map((pergunta, index) => {
                                        return (
                                            <div key={index} className="pergunta-box">
                                                <NovaPergunta atualizar={atualizarPergunta} pergunta={pergunta} id={index} />
                                            </div>
                                        );
                                        })
                                    }  
                                </div>
                            </div>
                        </Form>                        
                    </div>
                </div>
            </div>           
        </>
    )
}

export default CriarPesquisa;