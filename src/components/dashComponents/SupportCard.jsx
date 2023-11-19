import shoe from "../../assets/products/product4.png";

const SupportCard = ({ progress, progressName }) => {
  return (
    <div className="order-card-container ">
      <div className="img-pri-name-box alid">
        <div className="index-text">1.</div>
        <div className="img-pri-name-container chsd">
          <div className="name-pric-box chwid">
            <div className="order-name">I need support</div>
            <div className="siz-gen-text">
              Lorem ipsum dolor sit amet consectetur. Sodales adipiscing risus
              diam diam id tincidunt. Commodo pellentesque amet sed....
            </div>
          </div>
          <img src={shoe} alt="" />
        </div>
      </div>
      <div id="supp" className={progress}>
        {progressName}
      </div>
    </div>
  );
};

export default SupportCard;
