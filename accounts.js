class accounts {
     validateAccounts (data, callback){
        let sortedObject = {"vipList" :[], "normalList" :[]};
        let oneList = [];
        data.forEach(key => {
            let id = key["id"];
            let name = key["name"];
            let number= key["telefon"];
            let pushObj = {
                "id"    : id,
                "name"  : name,                    
                "telefon": number
            }
                
            if(number.charAt(0)=== "+" || number.charAt(0)+number.charAt(1) == "00"){ //Check Vorwahl
                let trimedNumber = number.slice(7); //Vorwahl ist abgetrennt +49 xxxx = 7 Stellen
               //VIP CHECK
                if(checkNumbers(trimedNumber) === true){
                //console.log("VIP - Nummer: "+number);
                pushObj["IsVIP-Flag"] = true;
                sortedObject.vipList.push(pushObj);
                oneList.push(pushObj);
               }
               else{
               // console.log("Normale - Nummer: "+number);
               pushObj["IsVIP-Flag"] = false;
                sortedObject.normalList.push(pushObj);
                oneList.push(pushObj);      
                }
            }else if(number.charAt(0) === "0" && number.charAt(1)!== "0"){ //check no vorwahl
                let trimedNumber = number.slice(5); //Vorwahl ist abgetrennt 0xxxx = 5 Stellen
                if(checkNumbers(trimedNumber) === true){
                   //console.log("VIP - Nummer: "+number);
                   pushObj["IsVIP-Flag"] = true;
                   sortedObject.vipList.push(pushObj);
                   oneList.push(pushObj);
                }
                else{
                //console.log("Normale - Nummer: "+number);
                    pushObj["IsVIP-Flag"] = false;
                    sortedObject.normalList.push(pushObj);
                    oneList.push(pushObj);
                    
                }
            }
        })
        console.log(">>-Sortierte List-<<")
        console.log(sortedObject);
        console.log(">>-Sortierte List-<<")
        console.log(">>-Eine Liste-<<");
        console.log(oneList);
        console.log(">>-Eine Liste-<<");
        
        callback(sortedObject);
    }
}
    
    

function checkNumbers (trimedNumber){ //check if VIP or no VIP
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
            
            return true;
      
        }

    }
            
}
