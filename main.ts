
enum Around {
    //% block="左"
    left = 1,
    //% block="右"
    right = 2
}

//% weight=99 icon="\uf0e7" color=#1B80C4
namespace MiniMotor {

    /**
     * 设置电机持续运动
     */
    //% blockId="mini_motor" block="%a|电机 速度%s"
    //% s.min=-1023 s.max=1023
    //% weight=99
    export function motorGo(a: Around, s: number): void {
        if(a == Around.left){
            if(s > 0){
                pins.analogWritePin(AnalogPin.P13, Math.abs(s));
                pins.digitalWritePin(DigitalPin.P14, 0);
            }else{
                pins.analogWritePin(AnalogPin.P14, Math.abs(s));
                pins.digitalWritePin(DigitalPin.P13, 0);
            }
        }else{
            if(s > 0){
                pins.analogWritePin(AnalogPin.P15, Math.abs(s));
                pins.digitalWritePin(DigitalPin.P16, 0);
            }else{
                pins.analogWritePin(AnalogPin.P16, Math.abs(s));
                pins.digitalWritePin(DigitalPin.P15, 0);
            }
        }
        
    }

}


