/* Lecture 4
 * CSCI 4611, Spring 2024, University of Minnesota
 * Instructor: Evan Suma Rosenberg <suma@umn.edu>
 * License: Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 */ 

import * as gfx from 'gophergfx'

export class App extends gfx.GfxApp
{
    private ship: gfx.Mesh2;
    private star: gfx.Mesh2;
    
    private starfield: gfx.Particles2;

    // --- Create the App class ---
    constructor()
    {
        // initialize the base class gfx.GfxApp
        super();

        this.ship = gfx.Geometry2Factory.createBox();
        this.star = gfx.Geometry2Factory.createBox();

        this.starfield = new gfx.Particles2(this.star, 200);
    }


    // --- Initialize the graphics scene ---
    createScene(): void 
    {
        
        this.renderer.viewport = gfx.Viewport.CROP;

        this.ship.scale.set(0.08, 0.08);
        this.ship.material.texture = new gfx.Texture('./ship.png');
        
        this.star.material.texture = new gfx.Texture('./star.png');

        for(let i = 0; i < this.starfield.numParticles; i++)
        {
            this.starfield.particleSizes[i] = Math.random()*0.008 + 0.002;
            this.starfield.particlePositions[i].set(Math.random()*2-1, Math.random()*2-1);
        }

        // Update the particile system position and sizes
        this.starfield.update(true, true);

        this.scene.add(this.starfield);
        this.scene.add(this.ship);
    }

    
    // --- Update is called once each frame by the main graphics loop ---
    update(deltaTime: number): void 
    {

    }
}