
const InputForm = (props) => {
    const {label, placeholder, type, name} = props;
    return (
        <div className="flex flex-col justify-center mb-7">
            <label className="text-white font-semibold" htmlFor="">{label}</label>
            <input name={name} className="bg-transparent border-2 px-4 border-white h-[60px] max-w-[330px] placeholder:text-white placeholder:font-semibold" placeholder={placeholder} type={type} />
        </div>
    );
};

export default InputForm;
