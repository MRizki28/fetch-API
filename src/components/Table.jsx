import React from "react";

const Table = ({ data }) => {
    return (
        <div className="container mx-auto">
            <table className="min-w-full border border-collapse border-gray-800 mt-3">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border">No</th>
                        <th className="py-2 px-4 border">Name</th>
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
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
