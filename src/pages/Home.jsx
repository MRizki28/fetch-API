import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import axios from "axios";

const Home = () => {
    const [mahasiswaData, setMahasiswaData] = useState([]);

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

    return <Table data={mahasiswaData} />;
};

export default Home;
