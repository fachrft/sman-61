const ButtonTahun = ({ tahun, onClick, isSelected }) => {
    const handleClick = () => {
        onClick(tahun);
    };

    return (
        <div
            className={`border-2 px-3 py-1 border-button-file cursor-pointer ${isSelected ? "selected" : ""}`}
            onClick={handleClick}
            style={{ backgroundColor: isSelected ? "#D64D69" : "" }} // Tambahkan styling untuk background
        >
            <h1 className={`text-white ${isSelected ? "selected-text" : ""}`}>{tahun}</h1>
        </div>
    );
};

export default ButtonTahun;
