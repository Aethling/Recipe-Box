import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';

const ShowAddModal = props =>
      <div>
         <Modal show={props.showAdd} onHide={props.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add Recipe</Modal.Title>
            <Modal.Body>
              <FormGroup controlId="formBasicText">
                <ControlLabel>Recipe Name</ControlLabel>
                <FormControl
                            type="text"
                            value={props.newestRecipe.recipeName}
                            placeholder="Enter Recipe Name"
                            onChange={(e)=> props.updateNewRecipe(e.target.value, props.newestRecipe.ingredients)}>
                </FormControl>
              </FormGroup>
              <FormGroup controlId="formControlsTextArea">
                <ControlLabel>Ingredients</ControlLabel>
                <FormControl
                           type="textarea"
                            value={props.newestRecipe.ingredients}
                            placeholder="Enter ingredients (separate by commas)"
                            onChange={(e)=> props.updateNewRecipe(props.newestRecipe.recipeName, e.target.value.split(","))}
                            >
                </FormControl>
              </FormGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button bsStyle="primary" onClick={()=> props.saveNewRecipe()}>Save</Button>
            </Modal.Footer>
          </Modal.Header>
        </Modal>
      </div>
export default ShowAddModal;