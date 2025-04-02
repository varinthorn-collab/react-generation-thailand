import React from "react";
import Layout from "../components/Layout";
import {useEffect, useState } from "react"
import { getMembers,createMembers,deleteMembers } from "../apiData/MembersApi";

const HomeAdmin = () => {
    const [members, setMembers] = useState([]);
    const [formData, setFormData] = useState({ name: "", lastname: "", position: "" });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [create, setCreate] = useState(false);
    const [deleting, setDeleting] = useState(false);
    // const [deletingId, setDeletingId] = useState(null);
    
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
            setFormData({ name: "", lastname: "", position: "" }); // reset form
        } catch (error) {
            setError("failed to create data")
            console.error(error);
        } finally {
            setCreate(false);
        }
    }

    const handleDelete = async (id) => {
        setDeleting(true)
        try {
            await deleteMembers(id)
            fetchMembers() //refresh table
            // setMembers(members.filter(member => member.id !== id))
        } catch (error) {
            setError("failed to delete data")
            console.error(error);
        } finally {
            setDeleting(false);
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className ="text-center">
            <Layout pageTitle=" - Admin Section " />

            {loading && <p className ="text-center"> Loading ...</p>}
            {error && <p className="text-center text-red-500"> {error}</p>}

            <h2 className ="my-8">Create User Here</h2>
            <form >
                <input type="text" name="name" placeholder="Name" onChange={handleInputChange} value={formData.name} required />
                <input type="text" name="lastname" placeholder="LastName" onChange={handleInputChange} value={formData.lastname} required  />
                <input type="text" name="position" placeholder="Position" onChange={handleInputChange} value={formData.position} required  />
                <button onClick={handleCreate} disabled={create}>
                Save
                </button>
            </form>


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
                        <button onClick={() => {handleDelete(member.id)}} disabled={deleting}>
                            Delete
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