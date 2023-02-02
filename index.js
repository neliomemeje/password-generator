const btn = document.querySelector("button")
const inputEl = document.querySelector(".input")
const copyEl= document.querySelector(".fa-paste")
const clipboardEl = document.querySelector(".clipboard")


btn.addEventListener('click', () => {
    const char = '12abc345def67gHIJ89KLqrsMNtuvOPwxyz@#!';
    const passwordLength = 10;
    let password = '';

    for(let i = 0; i < passwordLength; i++){
        const random = Math.floor(Math.random() * char.length)
        password += char.substring(random, random + 1)
    }
     inputEl.value = password
     clipboardEl.innerHTML= `<h2>Copied to clipboard</h2>`
})

copyEl.addEventListener('click', ()=> {
    if(inputEl.value) {
        inputEl.select();
        inputEl.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(inputEl.value);
        clipboardEl.classList.remove("alert")

        setTimeout(()=> {
            clipboardEl.classList.add("alert")
        }, 3000)
    }
})