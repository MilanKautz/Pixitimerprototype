import { Game } from "./game"
import * as PIXI from 'pixi.js'

export class UI extends PIXI.Container {
    private timeLeft: PIXI.Text
    public game: Game
    public pixi: PIXI.Application
    private time: number
    private time2: string


    constructor(game: Game) {
        super()
        this.game = game
        this.x = 350
        this.y = 200

        const style = new PIXI.TextStyle({
            fontFamily: 'ArcadeFont',
            fontSize: 40,
            fontWeight: 'bold',
            fill: ['#FFFFFF']
        })



        this.timeLeft = new PIXI.Text(`tijd over: ${this.time2}`, style)
        this.addChild(this.timeLeft)
   


        this.time = 100
    }

    public update() {


        this.time -= 0.0083
        this.time2 = this.time.toFixed(0)
        this.timeLeft.text = `tijd over: ${this.time2}`
        
    }
 



}
