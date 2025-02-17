/* The Particle class represents a particle with position, velocity, lifespan, color, and radius
properties, and includes a method to update its position based on a given time increment. */
class Particle {
    constructor(x, y, velocityX, velocityY, lifespan, color, radius) {
        this.x = x;
        this.y = y;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
        this.lifespan = lifespan;
        this.color = color;
        this.radius = radius; 
    }

    update(dt) {
        this.x += this.velocityX * dt;
        this.y += this.velocityY * dt;
        this.lifespan -= dt;
    }
}

/* The ParticleManager class manages particles with properties such as position, velocity, lifespan,
color, and radius, providing methods to create, update, and render them. */
class ParticleManager {
    constructor() {
        this.particles = [];
    }

    createParticle(x, y, velocityX, velocityY, lifespan, color, radius) {
        this.particles.push(new Particle(x, y, velocityX, velocityY, lifespan, color, radius));
    }

    updateParticles(dt) {
        for (const particle of this.particles) {
            particle.update(dt);
        }
        // Remove expired particles
        this.particles = this.particles.filter(p => p.lifespan > 0);
    }

    renderParticles(context) {
        for (const particle of this.particles) {
            // Render particle (e.g., draw a colored circle)
            context.fillStyle = particle.color;
            context.beginPath();
            context.arc(particle.x, particle.y, particle.radius, 0, 2 * Math.PI);
            context.fill();
        }
    }
}