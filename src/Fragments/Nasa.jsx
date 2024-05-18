const Nasa = (props) => {
    const { image, title } = props;
    return (
        <div className="flex flex-col justify-center items-center gap-8">
            <div>
                <img className="w-[300px]" src={image} alt="" />
            </div>
            <div>
                <img className="w-[300px]" src={title} alt="" />
            </div>
        </div>
    );
};

export default Nasa;
