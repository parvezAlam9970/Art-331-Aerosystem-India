import { HiPlus } from "react-icons/hi";
import { FiMinus } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { LuPhoneCall } from "react-icons/lu";
import { FaUsers } from "react-icons/fa6";
import { IoMdArrowForward } from "react-icons/io";







export const Icons = {
    PLUS: (props) => <HiPlus {...props} />,
    MINUS: (props) => <FiMinus {...props} />,
    SEARCH: (props) => <FiSearch {...props} />,
    CALL_OUTLINE: (props) => <LuPhoneCall {...props} />,
    USERS: (props) => <FaUsers {...props} />,
    ARROW_LEFT: (props) => <IoMdArrowForward {...props} />,

} 