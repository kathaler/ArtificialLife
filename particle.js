class Particle{
    constructor(x,y,c) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.color = c;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, 5, 5);
    }
}