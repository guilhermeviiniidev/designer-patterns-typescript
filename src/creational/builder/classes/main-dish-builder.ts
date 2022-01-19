import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { Beans, Rice, Meat } from '../classes';
import { MealBox } from './meal-box';
import { Dessert } from './dessert';

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const beans = new Beans('Feijao', 10);
    const rice = new Rice('Arroz', 12);
    const meat = new Meat('Carne', 20);
    this._meal.add(beans, rice, meat);
    return this;
  }
  makeDessert(): this {
    const dessert = new Dessert('Docinho de queijo', 5);
    this._meal.add(dessert);
    return this;
  }
  makeBearever(): this {
    const dessert = new Dessert('Docinho de feijão', 15);
    this._meal.add(dessert);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }
}
