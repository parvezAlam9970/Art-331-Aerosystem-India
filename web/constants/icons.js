import { HiPlus } from "react-icons/hi";
import { FiMinus } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { LuPhoneCall } from "react-icons/lu";
import { FaUsers } from "react-icons/fa6";
import { IoMdArrowForward } from "react-icons/io";
import { MdArrowBack } from "react-icons/md";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineAirplanemodeActive } from "react-icons/md";
import { FiCheckCircle } from "react-icons/fi";
import { FaRegFilePdf } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { LuMapPin } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import { IoImagesOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { MdMap } from "react-icons/md";
import { IoMdPin } from "react-icons/io";

















export const Icons = {
    PLUS: (props) => <HiPlus {...props} />,
    MINUS: (props) => <FiMinus {...props} />,
    SEARCH: (props) => <FiSearch {...props} />,
    CALL_OUTLINE: (props) => <LuPhoneCall {...props} />,
    USERS: (props) => <FaUsers {...props} />,
    ARROW_RIGHT: (props) => <IoMdArrowForward {...props} />,
    ARROW_LEFT: (props) => <MdArrowBack {...props} />,
    ARROW_DOWN: (props) => <MdOutlineKeyboardArrowDown {...props} />,
    ARROW_UP: (props) => <MdOutlineKeyboardArrowUp {...props} />,
    PLANE: (props) => <MdOutlineAirplanemodeActive {...props} />,
    CIRCLE_CHECK: (props) => <FiCheckCircle {...props} />,
    PDF: (props) => <FaRegFilePdf {...props} />,
    DOWNLOAD: (props) => <MdDownload {...props} />,
    DOWNLOAD_2: (props) => <FiDownload {...props} />,
    FACEBOOK: (props) => <FaFacebookF {...props} />,
    LINKEDIN: (props) => <FaLinkedinIn {...props} />,
    INSTAGRAM: (props) => <FaInstagram {...props} />,
    YOUTUBE: (props) => <AiOutlineYoutube {...props} />,
    LOCATION_PIN: (props) => <LuMapPin {...props} />,
    CALL: (props) => <FiPhoneCall {...props} />,
    EMAIL: (props) => <MdOutlineEmail {...props} />,
    TIME: (props) => <IoTimeOutline {...props} />,
    RIGHT_CUVE_ARROW: (props) => <MdOutlineKeyboardArrowRight {...props} />,
    IMG_OUTLINE: (props) => <IoImagesOutline {...props} />,
    CLOSE: (props) => <IoClose {...props} />,
    MAP: (props) => <MdMap {...props} />,
    FILLED_MAP:(props) => <IoMdPin {...props} />,
    

} 