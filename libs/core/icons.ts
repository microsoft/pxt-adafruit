// this doesn't work//% block=happy enumval=0 blockImage=1
namespace images {

export enum IconNames {
    Heart = 0,
    SmallHeart,

    Yes,
    No,

    Happy,
    Sad,
    Confused,
    Angry,
    Asleep,
    Surprised,
    Silly,
    Fabulous,
    Meh,

    TShirt,
    Rollerskate,
    Duck,
    House,
    Tortoise,
    Butterfly,
    StickFigure,
    Ghost,
    Sword,
    Giraffe,
    Skull,
    Umbrella,
    Snake,

    Rabbit,
    Cow,
    QuarterNote,
    EigthNote,
    Pitchfork,
    Pacman,
    Target,

    Triangle,
    LeftTriangle,
    Chessboard,
    Diamond,
    SmallDiamond,
    Square,
    SmallSquare
}

export enum ArrowNames {
    North = 0,
    NorthEast,
    East,
    SouthEast,
    South,
    SouthWest,
    West,
    NorthWest,
}

export enum HourNames {
    Hour12 = 0,
    Hour1,
    Hour2,
    Hour3,
    Hour4,
    Hour5,
    Hour6,
    Hour7,
    Hour8,
    Hour9,
    Hour10,
    Hour11
}


    const heart = `
. # . # .
# # # # #
# # # # #
. # # # .
. . # . .`

    const small_heart = `
. . . . .
. # . # .
. # # # .
. . # . .
. . . . .`

    //faces

    const happy_face = `
. . . . .
. # . # .
. . . . .
# . . . #
. # # # .`

    const sad_face = `
. . . . .
. # . # .
. . . . .
. # # # .
# . . . #`

    const confused_face = `
. . . . .
. # . # .
. . . . .
. # . # .
# . # . #`

    const angry_face = `
# . . . #
. # . # .
. . . . .
# # # # #
# . # . #`

    const asleep_face = `
. . . . .
# # . # #
. . . . .
. # # # .
. . . . .`

    const surprised_face = `
. # . # .
. . . . .
. . # . .
. # . # .
. . # . .`

    const silly_face = `
# . . . #
. . . . .
# # # # #
. . . # #
. . . # #`

    const fabulous_face = `
# # # # #
# # . # #
. . . . .
. # . # .
. # # # .`

    const meh_face = `
# # . # #
. . . . .
. . . # .
. . # . .
. # . . .`

    const yes = `
. . . . .
. . . . #
. . . # .
# . # . .
. # . . .`

    const no = `
# . . . #
. # . # .
. . # . .
. # . # .
# . . . #`

    // clock hands

    const hour12 = `
. . # . .
. . # . .
. . # . .
. . . . .
. . . . .`

    const hour1 = `
. . . # .
. . . # .
. . # . .
. . . . .
. . . . .`

    const hour2 = `
. . . . .
. . . # #
. . # . .
. . . . .
. . . . .`


    const hour3 = `
. . . . .
. . . . .
. . # # #
. . . . .
. . . . .`

    const hour4 = `
. . . . .
. . . . .
. . # . .
. . . # #
. . . . .`

    const hour5 = `
. . . . .
. . . . .
. . # . .
. . . # .
. . . # .`

    const hour6 = `
. . . . .
. . . . .
. . # . .
. . # . .
. . # . .`


    const hour7 = `
. . . . .
. . . . .
. . # . .
. # . . .
. # . . .`

    const hour8 = `
. . . . .
. . . . .
. . # . .
# # . . .
. . . . .`

    const hour9 = `
. . . . .
. . . . .
# # # . .
. . . . .
. . . . .`

    const hour10 = `
. . . . .
# # . . .
. . # . .
. . . . .
. . . . .`

    const hour11 = `
. # . . .
. # . . .
. . # . .
. . . . .
. . . . .`

    // compass directions

    const arrow_n = `
. . # . .
. # # # .
# . # . #
. . # . .
. . # . .`

    const arrow_ne = `
. . # # #
. . . # #
. . # . #
. # . . .
# . . . .`

    const arrow_e = `
. . # . .
. . . # .
# # # # #
. . . # .
. . # . .`

    const arrow_se = `
# . . . .
. # . . .
. . # . #
. . . # #
. . # # #`

    const arrow_s = `
. . # . .
. . # . .
# . # . #
. # # # .
. . # . .`

    const arrow_sw = `
. . . . #
. . . # .
# . # . .
# # . . .
# # # . .`

    const arrow_w = `
. . # . .
. # . . .
# # # # #
. # . . .
. . # . .`

    const arrow_nw = `
# # # . .
# # . . .
# . # . .
. . . # .
. . . . #`

    // geometry

    const triangle = `
. . . . .
. . # . .
. # . # .
# # # # #
. . . . .`

    const left_triangle = `
# . . . .
# # . . .
# . # . .
# . . # .
# # # # #`

    const chessboard = `
. # . # .
# . # . #
. # . # .
# . # . #
. # . # .`

    const diamond = `
. . # . .
. # . # .
# . . . #
. # . # .
. . # . .`

    const small_diamond = `
. . . . .
. . # . .
. # . # .
. . # . .
. . . . .`

    const square = `
# # # # #
# . . . #
# . . . #
# . . . #
# # # # #`

    const small_square = `
. . . . .
. # # # .
. # . # .
. # # # .
. . . . .`

    // The following images were designed by Abbie Brooks.

    const tshirt = `
# # . # #
# # # # #
. # # # .
. # # # .
. # # # .`

    const rollerskate = `
. . . # #
. . . # #
# # # # #
# # # # #
. # . # .`

    const duck = `
. # # . .
# # # . .
. # # # #
. # # # .
. .. . .`

    const house = `
. . # . .
. # # # .
# # # # #
. # # # .
. # . # .`

    const tortoise = `
. . . . .
. # # # .
# # # # #
. # . # .
. . . . .`

    const butterfly = `
# # . # #
# # # # #
. . # . .
# # # # #
# # . # #`

    const stick_figure = `
. . # . .
# # # # #
. . # . .
. # . # .
# . . . #`

    const ghost = `
. # # # .
# . # . #
# # # # #
# # # # #
# . # . #`

    const sword = `
. . # . .
. . # . .
. . # . .
. # # # .
. . # . .`

    const giraffe = `
# # . . .
. # . . .
. # . . .
. # # # .
. # . # .`

    const skull = `
. # # # .
# . # . #
# # # # #
. # # # .
. # # # .`

    const umbrella = `
. # # # .
# # # # #
. . # . .
# . # . .
# # # . .`

    const snake = `
# # . . .
# # . # #
. # . # .
. # # # .
. . . . .`

// animals    

    const rabbit = `
# . # . .
# . # . .
# # # # .
# # . # .
# # # # .`

    const cow = `
# . . . #
# . . . #
# # # # #
. # # # .
. . # . .`

// musical notes

    const quarter_note = `
. . # . .
. . # . .
. . # . .
# # # . .
# # # . .`

    const eigth_note = `
. . # . .
. . # # .
. . # . #
# # # . .
# # # . .`

// other icons

    const pitchfork = `
# . # . #
# . # . #
# # # # #
. . # . .
. . # . .`

    const pacman = `
. # # # #
# # # # .
# # # . .
# # # # .
. # # # #`

    const target = `
. . # . .
. # # # .
# # . # #
. # # # .
. . # . .`

    //% weight=50
    //% blockId=device_arrow block="%arrow"
    //% shim=TD_ID
    export function arrowNumber(arrow: ArrowNames): number {
        return arrow;
    }

    //% weight=50
    //% blockId=device_hour block="%hour"
    //% shim=TD_ID
    export function hourNumber(hour: HourNames): number {
        return hour;
    }

    //% weight=50
    //% blockId=builtin_arrow_image block="arrow image %i=device_arrow"
    export function arrowImage(i: ArrowNames): Image {
        let res = images.createImage(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        switch (i) {
            case ArrowNames.North: return set(res, arrow_n)
            case ArrowNames.NorthEast: return set(res, arrow_ne)
            case ArrowNames.East: return set(res, arrow_e)
            case ArrowNames.SouthEast: return set(res, arrow_se)
            case ArrowNames.South: return set(res, arrow_s)
            case ArrowNames.SouthWest: return set(res, arrow_sw)
            case ArrowNames.West: return set(res, arrow_w)
            case ArrowNames.NorthWest: return set(res, arrow_nw)
        }
        return res;
    }

    //% weight=50
    //% blockId=builtin_hour_image block="hour image %i=device_hour"
    export function hourImage(i: HourNames): Image {
        let res = images.createImage(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        switch (i) {
            case HourNames.Hour12: return set(res, hour12)
            case HourNames.Hour1: return set(res, hour1)
            case HourNames.Hour2: return set(res, hour2)
            case HourNames.Hour3: return set(res, hour3)
            case HourNames.Hour4: return set(res, hour4)
            case HourNames.Hour5: return set(res, hour5)
            case HourNames.Hour6: return set(res, hour6)
            case HourNames.Hour7: return set(res, hour7)
            case HourNames.Hour8: return set(res, hour8)
            case HourNames.Hour9: return set(res, hour9)
            case HourNames.Hour10: return set(res, hour10)
            case HourNames.Hour11: return set(res, hour11)
        }
        return res;
    }

    //% weight=50
    //% blockId=builtin_image block="icon %i"
    export function iconImage(i: IconNames): Image {
        let res = images.createImage(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        switch (i) {
            case IconNames.Heart: return set(res, heart)
            case IconNames.SmallHeart: return set(res, small_heart)

            case IconNames.Yes: return set(res, yes)
            case IconNames.No: return set(res, no)

            case IconNames.Happy: return set(res, happy_face)
            case IconNames.Sad: return set(res, sad_face)
            case IconNames.Confused: return set(res, confused_face)
            case IconNames.Angry: return set(res, angry_face)
            case IconNames.Asleep: return set(res, asleep_face)
            case IconNames.Surprised: return set(res, surprised_face)
            case IconNames.Silly: return set(res, silly_face)
            case IconNames.Fabulous: return set(res, fabulous_face)
            case IconNames.Meh: return set(res, meh_face)

            case IconNames.TShirt: return set(res, tshirt)
            case IconNames.Rollerskate: return set(res, rollerskate)
            case IconNames.Duck: return set(res, duck)
            case IconNames.House: return set(res, house)
            case IconNames.Tortoise: return set(res, tortoise)
            case IconNames.Butterfly: return set(res, butterfly)
            case IconNames.StickFigure: return set(res, stick_figure)
            case IconNames.Ghost: return set(res, ghost)
            case IconNames.Sword: return set(res, sword)
            case IconNames.Giraffe: return set(res, giraffe)
            case IconNames.Skull: return set(res, skull)
            case IconNames.Umbrella: return set(res, umbrella)
            case IconNames.Snake: return set(res, snake)

            case IconNames.Rabbit: return set(res, rabbit)
            case IconNames.Cow: return set(res, cow)
            case IconNames.QuarterNote: return set(res, quarter_note)
            case IconNames.EigthNote: return set(res, eigth_note)
            case IconNames.Pitchfork: return set(res, pitchfork)
            case IconNames.Pacman: return set(res, pacman)
            case IconNames.Target: return set(res, target)

            case IconNames.Triangle: return set(res, triangle)
            case IconNames.LeftTriangle: return set(res, left_triangle)
            case IconNames.Chessboard: return set(res, chessboard)
            case IconNames.Diamond: return set(res, diamond)
            case IconNames.SmallDiamond: return set(res, small_diamond)
            case IconNames.Square: return set(res, square)
            case IconNames.SmallSquare: return set(res, small_square)
        }
        return res;
    }

    function set(res: Image, s: string) {
        let j = 0;
        for (let x of s) {
            if (x == "." || x == "#") {
                res.setPixel(j % 5, j / 5, x == "#")
                j++
            }
        }
        return res
    }
}

namespace basic {

    //% weight=50
    //% blockId=basic_show_arrow block="show arrow %i=device_arrow"
    export function showArrow(i: number) {
        let res = images.arrowImage(i)
        res.showImage(0)
    }

    //% weight=50
    //% blockId=basic_show_hour block="show hour %i=device_hour"
    export function showHour(i: number) {
        let res = images.hourImage(i)
        res.showImage(0)
    }

    //% weight=90
    //% blockId=basic_show_icon block="show icon %i"
    export function showIcon(i: images.IconNames) {
        let res = images.iconImage(i)
        res.showImage(0)
    }
}
