import * as model from './model.js';
import recipeView from './views/recipeView.js';

// 
import 'core-js/stable'; // For polyfilling everything else 
import 'regenerator-runtime/runtime'; // For polyfilling async/await

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////



const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if(!id) return;

    //Load data from API
    await model.loadRecipe(id);
    recipeView.renderSpinner();

    //Rendering recipe
    recipeView.render(model.state.recipe);
    
  } catch (err) {
    alert(err);
  }
};

controlRecipes();

const init = function(){
  recipeView.addHandlerRender(controlRecipes);
};

init();
