import React, { Component } from 'react';
import './App.css';
import NavComponent from './NavComponent';
import Accordion from './Accordion';
import EditModal from './EditModal';
import ShowAddModal from './ShowAddModal';
//54:00 if there are no recipes it won't crash but throw error message

class App extends Component {

  state = {
    showAdd: false,
    showEdit: false,
    currentIndex: 0,
    newestRecipe: {recipeName: "", ingredients: []},
    recipes: []
  }
  //deletes a recipe
  deleteRecipeAt = index => { 
    let recipes = this.state.recipes.slice();
    recipes.splice(index, 1);
    localStorage.setItem('recipes', JSON.stringify(recipes));
    this.setState({recipes});
    }
  //updates with a new recipe
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
    localStorage.setItem('recipes', JSON.stringify(recipes));
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
    localStorage.setItem('recipes', JSON.stringify(recipes));
    this.setState({recipes});
  }
  //updates ingredients
  updateIngredients = (ingredients, currentIndex) => {
    let recipes = this.state.recipes.slice();
    recipes[currentIndex] = {recipeName: recipes[currentIndex].recipeName, ingredients: ingredients}
    localStorage.setItem('recipes', JSON.stringify(recipes));
    this.setState({recipes})
  }
  //for local storage
  componentDidMount() {
  let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
  this.setState({ recipes })
  }
  handleSelect(){
    console.log("handleSelect");
  }

  render() {
    const { recipes, newestRecipe, currentIndex} = this.state;
    return (
      (recipes.length === 0) ? (
      
        <div className="App container"> 
          <NavComponent handleSelect={this.handleSelect}
                        open={this.open}
                        currentIndex={currentIndex}/>
          <p>You have no recipes</p>

        <ShowAddModal showAdd={this.state.showAdd}
                    updateNewRecipe={this.updateNewRecipe}
                    newestRecipe={newestRecipe}
                    recipes={recipes}
                    updateRecipeName={this.updateRecipeName}
                    updateIngredients={this.updateIngredients}
                    saveNewRecipe={this.saveNewRecipe}
                    close={this.close}
                    currentIndex={this.state.currentIndex}/>
        </div>

      ) : (
      <div className="App container">
        <NavComponent handleSelect={this.handleSelect}
                        open={this.open}
                        currentIndex={currentIndex}/>

        <Accordion recipes={this.state.recipes}
                    deleteRecipeAt={this.deleteRecipeAt}
                    open={this.open}
                    showEdit={this.state.showEdit}/>

        <EditModal showEdit={this.state.showEdit}
                    recipes={recipes}
                    updateRecipeName={this.updateRecipeName}
                    updateIngredients={this.updateIngredients}
                    saveNewRecipe={this.saveNewRecipe}
                    close={this.close}
                    currentIndex={this.state.currentIndex}/>

        <ShowAddModal showAdd={this.state.showAdd}
                    newestRecipe={newestRecipe}
                    recipes={recipes}
                    updateNewRecipe={this.updateNewRecipe}
                    updateRecipeName={this.updateRecipeName}
                    updateIngredients={this.updateIngredients}
                    saveNewRecipe={this.saveNewRecipe}
                    close={this.close}
                    currentIndex={this.state.currentIndex}/>
      
      
    </div>
    )
    );
}
}
export default App;

