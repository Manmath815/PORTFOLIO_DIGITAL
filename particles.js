const canvas =
    document.getElementById("particleCanvas");

const ctx = canvas.getContext("2d");

let particles = [];

function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener(
    "resize",
    resizeCanvas
);


class Particle {

    constructor() {

        this.x =
            Math.random() * canvas.width;

        this.y =
            Math.random() * canvas.height;

        this.size =
            Math.random() * 1.5 + 0.5;

        this.speed =
            Math.random() * 0.25 + 0.05;

        this.opacity =
            Math.random() * 0.6 + 0.2;

    }


    update() {

        this.y -= this.speed;

        if (this.y < 0) {

            this.y = canvas.height;

            this.x =
                Math.random() * canvas.width;

        }

    }


    draw() {

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            `rgba(201,164,92,${this.opacity})`;

        ctx.fill();

    }

}


function createParticles() {

    particles = [];

    const count =
        Math.min(
            100,
            Math.floor(
                window.innerWidth / 12
            )
        );

    for (let i = 0; i < count; i++) {

        particles.push(
            new Particle()
        );

    }

}


function animateParticles() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    particles.forEach((particle) => {

        particle.update();

        particle.draw();

    });

    requestAnimationFrame(
        animateParticles
    );

}


createParticles();

animateParticles();