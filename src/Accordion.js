import React from 'react';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Well from 'react-bootstrap/lib/Well';

const Accordion = props =>
      <div className="accordionFrame">
       <PanelGroup accordion id="accordion">
          {props.recipes.map((recipe, index) =>(
            <Panel eventKey={index} key={index}>
              <Panel.Heading  className="panel">
                <Panel.Title toggle>{recipe.recipeName}</Panel.Title>
              </Panel.Heading>
              <Panel.Body collapsible>
                <h3>Ingredients:</h3>
                <ul>
                {recipe.ingredients.map((item) => (
                  <Well className="well" bsSize="small" key={item}>{item}</Well>
                ))}
                </ul>
                <ButtonToolbar>
                  <Button bsStyle="danger" className="delete" onClick={(e)=>props.deleteRecipeAt(index)}>Delete Recipe</Button>
                  <Button bsStyle="default" onClick={(e)=>props.open("showEdit", index)}>Edit Recipe</Button>
                </ButtonToolbar>
              </Panel.Body>
            </Panel>
          ))}
        </PanelGroup>
      </div>
export default Accordion;
