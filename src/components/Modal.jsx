import React from "react";

const Modal = ({handleChange, handleSubmit}) => {
    const handleCloseModal = () => {
        document.getElementById("formTambah").reset();
        document.getElementById("my_modal_1").close();
    }

    return (
        <>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Tambah Data</h3>
                    <div className="border"></div>
                    <form onSubmit={handleSubmit}  method="dialog" id="formTambah">
                        <div className="mb-3 mt-4">
                            <label htmlFor="name" className="block mb-3">Nama </label>
                            <input type="text" placeholder="Type here" onChange={handleChange} name="name" className="input input-bordered input-md w-full " />
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

export default Modal;