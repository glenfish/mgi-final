function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function reformatedPhone(phone) {
        try {return phone.slice(0,3) + '-' + phone.slice(3,6) + '-' + phone.slice(6,10); } catch { } 
    }

function getParams() {
    var firstname, phone;
    const queryString = window.location.search;
    // console.log(queryString);
    if (!queryString) {
         window.location.href = "https://MyGoldIRA.us/"
    }
    const urlParams = new URLSearchParams(queryString);
    try {firstname = urlParams.get('firstname');} catch {}
    try {phone = urlParams.get('phone');} catch {}
    if (!firstname) { firstname = "Hey";}
    if (!phone) { phone = "the number you gave";} else {phone = reformatedPhone(phone);}

    document.getElementById('clientFirstname').innerHTML = capitalizeFirstLetter(firstname) + ', ';
    document.getElementById('clientFirstname2').innerHTML = capitalizeFirstLetter(firstname) + ', ';
    document.getElementById('clientPhone').innerHTML = phone;   
}