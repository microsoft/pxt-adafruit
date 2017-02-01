/*
The MIT License (MIT)

Copyright (c) 2013-2016 The MicroPython-on-micro:bit Developers, as listed
in the accompanying AUTHORS file

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

// Images from file microbitconstimage.cpp https://github.com/bbcmicrobit/micropython

enum IconNames {
    //% block="heart"
    Heart = 0,
    //% block="small heart"
    SmallHeart,
    //% block="yes"
    Yes,
    //% block="no"
    No,
    //% block="happy"
    Happy,
    //% block="sad"
    Sad,
    //% block="confused"
    Confused,
    //% block="angry"
    Angry,
    //% block="asleep"
    Asleep,
    //% block="surprised"
    Surprised,
    //% block="silly"
    Silly,
    //% block="fabulous"
    Fabulous,
    //% block="meh"
    Meh,
    //% block="t-shirt"
    TShirt,
    //% block="roller skate"
    Rollerskate,
    //% block="duck"
    Duck,
    //% block="house"
    House,
    //% block="tortoise"
    Tortoise,
    //% block="butterfly"
    Butterfly,
    //% block="stick figure"
    StickFigure,
    //% block="ghost"
    Ghost,
    //% block="sword"
    Sword,
    //% block="giraffe"
    Giraffe,
    //% block="skull"
    Skull,
    //% block="umbrella"
    Umbrella,
    //% block="snake"
    Snake,
    //% block="rabbit"
    Rabbit,
    //% block="cow"
    Cow,
    //% block="quarter note"
    QuarterNote,
    //% block="eigth note"
    EigthNote,
    //% block="pitchfork"
    Pitchfork,
    //% block="pac man"
    Pacman,
    //% block="target"
    Target,
    //% block="triangle"
    Triangle,
    //% block="left triangle"
    LeftTriangle,
    //% block="chess board"
    Chessboard,
    //% block="diamond"
    Diamond,
    //% block="small diamond"
    SmallDiamond,
    //% block="square"
    Square,
    //% block="small square"
    SmallSquare
}

enum ArrowNames {
    //% blockIdentity=images.arrowNumber
    North = 0,
    //% blockIdentity=images.arrowNumber
    NorthEast,
    //% blockIdentity=images.arrowNumber
    East,
    //% blockIdentity=images.arrowNumber
    SouthEast,
    //% blockIdentity=images.arrowNumber
    South,
    //% blockIdentity=images.arrowNumber 
    SouthWest,
    //% blockIdentity=images.arrowNumber
    West,
    //% blockIdentity=images.arrowNumber
    NorthWest,
}

namespace basic {

    /**
     * Draws the selected icon on the LED screen
     */
    //% weight=90 blockGap=8
    //% blockId=basic_show_icon 
    //% block="show icon %i" icon="\uf00a"
    //% parts="ledmatrix"
    export function showIcon(icon: IconNames) {
        let res = images.iconImage(icon)
        res.showImage(0)
    }

    //% weight=50 blockGap=8
    //% blockId=basic_show_arrow 
    //% block="show arrow %i=device_arrow"
    //% parts="ledmatrix"
    //% advanced=true
    export function showArrow(i: number) {
        let res = images.arrowImage(i)
        res.showImage(0)
    }
}


namespace images {

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

    //% weight=50 blockGap=8
    //% blockId=device_arrow block="%arrow"
    //% shim=TD_ID
    export function arrowNumber(arrow: ArrowNames): number {
        return arrow;
    }

    //% weight=50 blockGap=8
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

    //% weight=50 blockGap=8
    //% blockId=builtin_image block="icon image %i"
    export function iconImage(i: IconNames): Image {
        let res = images.createImage(`
                . . . . .
                . . . . .
                . . . . .
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
