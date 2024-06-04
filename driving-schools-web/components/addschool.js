import React, { useState } from 'react';
import baseurl from '../config';
import { useSession } from 'next-auth/react';

const AddSchool = () => {
    const { data: session } = useSession();

    const [formData, setFormData] = useState({
        name : ' ',
        address: '',
        city: '',
        zipcode: '',
        state: '',
        contactNumber: '',
        website: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${baseurl}adddrivingschool`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: session.user.email,
                    name: session.user.name,
                    drivingSchoolData: {
                        name : formData.name,
                        address: formData.address,
                        city: formData.city,
                        zipcode: formData.zipcode,
                        state: formData.state,
                        contactNumber: formData.contactNumber,
                        website: formData.website
                    }
                })
            });
            const result = await response.json();
            if (response.ok) {
                alert('Driving school added successfully');
            } else {
                alert(`Error: ${result.message}`);
            }
        } catch (error) {
            console.error('Error submitting form', error);
            alert('Error submitting form');
        }
    };

    return (
        <div className="container mx-auto p-4 max-w-md">
            <h1 className="text-2xl mb-4">Add Driving School</h1>
            <form onSubmit={handleSubmit}>
            <label className="block mb-2">
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="block w-full rounded border border-gray-300 py-2 px-3 mt-1" />
                </label>

                <label className="block mb-2">
                    Address:
                    <input type="text" name="address" value={formData.address} onChange={handleChange} required className="block w-full rounded border border-gray-300 py-2 px-3 mt-1" />
                </label>
                <label className="block mb-2">
                    City:
                    <input type="text" name="city" value={formData.city} onChange={handleChange} required className="block w-full rounded border border-gray-300 py-2 px-3 mt-1" />
                </label>
                <label className="block mb-2">
                    Zipcode:
                    <input type="text" name="zipcode" value={formData.zipcode} onChange={handleChange} required className="block w-full rounded border border-gray-300 py-2 px-3 mt-1" />
                </label>
                <label className="block mb-2">
                    State:
                    <input type="text" name="state" value={formData.state} onChange={handleChange} required className="block w-full rounded border border-gray-300 py-2 px-3 mt-1" />
                </label>
                <label className="block mb-2">
                    Contact Number:
                    <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} className="block w-full rounded border border-gray-300 py-2 px-3 mt-1" />
                </label>
                <label className="block mb-2">
                    Website:
                    <input type="text" name="website" value={formData.website} onChange={handleChange} className="block w-full rounded border border-gray-300 py-2 px-3 mt-1" />
                </label>
                <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2 mt-4 hover:bg-blue-600">Add Driving School</button>
            </form>
        </div>
    );
};

export default AddSchool;
