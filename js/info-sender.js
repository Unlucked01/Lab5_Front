function send_info() {
    const upload_info_url = 'http://localhost:8080/form/send'
    if(document.getElementById('additional-info').files[0] !== null){
        let file = document.getElementById('additional-info').files[0];
        let formData = new FormData()
        formData.append('first_name', document.getElementById('name').value)
        formData.append('last_name', document.getElementById('surname').value)
        formData.append('email', document.getElementById('email').value)
        formData.append('full_text', document.getElementById('message').value)
        formData.append('files', file)
        fetch(upload_info_url, {
            method: 'POST',
            body: formData,
            headers: {'Authorization': `Bearer ${sessionStorage.getItem('token')}`}
        }).then(async response => {
            if (response.ok) {
                const avatar_url = 'http://localhost:8080/form/get'
                reloadAvatar(avatar_url)
            } else if (response.status == 406) {
                let data = await response.json()
                let element = document.getElementById('avatar-err')
                element.classList.remove('hide')
                element.textContent = data.message
            } else if (response.status == 417) {
                let data = await response.json()
                let element = document.getElementById('avatar-err')
                element.classList.remove('hide')
                element.textContent = data.message
            }
        })
    }
}