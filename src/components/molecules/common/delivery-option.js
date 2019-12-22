import React from "react";

import Icon from "../../atoms/icon";
import Text from "../../atoms/text";
import Link from "../../atoms/link";

const DeliveryOption = ({ icon, text, subtext, link }) => (
  <div>
    {icon && <Icon />}
    <div>
      {text && <Text />}
      {subtext && <Text isSubtext />}
    </div>
    {link && <Link />}
  </div>
);

export default DeliveryOption;
