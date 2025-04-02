import React from "react";
import Layout from "../components/Layout";
import {useEffect, useState } from "react"
import { getMembers,createMembers,deleteMembers } from "../apiData/MembersApi";

const HomeAdmin = () => {
    const [members, setMembers] = useState([]);
    const [formData, setFormData] = useState({ name: "", lastName: "", position: "" });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [create, setCreate] = useState(false);
    const [deleting, setDeleting] = useState(false);
    
    useEffect(() => {
        fetchMembers();
    },[])

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

    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            await createMembers(formData)
            fetchMembers() //refresh table
            setFormData({ name: "", lastName: "", position: "" }); // reset form
        } catch (error) {
            setError("failed to create data")
            console.error(error);
        } finally {
            setCreate(false);
        }
    }

    const handleDelete = async (id) => {
        try {
            await deleteMembers(id)
            fetchMembers() //refresh table
        } catch (error) {
            setError("failed to delete data")
            console.error(error);
        } finally {
            setDeleting(false);
        }
    }

    return (
        <div>
            <Layout pageTitle=" - Admin Section " />

            {loading && <p className ="text-center"> Loading ...</p>}
            {error && <p className="text-center text-red-500"> {error}</p>}

            <h2>Create User Here</h2>
            <form onSubmit={handleCreate}>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleCreate} required />
                <input type="text" name="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleCreate} required />
                <input type="text" name="position" placeholder="Position" value={formData.position} onChange={handleCreate} required />
                <button type="submit" disabled={create}>
                {create ? "Creating..." : "Add Employee"}
                </button>
            </form>

            <h2>User List</h2>
            <table border="5" className ="my-8 mx-auto text-center border-gray-500">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member) => (
                    <tr key={member.id}>
                        <td>{member.name}</td>
                        <td>{member.lastname}</td>
                        <td>{member.position}</td>
                        <td>
                        <button onClick={() => handleDelete(member.id)} disabled={deleting}>
                            {deleting ? "Deleting..." : "Delete"}
                        </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    

    );
};

export default HomeAdmin;