function stringLength(str){
  const nstr=str.replace(/\s/g, '').length;
  if(nstr >= 1 && nstr <= 10){
    return nstr;
  }else{
    console.error();
  };
}

module.exports = stringLength;