async function SendJSONRegistration(){
    
    formElem = getFormRegis();
	delete formElem.confirm_password;
    formElem = JSON.stringify(formElem);
	
    let response = await fetch('http://localhost:8383/index.html', {
        method: 'POST',
        body: formElem
    });

    if (response.ok){
		return true;
	} else return false;
    
}

async function SendJSONLogin(){
    let formElem = document.getElementById("form_login");

    let url = "http://localhost:8383/index.html"
	let response = await fetch(url, {
	    method: 'GET'
	});

    if (response.ok) { 
      let json = await response.json();
      alert(json)
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
}

function getFormRegis(){
	let form = document.getElementById("form_regist");
	var data = {
		login: form.elements.type_login.value,
		name: form.elements.type_name.value,
		surname: form.elements.type_surname.value,
		password: form.elements.type_password.value,
		confirm_password: form.elements.confirm_password.value,
		email: form.elements.type_email.value
	};
	return data;
}
