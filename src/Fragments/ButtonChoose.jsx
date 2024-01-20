const ButtonChoose = (props) => {
    const {isi} = props
    return (
        <div className="w-[150px] py-3 flex justify-center items-center rounded-lg bg-[#AB8BB6]">
            <h1 className="text-white font-semibold text-xl">{isi}</h1>
        </div>
    );
};

export default ButtonChoose;
