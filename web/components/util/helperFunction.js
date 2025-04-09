class Util {

    static trimText(text ,  length){
        return text?.length > length? text?.substring(0, length) + "..." : text;
      }
    
}


export default Util;