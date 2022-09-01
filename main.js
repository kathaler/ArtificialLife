const zCanvas = document.getElementById("zCanvas");
zCanvas.width=250;
zCanvas.height=500;


const canvas=document.getElementById("canvas");
canvas.width=500;
canvas.height=500;

const ctx = canvas.getContext('2d');

let s = false;
let particles = [];
let yellow = create(200, "yellow");
let green = create(200, "green");
let red = create(200, "red");

update();

function create(number, color) {
    group=[];
    for(let i = 0; i < number; i++) {
        group.push(new Particle(random(), random(), color));
        particles.push(group[i]);
    }
    return group;
}

function start() {
    s = true;
}

function reset() {
    clear();
    yellow = create(200, "yellow");
    green = create(200, "green");
    red = create(200, "red");
}

function clear() {
    particles = [];
    yellow = [];
    green = [];
    red = [];
    ctx.clearRect(0,0, canvas.width, canvas.height);
    s = false;
}

function update(){
    if(s) {
        rule(green, green, -0.32);
        rule(green, red, 0.17);
        rule(green, yellow, 0.34);
        rule(red, red, -0.1);
        rule(red, green, -0.14);
        rule(yellow, yellow, -0.1);
        rule(yellow, green, -0.05);
        ctx.clearRect(0, 0, 500, 500);
    }
    for(let i = 0; i < particles.length; i++) {
        particles[i].draw(ctx);
    }
    requestAnimationFrame(update);
}
