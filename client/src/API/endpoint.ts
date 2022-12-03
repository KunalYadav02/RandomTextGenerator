export enum METHOD {
    GET = "get",
    POST = "post"

}

export type endpoint = {
    method: METHOD,
    url: string
}

export const baseURL = process.env.NODE_ENV === "production" ? "https://random-datagenerator.herokuapp.com" : "http://localhost:5000"