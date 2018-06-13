import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';

const EditModal = props =>
      <div>
       <Modal show={props.showEdit} onHide={props.close}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Recipe</Modal.Title>
            <Modal.Body>
              <FormGroup controlId="formBasicText">
                <ControlLabel>Recipe Name</ControlLabel>
                <FormControl
                            type="text"
                            value={props.recipes[props.currentIndex].recipeName}
                            placeholder="Enter Text"
                            onChange={(e)=> props.updateRecipeName(e.target.value, props.currentIndex)}>
                </FormControl>
              </FormGroup>
              <FormGroup controlId="formControlsTextArea">
                <ControlLabel>Ingredients</ControlLabel>
                <FormControl
                           type="textarea"
                            value={props.recipes[props.currentIndex].ingredients}
                            placeholder="Enter ingredients (separate by commas)"
                            onChange={(e)=> props.updateIngredients(e.target.value.split(","), props.currentIndex)}
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
export default EditModal;