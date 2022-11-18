import React from 'react'
import { Button, Card, Form } from 'semantic-ui-react'

function NovaPergunta(){
    return(
        <>
        <Card.Group>
            <Card>
                <Card.Content>
                    <Form.Field label='Digite a pergunta' control='input' />
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='green'>
                            Approve
                        </Button>
                        <Button basic color='red'>
                            Decline
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        </Card.Group>    
        </>
    )
}

export default NovaPergunta;