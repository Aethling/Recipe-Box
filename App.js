import React, { Component } from 'react';
import './App.css';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Modal from 'react-bootstrap/lib/Modal';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
//54:00 if there are no recipes it won't crash but throw error message

class App extends Component {

  state = {
    showAdd: false,
    showEdit: false,
    currentIndex: 0,
    newestRecipe: {recipeName: "", ingredients: []},
    recipes: 
    [
     /* {
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
      }*/
    ]
  };
  //deletes a recipe
  deleteRecipeAt = index => { 
    let recipes = this.state.recipes.slice();
    recipes.splice(index, 1);
    this.setState({recipes});
    }
  updateNewRecipe = (recipeName, ingredients) => {
    this.setState({
      newestRecipe: {recipeName: recipeName, ingredients: ingredients}
    })
  }
  //closes a modal
  close = () => {
    if (this.state.showAdd) {
      this.setState({showAdd: false}); 
    } else if (this.state.showEdit) {
      this.setState({showEdit: false})
    }
  }
  //open a modal
  open = (state, currentIndex) => {
    this.setState({[state]: true });
    this.setState({currentIndex})
  }
  //saves a new recipe to recipes
  saveNewRecipe = () => {
    let recipes = this.state.recipes.slice();
    recipes.push({recipeName: this.state.newestRecipe.recipeName, ingredients: this.state.newestRecipe.ingredients});
    this.setState({
      recipes,
     newestRecipe: {recipeName: "", ingredients: []},
    });
    this.close();
  }
  //updates recipe name
  updateRecipeName = (recipeName, currentIndex) => {
    let recipes = this.state.recipes.slice();
    recipes[currentIndex] = {recipeName: recipeName, ingredients: recipes[currentIndex].ingredients};
    this.setState({recipes});
  }
  //updates ingredients
  updateIngredients = (ingredients, currentIndex) => {
    let recipes = this.state.recipes.slice();
    recipes[currentIndex] = {recipeName: recipes[currentIndex].recipeName, ingredients: ingredients}
    this.setState({recipes})
  }

  render() {
    const { recipes, newestRecipe, currentIndex} = this.state;
    const noItems = recipes.length === 0;
    console.log(recipes);

    return (
      <div className="App container">
      { noItems ? <p>You don't have any recipes</p> : (
      <div> 
       <PanelGroup accordion
                    id="accordion" 
                >
          {recipes.map((recipe, index) =>(
            <Panel eventKey={index} key={index}>
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
                  <Button bsStyle="danger" onClick={(e)=>this.deleteRecipeAt(index)}>Delete Recipe</Button>
                  <Button bsStyle="default" onClick={(e)=>this.open("showEdit", index)}>Edit Recipe</Button>
                </ButtonToolbar>
              </Panel.Body>
            </Panel>
          ))}
        </PanelGroup>
      </div>
      )};
    
      <div>
            <Modal show={this.state.showAdd} onHide={this.close}>
              <Modal.Header closeButton>
                <Modal.Title>Add Recipe</Modal.Title>
                <Modal.Body>
                  <FormGroup controlId="formBasicText">
                    <ControlLabel>Recipe Name</ControlLabel>
                    <FormControl
                                type="text"
                                value={newestRecipe.recipeName}
                                placeholder="Enter Recipe Name"
                                onChange={(e)=> this.updateNewRecipe(e.target.value, newestRecipe.ingredients)}>
                    </FormControl>
                  </FormGroup>
                  <FormGroup controlId="formControlsTextArea">
                    <ControlLabel>Ingredients</ControlLabel>
                    <FormControl
                               type="textarea"
                                value={newestRecipe.ingredients}
                                placeholder="Enter ingredients (separate by commas)"
                                onChange={(e)=> this.updateNewRecipe(newestRecipe.recipeName, e.target.value.split(","))}
                                >
                    </FormControl>
                  </FormGroup>
                </Modal.Body>
                <Modal.Footer>
                  <Button bsStyle="primary" onClick={()=> this.saveNewRecipe()}>Save</Button>
                </Modal.Footer>
              </Modal.Header>
            </Modal>

        <Modal show={this.state.showEdit} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add Recipe</Modal.Title>
            <Modal.Body>
              <FormGroup controlId="formBasicText">
                <ControlLabel>Recipe Name</ControlLabel>
                <FormControl
                            type="text"
                            value={recipes[currentIndex].recipeName}
                            placeholder="Enter Text"
                            onChange={(e)=> this.updateRecipeName(e.target.value, currentIndex)}>
                </FormControl>
              </FormGroup>
              <FormGroup controlId="formControlsTextArea">
                <ControlLabel>Ingredients</ControlLabel>
                <FormControl
                           type="textarea"
                            value={recipes[currentIndex].ingredients}
                            placeholder="Enter ingredients (separate by commas)"
                            onChange={(e)=> this.updateIngredients(e.target.value.split(","), currentIndex)}
                            >
                </FormControl>
              </FormGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button bsStyle="primary" onClick={()=> this.saveNewRecipe()}>Save</Button>
            </Modal.Footer>
          </Modal.Header>
        </Modal>
      </div>
        <Button bsStyle="primary" onClick={()=> this.open("showAdd", currentIndex)}>Add Recipe</Button>
      </div>
    );
}
}
export default App;

