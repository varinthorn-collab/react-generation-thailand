
import axios from "axios";

export const getMembers = async () => {
    try {
        const res =await  axios.get(
            "https://jsd5-mock-backend.onrender.com/members"
        );
        return res.data;
    }
    catch (error) {
        console.error("Failed to fetch data", error);
    }
}

export const createMembers = async (members) => {
    try {
        const res =await  axios.post(
            "https://jsd5-mock-backend.onrender.com/members", members);
        return res.data;
    }
    catch (error) {
        console.error("Failed to create data", error);
    }
}

export const deleteMembers = async (id) => {
    try {
        const res =await  axios.post(
            `https://jsd5-mock-backend.onrender.com/members/${id}`);
        return res.data;
    }
    catch (error) {
        console.error("Failed to delete data", error);
    }
}