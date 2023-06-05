import React, { useEffect, useState } from "react";
import NovaPergunta from '../components/criar-pesquisa-components/NovaPergunta'
import { Form } from 'semantic-ui-react'
import '../assets/css/criar-pesquisa.css'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import api from '../api'
import { useNavigate } from "react-router-dom";
import Menu from '../components/menu-conponents/Menu'

//=====================================================================
// === CLASSES ========================================================
//=====================================================================
class Pesquisa {
    constructor(nome, desc, participantesAlvo, empresa, interna, perguntas) {
        this.nome = nome;
        this.desc = desc;
        this.participantesAlvo = participantesAlvo;
        this.empresa = { "id": parseInt(empresa) };
        this.interna = interna;
        this.perguntas = perguntas;
    }
}
class Pergunta {
    constructor(desc, respostas) {
        this.desc = desc || "";
        this.componente = 1;
        this.respostas = respostas || [{}];
    }
}

function CriarPesquisa() {
    const navigate = useNavigate();
    //=====================================================================
    // === ESTADOS ========================================================
    //=====================================================================
    const [isPesquisaValida, setIsPesquisaValida] = useState(false);
    const [pesquisa, setPesquisa] = useState();
    const [nomePesquisa, setNomePesquisa] = useState([]);
    const [perguntas, setPerguntas] = useState([{ desc: "", componente: { "id": 1 }, respostas: [{ "desc": "" }, { "desc": "" }] }]);
    const [qtdPerguntas, setQtdPerguntas] = useState(1);
    const [tipoPesquisa, setTipoPesquisa] = useState("");
    const [limiteRespostas, setLimiteRespostas] = useState(0);

    var id = sessionStorage.getItem("id");
    console.log("USER ID: " + id)
    console.log("Pesquisa: ", JSON.stringify(pesquisa, null, 4));
    console.log("Válida ?: ", isPesquisaValida);

    //=====================================================================
    //=== USE EFFECT'S ====================================================
    //=====================================================================

    useEffect(() => {
        var userID = sessionStorage.getItem("id");
        var pesquisaAux = new Pesquisa(nomePesquisa, "teste", limiteRespostas, userID, tipoPesquisa, perguntas);
        console.log("Pesquisa AUX: ", pesquisaAux)
        setPesquisa(pesquisaAux);
    }, [nomePesquisa, perguntas, tipoPesquisa, limiteRespostas])

    //=====================================================================
    //=== FUNCTIONS =======================================================
    //=====================================================================

    useEffect(() => {
        let validaAux = false;
        for (let i = 0; i < perguntas.length; i++) {
            if (perguntas[i].desc === "") {
                validaAux = false;
                break;
            }
            else {
                var respostas = [...perguntas[i].respostas];
                for (let j = 0; j < respostas.length; j++) {
                    if (respostas[i].desc === "") {
                        validaAux = false;
                        break;
                    }
                    else {
                        validaAux = true;
                    }
                }
                break;
            }
        }
        setIsPesquisaValida(validaAux)
    }, [perguntas])

    function salvarPesquisa(event) {
        event.preventDefault();
        console.log("STATE PESQUISA: " + JSON.stringify(pesquisa));

        if (isPesquisaValida) {
            api.post("/pesquisas/gravar", pesquisa
            ).then(function () {
                console.log("Cadastro de pesquisa requisitado...")
                Toastify({
                    text: "Nova pesquisa cadastrada!",
                    duration: 3000,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: { background: "linear-gradient(to right, #00b09b, #96c93d)" }
                }).showToast();
                navigate('/inicio');
            }).catch((error) => {
                console.log(error);
                Toastify({
                    text: "Erro ao tentar cadastrar pesquisa...",
                    duration: 10000,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: { background: "linear-gradient(to right, #a8323c, #e00d1f)" }
                }).showToast();
            })
        }
        else {
            Toastify({
                text: "Sua pesquisa não está formatada corretamente! Verifique todos os campos",
                duration: 10000,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: { background: "linear-gradient(to right, #a8323c, #e00d1f)" }
            }).showToast();
        }
    }

    function atualizarPergunta(valor, index) {
        var novasPerguntas = perguntas;
        novasPerguntas = novasPerguntas.map((el, i) => {
            if (i === index) {
                el = valor;
            }
            return el;
        })
        setPerguntas(novasPerguntas);
    }

    function incrementarPergunta() {
        var arrayPerguntasAtualizadoAuxiliar = [...perguntas, new Pergunta("", [{ "desc": "" }, { "desc": "" }])]
        setPerguntas(arrayPerguntasAtualizadoAuxiliar)
        setQtdPerguntas(qtdPerguntas + 1);
    }

    function decrementarPergunta() {
        if (perguntas.length === 1) {
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
        else {
            var arrayPerguntasAtualizadoAuxiliar = [...perguntas];
            arrayPerguntasAtualizadoAuxiliar.pop();
            setPerguntas(arrayPerguntasAtualizadoAuxiliar);
        }
    }

    return (
        <>
            <div className="tela-toda">
                <div className="menu">
                    <Menu />
                </div>

                <div className="gray-background">
                    <div className='navbar-menu'>
                        <div className="titlle-nav">
                            <h1>Nova Pesquisa</h1>
                        </div>
                    </div>
                    <div className="container">
                        <div className="card-conteudo">
                            <Form onSubmit={(event) => salvarPesquisa(event)}>
                                <div className="page-titulo">
                                    <h1>Criar uma nova pesquisa</h1>
                                    <div className="ui button-or-limiter">
                                        <button onClick={() => { window.location.reload(true); }} type="button" className="ui button">Limpar</button>
                                        <div className="or"></div>
                                        <button type="submit" className={`ui ${isPesquisaValida ? "" : "disabled "} positive button`}>Salvar</button>
                                    </div>
                                </div>

                                <div className="pesquisa-config">
                                    <div className="area-titulo">
                                        <div className="titulo-box">
                                            Título:
                                        </div>
                                        <div className="ui transparent input input-titulo-size">
                                            <input onChange={(e) => setNomePesquisa(e.target.value)} type="text" placeholder="Digite o título da pesquisa." />
                                        </div>
                                    </div>
                                    <div className="area-tipo-pesquisa">
                                        <div className="area-tipo-item">
                                            Esta pesquisa será:
                                        </div>
                                        <div className="area-tipo-item">
                                            <Form.Field control='select' className="select-limiter" onChange={(e) => setTipoPesquisa(e.target.value)}>
                                                <option value='interna'>Pesquisa Interna</option>
                                                <option value='externa'>Pesquisa Externa</option>
                                            </Form.Field>
                                        </div>
                                    </div>
                                    <div className="area-qtd-respostas">
                                        <div className="area-qtd-respostas-item">
                                            Quantidade de respostas:
                                        </div>
                                        <div className="area-qtd-respostas-item">
                                            <input type="number" onChange={(e) => setLimiteRespostas(parseInt(e.target.value))} placeholder="Digite o limite de respostas" />
                                        </div>
                                    </div>
                                </div>


                                <div className="respostas-area">
                                    <div className="field-resposta">Perguntas:</div>
                                    <div className="contador-area">
                                        <button type="button" onClick={decrementarPergunta} className="ui icon button button-limiter"><i aria-hidden="true" className="minus icon"></i></button>
                                        <div className='contador'>{perguntas.length}</div>
                                        <button type="button" onClick={incrementarPergunta} className="ui icon button button-limiter"><i aria-hidden="true" className="add center icon"></i></button>
                                    </div>
                                </div>
                                <div className="area-content">
                                    <div className="area-tipo-item">
                                        {
                                            perguntas.map((pergunta, index) => {
                                                return (
                                                    <div key={index} className="pergunta-box">
                                                        <NovaPergunta atualizar={atualizarPergunta} id={index} />
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
            </div>

        </>
    )
}

export default CriarPesquisa;
