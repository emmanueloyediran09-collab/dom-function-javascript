 function show(){
        let userName = document.getElementById('input').value
        let displayArea = document.getElementById('display')
        displayArea.innerHTML += `<p> ${userName}</p>`
        document.getElementById('input').value= ''
 }