import * as PIXI from 'pixi.js'
import  {UI} from "./ui"
export class Game {
public pixi: PIXI.Application
interface: UI
    constructor() {
        const container = document.getElementById("container")!
            this.pixi = new PIXI.Application({ width: 900, height: 512 })
            container.appendChild(this.pixi.view)
        this.pixi.loader


            this.pixi.loader.load(() => this.loadCompleted())

    }

    public loadCompleted() {
      this.interface = new UI(this)
      this.pixi.stage.addChild(this.interface)

        this.pixi.ticker.add((delta: number) => this.update(delta))
    }

    private update(delta: number) {
        this.interface.update()
    }

}

