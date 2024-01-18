import axios from "axios";
import React, { useState } from "react";
import ModalEdit from "./ModalEdit";

const Table = ({ data , fetchData }) => {

    const [mahasiswaData, setMahasiswaData] = useState({
        name: "" 
    });

    const handleEdit = async (id) => {
        try {
            const response = await axios.get('http://localhost:3000/api/v1/mahasiswa/get/' + id);
            setMahasiswaData(response.data.data);
            document.getElementById('my_modal_2').showModal();
            console.log(response.data.data); 
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        setMahasiswaData({
            ...mahasiswaData,
            [e.target.name]: e.target.value
        });
    };

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete('http://localhost:3000/api/v1/mahasiswa/delete/' + id);
            console.log(response);
            fetchData();
        } catch (error) {
            console.log(error);
        };
    }

    return (
        <div className="container mx-auto">
            <table className="min-w-full border border-collapse border-gray-800 mt-3">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border">No</th>
                        <th className="py-2 px-4 border">Name</th>
                        <th className="py-2 px-4 border">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {!data || data.length === 0 ? (
                        <tr>
                            <td colSpan="2" className="text-center py-2 px-4 border">
                                Data not found
                            </td>
                        </tr>
                    ) : (
                        data.map((item, index) => (
                            <tr key={index} className="text-center">
                                <td className="py-2 px-4 border">{index + 1}</td>
                                <td className="py-2 px-4 border">{item.name}</td>
                                <td className="py-2 px-4 border space-x-2">
                                    <a onClick={() => handleEdit(item.id)} className="btn btn-primary">Edit</a>
                                    <a onClick={() => handleDelete(item.id)} className="btn btn-error">Delete</a>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

            <ModalEdit
                handleChange={handleChange}
                mahasiswaData={mahasiswaData}>
            </ModalEdit>
        </div>
    );
};

export default Table;
