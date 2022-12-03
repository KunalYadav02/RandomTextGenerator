import canvas from "canvas"
import crypto from "crypto"
import randomString from "./randomString.controller.js"

const Background = "#000"

const { createCanvas } = canvas

const hashString = (string: string) =>
    crypto.createHash("md5").update(string).digest("hex")

const genColor = (string: string): string => {
    let r = 0,
        g = 0,
        b = 0
    const length = string.length

    for (let i = 0; i < length; i++)
        if (i % 3 === 0) r += string.charCodeAt(i)
        else if (i % 3 === 1) g += string.charCodeAt(i)
        else b += string.charCodeAt(i)

    r %= 255
    g %= 255
    b %= 255

    const rgb = `rgb(${r},${g},${b})`

    return rgb === "rgb(0,0,0)" ? genColor(string) : rgb
}

const genImage = (string: string, size: number) => {
    const width = size,
        height = size
    const canvas = createCanvas(width, height)
    const ctx = canvas.getContext("2d")
    ctx.fillStyle = Background
    ctx.fillRect(0, 0, width, height)

    genGrid(ctx, width, height, string)

    return canvas.toBuffer("image/png").toString('base64')
}

const genGrid = (
    ctx: canvas.CanvasRenderingContext2D,
    width: number,
    height: number,
    string: string
) => {
    const size = Math.floor(Math.sqrt(string.length))

    const spacingX = Math.round(width / size),
        spacingY = Math.round(height / size)

    const color = genColor(string)
    for (let i = 0; i < size; i++)
        for (let j = 0; j < size / 2; j++) {
            if (string.charCodeAt((size - 1) * i + j) % 2 === 0) ctx.fillStyle = color
            else ctx.fillStyle = Background
            ctx.fillRect(j * spacingX, i * spacingY, spacingX, spacingY)
            ctx.fillRect((size - j - 1) * spacingX, i * spacingY, spacingX, spacingY)
        }
}

const randomIdenticon = (size = 100) => {
    const string = randomString()


    const hashedString = hashString(string)

    // return res.
    //     header("content-type", "image/png")
    //     .status(200)
    //     .send(genImage(hashedString, size))

    return {
        image: genImage(hashedString, size),
        url: `https://imagicon.herokuapp.com/?size=${size}&seed=${string}`
    }
}

export default randomIdenticon
