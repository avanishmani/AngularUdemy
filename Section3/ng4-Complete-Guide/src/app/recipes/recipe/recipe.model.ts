import { Ingredient } from "src/app/shared/ingredient.model";

export class Recipe{
    public name:string;
    public description:string;
    public imagePath:string;
    public ingredients:Ingredient[];
    constructor(name:string,desc:string,avatar:string,ingredient:Ingredient[]){
        this.name=name;
        this.description=desc;
        this.imagePath=avatar;
        this.ingredients=ingredient;
    }
}