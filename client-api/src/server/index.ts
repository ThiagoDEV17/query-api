import axios from "axios";

global.exports("query", async (query: string, params: Array<any>, resource: string) => {
    const options = {
        method: "POST",
        url: "http://localhost:3000/query",
        headers: {
            "Content-Type": "application/json",
        },
        data: {
            query,
            params,
            resource
        }
    };

    return (await axios(options)).data;
});