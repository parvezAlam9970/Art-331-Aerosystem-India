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

} 