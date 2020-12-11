//% weight=0 color=#3CB371 icon="\uf0ad" block="Tools"
namespace tools {
    /**
    * 計算長方形面積，不回傳，只顯示在LED
    */
    //% blockId="writeRelay" block="Pin Number of Relay %pinNumber|switch %status"
    //% blockGap=1 weight=2
    //export function ledOfRectangle(length: number, width:number): void {
    //    basic.showNumber(length*width)
    //}
    export function writeRelay(name: DigitalPin, value: number): void {
        pins.digitalWritePin(DigitalPin, number)
        //basic.showNumber(length*width)
    }
}
