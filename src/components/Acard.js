import React, { Component } from 'react';
import { Button, Card, Image } from 'semantic-ui-react'
import '../cssFile/Acard.css';


class Acard extends React.Component {
    render() {
        return(
            <Card>

            <Card.Content>
              <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
              <Card.Header>Steve Sanders</Card.Header>
              <Card.Meta>Friends of Elliot</Card.Meta>
              <Card.Description>
                Steve wants to add you to the group <strong>best friends</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
                4 Friends
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                {/* <Button basic color='green'>
                  Approve
                </Button>
                <Button basic color='red'>
                  Decline
                </Button>
                <Button content='Pause' icon='pause' labelPosition='left' />
                <Button content='Next' icon='right arrow' labelPosition='right' /> */}
                <Button.Group>
                    <Button positive>Approve</Button>
                    <Button.Or />
                    <Button>Decline</Button>
                    <Button.Or />
                    <Button>Info</Button>
                </Button.Group>
              </div>
            </Card.Content>

          </Card>
        );
    }
}


export default Acard;