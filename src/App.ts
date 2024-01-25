/* Lecture 4
 * CSCI 4611, Spring 2024, University of Minnesota
 * Instructor: Evan Suma Rosenberg <suma@umn.edu>
 * License: Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 */ 

import * as gfx from 'gophergfx'

export class App extends gfx.GfxApp
{
    private ship: gfx.Mesh2;

    // --- Create the App class ---
    constructor()
    {
        // initialize the base class gfx.GfxApp
        super();

        this.ship = gfx.Geometry2Factory.createBox();
    }


    // --- Initialize the graphics scene ---
    createScene(): void 
    {
        
        this.renderer.viewport = gfx.Viewport.CROP;

        this.ship.scale.set(0.08, 0.08);
        this.ship.material.texture = new gfx.Texture('./ship.png');
        this.scene.add(this.ship);
    }

    
    // --- Update is called once each frame by the main graphics loop ---
    update(deltaTime: number): void 
    {

    }
}