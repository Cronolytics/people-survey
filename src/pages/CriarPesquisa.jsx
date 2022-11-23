import React, { useEffect, useState } from "react";
import NovaPergunta from '../components/criar-pesquisa-components/NovaPergunta'
import { Form } from 'semantic-ui-react'
import Menu from "../components/menu-conponents/NavbarMenu";
import '../assets/css/criar-pesquisa.css'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

function CriarPesquisa(){

    const [perguntas, setPerguntas] = useState([]);

    useEffect(() =>
        setPerguntas([{
            descricao: "",
            respostas: []
        }])
    , [])

    const [contadorPerguntas, setContadorPerguntas] = useState(1);
    const [qtdPerguntas, setQtdPerguntas] = useState([1]);
    useEffect(() => {
        var novoArray = [];
        for (let index = 1; index <= contadorPerguntas; index++) {
            novoArray.push(index);       
        }
        setQtdPerguntas(novoArray);
    }, [contadorPerguntas])

    function listarQtdPerguntas(){
        var novoArray = [];
        for (let index = 1; index <= contadorPerguntas; index++) {
            novoArray.push(index);       
        }
        setQtdPerguntas(novoArray);
    }

    function atualizarPergunta (valor, index) {
        var novasPerguntas = perguntas;

        novasPerguntas = novasPerguntas.map((el, i) => {
            if (i == index) {
                el = valor;
            }
            return el;
        })

        setPerguntas(novasPerguntas)
    }

    class Pergunta {
        constructor (descricao, respostas) {
            this.descricao = descricao || "";
            this.respostas = respostas || new Array;
        }
    }

    function incrementarPergunta(){
        // var aux = contadorPerguntas + 1;
        var novasPerguntas = [...perguntas, new Pergunta]

        console.log("PERGUNTAS: ", novasPerguntas);

        setPerguntas(novasPerguntas)

        // setContadorPerguntas(aux);
        // listarQtdPerguntas();
    }

    function decrementarPergunta () {
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
            var novasPerguntas = [...perguntas];
            novasPerguntas.pop();
    
            setPerguntas(novasPerguntas);
        }
    }

    function decrementarPerguntaOld(){
        if(contadorPerguntas === 1){
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
            var aux = contadorPerguntas - 1;
            setContadorPerguntas(aux);
            listarQtdPerguntas();
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
                        <div className="page-titulo">
                            <h1>Criar uma nova pesquisa</h1>
                            <div class="ui button-or-limiter">
                                <button class="ui button">Cancel</button>
                                <div class="or"></div>
                                <button class="ui positive button">Save</button>
                            </div>
                        </div>
                        <Form>
                            <div className="pesquisa-config">
                                <div className="area-titulo">
                                    <div className="titulo-box">
                                        Título:
                                    </div>
                                        <div className="ui transparent input input-titulo-size">
                                            <input type="text"  placeholder="Digite o título da pesquisa."/>
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