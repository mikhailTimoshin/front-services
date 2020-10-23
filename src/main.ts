import FrameImpl from "./Entities/Frame/FrameImpl";

export class Frame implements FrameImpl {
    name: string;
    constructor() {
        this.name = '23'
    }

    public getName() {
        return this.name
    }
}
