import React from "react";

const Text = ({ isSubtext }) => (
  <div className={isSubtext ? "normal" : "subText"}>TEXT</div>
);

export default Text;
