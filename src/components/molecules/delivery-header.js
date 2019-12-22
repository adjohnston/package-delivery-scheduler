import React from "react";

import DeliveryInformation from "./delivery-information";
import DeliveryRescheduler from "./delivery-rescheduler";
import DeliveryNotes from "./delivery-notes";

const DeliveryHeader = () => (
  <div id="delivery-header">
    <DeliveryInformation />
    <DeliveryRescheduler />
    <DeliveryNotes />
  </div>
);

export default DeliveryHeader;
