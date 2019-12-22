import React from "react";

import DeliveryAddress from "./delivery-address";
import DeliveryNotification from "./delivery-notification";

const DeliveryFooter = () => (
  <div id="delivery-footer">
    <DeliveryAddress />
    <DeliveryNotification />
  </div>
);

export default DeliveryFooter;
