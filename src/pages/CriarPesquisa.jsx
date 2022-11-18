import React from "react";
import FormNovaPesquisa from "../components/criar-pesquisa-components/FormNovaPesquisa";
import NovaPergunta from '../components/criar-pesquisa-components/NovaPergunta'
import { Form } from 'semantic-ui-react'
import Menu from "../components/menu-conponents/NavbarMenu";

import '../assets/css/criar-pesquisa.css'

function CriarPesquisa(){
    return(
        <>
            <div className="navbar-menu-dashboard">
                <Menu />
            </div>         

            <div className="gray-background">
                <div className="container">
                    <div className="card-conteudo">
                        <div className="">
                            <h1>Criar uma nova pesquisa</h1>
                        </div>
                        <Form>
                            <div className="area-tipo-pesquisa">
                                <div className="area-tipo-item">
                                    Esta pesquisa será:
                                </div>
                                <div className="area-tipo-item">
                                    <Form.Field control='select'>
                                        <option value='01'>Pesquisa Interna</option>
                                        <option value='02'>Pesquisa Externa</option>
                                    </Form.Field>
                                </div>                                 
                            </div>
                            <div className="area-tipo-pesquisa">
                                <div className="area-tipo-item">
                                    <NovaPergunta/>
                                </div>
                            </div>
                        </Form> 
                        
                        <FormNovaPesquisa />
                    </div>

                </div>
            </div>           
        </>
    )
}

export default CriarPesquisa;