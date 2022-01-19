import { MainDishBuilder } from './classes/main-dish-builder';

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeBearever().makeDessert();
console.log(mainDishBuilder.getMeal());
