import { Shape } from "./shape.js";

interface Circle extends Shape {
    radius: number;
}

function circle(radius: number): Circle {
    return {
        radius,
        computeArea: function (): number {
            return Math.PI * radius * radius
        }
    }
}

export { circle }
