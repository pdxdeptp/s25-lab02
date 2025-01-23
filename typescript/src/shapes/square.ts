import { Shape } from "./shape.js";

interface Square extends Shape{
    sideLen: number;
}

function square(sideLen: number): Square {
    return {
        sideLen,
        computeArea: function (): number {
            return sideLen * sideLen
        }
    }
}

export { Square, square }