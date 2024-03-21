import Actor from "./Actor";

export default class Dino extends Actor {
    yVelocity: number;  
    gravity: number;

    constructor(imageData?:ImageData) {
        super(imageData);
            this.yVelocity = 0;
            this.gravity = 0;
    }

        jump() {}
        nextFrame() {}
}