import axios from 'axios';
import { baseURL, endpoint, METHOD } from "./endpoint";

export const randomDataEndpoint: endpoint = {
    method: METHOD.POST,
    url: baseURL
}

const randomDataAPI = async (input: { numDocuments: number, schema: { [key: string]: string }[] }) => {
    try {
        console.log(input)
        const res = await axios[randomDataEndpoint.method]<{
            message: string, data: {}[]
        }>(randomDataEndpoint.url, input)
        return res.data
    } catch (err) {
        throw err
    }
}

export default randomDataAPI