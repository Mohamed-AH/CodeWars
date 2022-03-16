function solution(str){
    let tempstr="";
    for(i=str.length-1;i>=0;i--)
      {
  tempstr += str[i];      
      }
    return tempstr;
    }