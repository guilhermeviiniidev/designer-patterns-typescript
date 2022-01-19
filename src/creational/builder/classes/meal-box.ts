import { MelCompositeProtocol } from '../interfaces/mel-composite-protocol';

export class MealBox implements MelCompositeProtocol {
  private _children: MelCompositeProtocol[] = [];

  getPrice(): number {
    return this._children.reduce((acc, meal) => acc + meal.getPrice(), 0);
  }

  add(...meals: MelCompositeProtocol[]): void {
    meals.forEach((meal) => this._children.push(meal));
  }
}
