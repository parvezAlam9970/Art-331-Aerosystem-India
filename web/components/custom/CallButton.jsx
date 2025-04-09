import Link from 'next/link';
import React from 'react';
import { LuPhoneCall } from 'react-icons/lu';

const CallButton = () => {
  return (
    <Link href="tel:+919999163692">
      <div className="call_btn">
        <LuPhoneCall color="#0C4DA2" size={25} />
      </div>
    </Link>
  );
};

export default CallButton;
