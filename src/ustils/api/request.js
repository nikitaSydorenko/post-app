import axios from "axios";


export const request = (url, options) => fetch(url, options)
    .then(response => {
        if(!response.ok) {
            throw new Error(response.statusText)
        }
        return response;
    })
    .then(response => response.json())

