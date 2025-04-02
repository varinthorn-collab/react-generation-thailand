import React from "react";
import Layout from "../components/Layout";
import {useEffect, useState } from "react"
import { getMembers } from "../apiData/MembersApi";

const HomeUser = () => {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const membersData = await getMembers()
                setMembers(membersData);
            } catch (error) {
                setError("failed to fetch data")
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchMembers();
    },[])


    return (
        <div>
            <Layout pageTitle= " - User Section " />

            {loading && <p className ="text-center"> Loading ...</p>}
            {error && <p className="text-center text-red-500"> {error}</p>}

            <table border="5" className ="my-8 mx-auto text-center border-gray-500">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member) => (
                    <tr key={member.id}>
                        <td>{member.name}</td>
                        <td>{member.lastname}</td>
                        <td>{member.position}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default HomeUser;