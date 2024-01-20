import panah from '../assets/Panah.png';

const Button = (props) => {
  const { isi, backgroundColor, onClick = () => {}} = props;

  const buttonStyle = {
    backgroundColor: backgroundColor || 'transparent', // Menggunakan warna default jika tidak ada warna yang diberikan
  };

  return (
    <div className="mx-5">
      <div style={buttonStyle} onClick={onClick} className="px-[20px] gap-3 py-[5px] rounded-2xl h-10 flex justify-between items-center">
        <h1 className="font-semibold text-white">{isi}</h1>
        <img src={panah} alt="" />
      </div>
    </div>
  );
};

export default Button;
