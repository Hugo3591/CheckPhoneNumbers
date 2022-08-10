const data= [
    {id:"1", name: "Peter Meister", telefon:"+492103777123" },
    {id:"3", name: "Gustavo Mckay", telefon:"004915845554441" },
    {id:"10",name: "Megan Nash", telefon:"014789911543" },  
    {id:"17",name: "Ingrid Nicholson", telefon:"+420507986521" },
    {id:"23",name: "Brynlee Summers", telefon:"067841887614" },
    {id:"9", name: "Gunnar Montgomery", telefon:"+496874519741" },
    {id:"2", name: "Amy Estrada", telefon:"005512547773195" },
    {id:"9", name: "Chace West", telefon:"+491798567105" },
    {id:"3", name: "Skyler Valenzuela", telefon:"00499164223412" },
    {id:"11",name: "Donald Bowers", telefon: "012358001040"},
    {id:"12",name: "Madeleine Salas", telefon: "+4915512020443"},
    {id:"24",name: "Joe Carpenter", telefon:"+326564789987432" },
    {id:"28",name: "Aiden Waters", telefon:"0578914785293" }
];
let sortedObject = {"vipList" :[], "normalList" :[]};
let standardObject = [];
function getVips(){
    data.forEach(key => {
        let id = key["id"];
        let name = key["name"];
        let number= key["telefon"];
        pushObj = {
            "id"    : id,
            "name"  : name,
            "telefon": number
        }
        
        if(number.charAt(0)=== "+" || number.charAt(0)+number.charAt(1) == "00"){
            let trimedNumber = number.slice(7); //Vorwahl ist abgetrennt +49 xxxx = 7 Stellen
           //VIP CHECK
           if(checkNumbers(trimedNumber) === true){
            //console.log("VIP - Nummer: "+number);
            pushObj["IsVIP-Flage"] = true;
            sortedObject.vipList.push(pushObj);
           }
           else{
           // console.log("Normale - Nummer: "+number);
           pushObj["IsVIP-Flage"] = false;
            sortedObject.normalList.push(pushObj);
            
        }
        
           
        }else if(number.charAt(0) === "0" && number.charAt(1)!== "0"){
            let trimedNumber = number.slice(5); //Vorwahl ist abgetrennt 0xxxx = 5 Stellen
            if(checkNumbers(trimedNumber) === true){
               //console.log("VIP - Nummer: "+number);
               pushObj["IsVIP-Flage"] = true;
               sortedObject.vipList.push(pushObj);

               
           }
           else{
            //console.log("Normale - Nummer: "+number);
            pushObj["IsVIP-Flage"] = false;
            sortedObject.normalList.push(pushObj);
            
            }
        }
        

    })
    console.log(sortedObject)
    setNumbersOnHtml(sortedObject);
}
function setNumbersOnHtml(Object){
    Object.vipList.forEach(key=>{
        let id = key["id"];
        let name = key["name"];
        let number= key["telefon"];
        vipList.innerHTML += `<li>ID:${id} - Name: ${name} - Phone: ${number}</li>`;
    })
    Object.normalList.forEach(key=>{
        let id = key["id"];
        let name = key["name"];
        let number= key["telefon"];
        standardList.innerHTML += `<li>ID:${id} - Name: ${name} - Phone: ${number}</li>`;
    })
   /* Object.vipList.forEach(key=>{
        console.log(key);
    })
    
    */
}
function checkNumbers (trimedNumber){
    for(let i = 0; i < trimedNumber.length; i++){
       let checkValueOne = parseInt(trimedNumber.charAt(i));
       let checkValueTwo = parseInt(trimedNumber.charAt(i+1));
       let checkValueThree = parseInt(trimedNumber.charAt(i+2));
       let checkValueFour = parseInt(trimedNumber.charAt(i+3));
        if(checkValueOne===checkValueTwo && checkValueTwo===checkValueThree){
            return true;
        }else if(checkValueOne===checkValueTwo&&checkValueThree===checkValueFour){
            return true;
        }else if(checkValueOne+1 === checkValueTwo && checkValueTwo === checkValueThree-1) {
            //console.log(checkValueOne +""+checkValueTwo+""+checkValueThree );
            //console.log(trimedNumber);
            return true;
      
        }

    }
            
}