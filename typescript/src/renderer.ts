// import { newRectangle, Rectangle } from "./shapes/rectangle.js";
import { Shape } from "./shapes/shape.js";

// function newRenderer(rectangle: Rectangle) {
function newRenderer(shape: Shape){
    return {
        draw() {
            // const area: number = rectangle.computeArea()
            const area: number = shape.computeArea()
            console.log("Shape drawn\n" + "Its area is " + area)
        }
    }
}

export { newRenderer }