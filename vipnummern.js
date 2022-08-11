window.Accounts = new accounts();
let standardObject = [];
const accountlist= [
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
window.onload = function(){
    getVips(accountlist);
};

function getVips(sendList){
    console.log("getVIPS()");
    window.Accounts.validateAccounts(sendList, function(data){
        console.log("callbackACCOUNTS()");
        setNumbersOnHtml(data);

    })
}
function setNumbersOnHtml(Object){ //add VIP or no VIP to the List of them
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
  
}
