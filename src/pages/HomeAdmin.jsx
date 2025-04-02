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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    //{ ...formData } creates a copy of the existing formData object to preserve the other fields.

    return (
        <div className ="text-center">
            <Layout pageTitle=" - Admin Section " />

            {loading && <p className ="text-center"> Loading ...</p>}
            {error && <p className="text-center text-red-500"> {error}</p>}

            <h2 className ="my-8 font-bold ">Create User Here</h2>
            <form>
                <input type="text" name="name" placeholder="Name" onChange={handleInputChange} value={formData.name} className ="border border-gray-500 mx-4 rounded-md" required />
                <input type="text" name="lastname" placeholder="LastName" onChange={handleInputChange} value={formData.lastname} className ="border border-gray-500 mx-4 rounded-md" required  />
                <input type="text" name="position" placeholder="Position" onChange={handleInputChange} value={formData.position} className ="border border-gray-500 mx-4 rounded-md" required  />
                <button onClick={handleCreate} disabled={create} className="px-4 py-2 mx-4 bg-teal-500 text-white rounded-md hover:bg-teal-700 cursor-pointer transition">
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
                        <button onClick={() => {handleDelete(member.id)}} disabled={deleting} className="px-4 py-2 mx-4 my-2 bg-red-500 text-white rounded-md hover:bg-red-700 cursor-pointer transition">
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