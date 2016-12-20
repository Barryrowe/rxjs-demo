
const headerBar = "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~";
let printHeader = (title) => {
  let tempHeaderBar = headerBar;
  let pad = 0;
  if(headerBar.length > title.length){
    pad = (headerBar.length-title.length)/2;
  }else{
    tempHeaderBar += headerBar;
    pad = (tempHeaderBar.length - title.length)/2;
  }
  let padded = "";
  for(var i=0;i<pad;i++){ padded+= " ";}

  console.log(tempHeaderBar);  
  console.log(padded.concat(title, padded));
  console.log(tempHeaderBar);
};

module.exports = {printHeader};