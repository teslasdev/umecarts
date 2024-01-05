const CheckBox = ({ name }) => {
  return (
    <div className="cont-check flex items-center gap-5 my-2">
      <input type="checkbox" />
      <label htmlFor="">{name}</label>
    </div>
  );
};

export default CheckBox;
