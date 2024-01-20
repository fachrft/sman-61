const FormSelectFile = () => {
    return (
        <div>
            <label className="text-white font-semibold" htmlFor="">Select a file :</label>
            <input className="file:bg-transparent file:text-white file:border-white file:border-2"  type="file" name="foto" id="" />
        </div>
    );
};

export default FormSelectFile;
