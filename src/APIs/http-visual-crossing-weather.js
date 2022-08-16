import axios from "axios";

export default axios.create({
    baseURL: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline",
    headers: {
        "Content-type": "application/json"
    }

})