import React from "react";

const ModalEdit = ({handleChange, handleSubmit, mahasiswaData}) => {
    const handleCloseModal = () => {
        document.getElementById("my_modal_2").close();
    }

    return (
        <>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Edit Data</h3>
                    <div className="border"></div>
                    <form onSubmit={handleSubmit}  method="dialog" id="formTambah">
                        <div className="mb-3 mt-4">
                            <label htmlFor="name" className="block mb-3">Nama </label>
                            <input type="text" placeholder="Type here" onChange={handleChange} name="name" className="input input-bordered input-md w-full " value={mahasiswaData.name} />
                        </div>
                        <div className="flex justify-end space-x-4">
                            <button className="btn" type="button" onClick={handleCloseModal}>Close</button>
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    )
}

export default ModalEdit;