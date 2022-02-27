import axios from 'axios'


const invokeApi = async ({ method, path, data = {}, headers = {} }) => {

    const baseURL = "https://jsonplaceholder.typicode.com"

    try {
        const requestObject = {
            method: method,
            baseURL: baseURL,
            url: path,
            timeout: 30000,
            headers: {
                "Content-Type": "application/json",
                ...headers
            },
            data: data
        };
        console.log("requestObject: ", requestObject)
        const result = await axios(requestObject)
        return result

    } catch (error) {
        console.log("invoke error: ", error);
        throw new Error("There was some problem")
    }

};

export default invokeApi
