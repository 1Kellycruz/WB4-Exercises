const myInfo = {
    name: "Kelly Cruz",
    address: "6607 Horseshoe Bend",
    city: "Orlando",
    state: "Florida",
    zip: "32822"
    
};

function printContact(myInfo) {
    console.log(myInfo.name);
    console.log(myInfo.address);
    console.log(`${ myInfo.city }, ${ myInfo.state }, ${ myInfo.zip }`);
}

printContact(myInfo);
