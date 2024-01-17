import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import axios from "axios";
import Modal from "../components/Modal";

const Home = () => {
    const [mahasiswaData, setMahasiswaData] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
    });

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/v1/mahasiswa");
            setMahasiswaData(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
        const intervalId = setInterval(fetchData, 5000);
        return () => clearInterval(intervalId);
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/api/v1/mahasiswa/create" , formData);
            document.getElementById("formTambah").reset();

            // Tutup modal dan ambil data terkini
            document.getElementById("my_modal_1").close();
            fetchData();
        } catch (error) {
            console.log(error)
        };
    };



    return (
        <>
            <div className="container mx-auto">
                <button className="btn btn-primary mt-2 flex ml-auto" onClick={() => document.getElementById('my_modal_1').showModal()}>Tambah Data</button>
                <Table data={mahasiswaData} />
                <Modal handleChange={handleChange} handleSubmit={handleSubmit} />
            </div>
        </>
    );


};

export default Home;
