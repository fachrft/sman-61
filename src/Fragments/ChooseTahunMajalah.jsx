import '../css/style.css';

const ChooseTahunMajalah = (props) => {
    const { tahun, foto, bgColor } = props;
    return (
        <div className="">
            <div className="overflow-hidden">
                <div className="w-[56px] py-1 text-center rounded-t-lg" style={{ backgroundColor: bgColor }}>
                    <h1 className="font-semibold badan-pengurus">{tahun}</h1>
                </div>
                <div className="w-[111px] h-[142px] flex justify-center py-3" style={{ backgroundColor: bgColor }}>
                    <img className="w-[78px] h-[111px]" src={foto} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ChooseTahunMajalah;
