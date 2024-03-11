import React from "react";

function ColorComponent() {
  return (
    <div className=" flex gap-4 pt-4 ">
      <div className=" flex gap-1 ">
        <input
          type="checkbox"
          id="check"
          className=" accent-white w-4 h-5 top-0 left-0  "
        />
        <label>Pink</label>
      </div>
      {/*  */}
      <div className=" flex gap-1 ">
        <input
          type="checkbox"
          id="check"
          className=" accent-white w-4 h-5 top-0 left-0  "
        />
        <label>Purple</label>
      </div>
      {/*  */}
      <div className=" flex gap-1 ">
        <input
          type="checkbox"
          id="check"
          className=" accent-white w-4 h-5 top-0 left-0  "
        />
        <label>Yellow</label>
      </div>
    </div>
  );
}

export default ColorComponent;
