

//% weight=2 color=#1174EE icon="\uf001" block="Songs"
//% parts="songs"
namespace songs {

    //% weight=420
    //% blockId=songs_dadadado block="Da Da Da Do"
    //% icon="\uf001"
    //% blockExternalInputs=1
    //% parts="songs"
    export function dadadado(): void {
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(311, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Whole))
    }
}