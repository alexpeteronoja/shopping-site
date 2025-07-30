function Signup() {
  return (
    <div>
      <div>
        <form action="" className="signup-form">
          <div className="grid sm:grid-cols-2 sm:gap-x-5">
            <div className="mb-5.5">
              <label htmlFor="">First Name</label>
              <input type="text" />
            </div>

            <div className="mb-5.5">
              <label htmlFor="">Last Name</label>
              <input type="text" />
            </div>
          </div>

          <div className="mb-5.5">
            <label htmlFor="">Company name</label>
            <input type="text" name="" id="" />
          </div>

          <div className="mb-5.5">
            <label htmlFor="">Country / Region *</label>
            <select name="" id="">
              <option value="Nigeria">Nigeria</option>
            </select>
          </div>

          <div className="mb-5.5">
            <label htmlFor="">Street Address</label>
            <input type="text" name="" id="" />
          </div>

          <div className="mb-5.5">
            <label htmlFor="">Town/City *</label>
            <input type="text" name="" id="" />
          </div>

          <div className="mb-5.5">
            <label htmlFor="">State *</label>
            <input type="text" name="" id="" />
          </div>

          <div className="mb-5.5">
            <label htmlFor="">Zip Code</label>
            <input type="text" name="" id="" />
          </div>

          <div className="mb-5.5 grid sm:grid-cols-2 sm:gap-x-5">
            <div className="mb-5.5">
              <label htmlFor="">Phone</label>
              <input type="text" name="" id="" />
            </div>

            <div className="mb-5.5">
              <label htmlFor="">Email Address *</label>
              <input type="text" name="" id="" />
            </div>
          </div>

          <div></div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
