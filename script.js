function spEng(sentence) {
  let str = sentence.toLowerCase();
  console.log(str);
   
  let res = (str) => (str.includes("english") ? true : false);
 let res2 = sentence.toLowerCase().includes("english");
  console.log(sentence.toLowerCase().includes("english"));
  console.log(res2);
}
 spEng("tteglisHt");