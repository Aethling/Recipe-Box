import React, { Component } from 'react';
import './App.css';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
import Accordion from 'react-bootstrap/lib/Accordion';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Modal from 'react-bootstrap/lib/Modal';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

class App extends Component {

  state = {
    activeKey: "1",
    recipes: [
      {
        recipeName: "tacos",
        ingredients: ["beans", "onion", "broccoli"]
      },
      {
        recipeName: "fish pudding",
        ingredients: ["eggs", "gluten", "more gluten"]
      },
      {
        recipeName: "arm",
        ingredients : ["tendon", "blood", "muscle"]
      }
    ]
  }
  handleSelect(activeKey){
    this.setState({ activeKey });
  }
  render() {
    const {recipes} = this.state;
    return (
      <div className="App container">
       <PanelGroup accordion
                    id="accordionControlled" 
                    
                >
          {recipes.map((recipe, index) =>(
            <Panel eventKey={index}>
              <Panel.Heading>
                <Panel.Title toggle>{recipe.recipeName}</Panel.Title>
              </Panel.Heading>
              <Panel.Body collapsible>
                <ul>
                {recipe.ingredients.map((item) => (
                  <li key={item}>{item}</li>
                ))}
                </ul>
                <ButtonToolbar>
                  <Button bsStyle="danger">Delete Recipe</Button>
                  <Button bsStyle="default">Edit Recipe</Button>
                </ButtonToolbar>
              </Panel.Body>
            </Panel>
          ))}
        </PanelGroup>      </div>
    );
  }
}

export default App;
