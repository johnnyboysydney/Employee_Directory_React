import axios from "axios";

export default {
    getUsers: () => {
        return axios.get("https://randomuser.me/api/?results=50&nat=us");
    }
};