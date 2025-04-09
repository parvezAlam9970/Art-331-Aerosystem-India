import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

const WhatsAppButton = () => {
  return (
    <Link href="https://wa.me/919999163692" target="_blank">
      <div className="whatsUp_btn">
        <FaWhatsapp color="#0C4DA2" size={30} />
      </div>
    </Link>
  );
};

export default WhatsAppButton;
