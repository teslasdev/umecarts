const CouponForm = () => {
  return (
    <>
      <div className="close-head">
        <div className="det-head">Add Bank Account</div>
      </div>{" "}
      <form action="">
        <div className="inp-lab-con">
          <label htmlFor="">Coupon Type</label>
          <select name="bankname" id="bankname" className="details-inp">
            <option value="select" selected disabled>
              Select coupon type...
            </option>
            <option value="fbn">goodady</option>
            <option value="wema">PRODUCT</option>
            <option value="zen">Nike</option>
          </select>
        </div>
        <div className="inp-lab-con">
          <label htmlFor="">Coupon Code</label>
          <input
            type="text"
            className="details-inp"
            placeholder="Type coupon code..."
          />
        </div>
        <div className="inp-lab-con">
          <label htmlFor="">Product</label>
          <select name="bankname" id="bankname" className="details-inp">
            <option value="select" selected disabled>
              Select a product...
            </option>
            <option value="fbn">goodady</option>
            <option value="wema">PRODUCT</option>
            <option value="zen">Nike</option>
          </select>
        </div>
        <div className="inp-lab-con">
          <label htmlFor="">Date of Validity</label>
          <input
            type="text"
            className="details-inp"
            placeholder="Select validity range "
          />
        </div>
        <div className="inp-lab-con">
          <label htmlFor="">Discount Type</label>
          <select name="bankname" id="bankname" className="details-inp">
            <option value="select" selected disabled>
              Select discount type...
            </option>
            <option value="fbn">goodady</option>
            <option value="wema">PRODUCT</option>
            <option value="zen">Nike</option>
          </select>
        </div>
        <div className="inp-lab-con">
          <label htmlFor="">Discount</label>
          <input
            type="text"
            className="details-inp"
            placeholder="Enter discount"
          />
        </div>
        <div className="btn-new lefd">
          <button className="dash-btn">Request support</button>
        </div>
      </form>
    </>
  );
};

export default CouponForm;
