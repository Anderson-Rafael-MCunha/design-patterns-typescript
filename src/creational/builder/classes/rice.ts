import { MealCompositeProtocol } from "../interfaces/meal-composite-protocol";

export class Rice implements MealCompositeProtocol {
    constructor(private name: string, private price: number) {}

    getPrice(): number {
        return this.price
    }
}
// parei o video no minuto 7:47