const form = document.querySelector('form')
const name = document.getElementById('nombre')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPass = document.getElementById('confirm-password')
const picture = document.getElementById('photo')
//const btnRegister = document.getElementById('btnRegister')

form.addEventListener('submit',(event)=>{
    event.preventDefault()
        if(password.value === confirmPass.value){
            fetch('http://localhost:3000/api/user/register',{
                method: 'POST',
                body:JSON.stringify({
                    email:email.value,
                    password:password.value,
                    URLphoto: picture.value,
                    name: name.value,
                }),
                headers:{
                    "Content-Type": "application/json",
                }
            }).then((res)=>{
                console.log('res: ',res)
            }).catch((error)=>{
                console.error(error)
            })
            document.getElementById('created-user').style.display = 'block'
        }else{
            window.alert("Las contraseñas no coinciden!");
            //document.getElementById('err-confirmpass').style.display = 'block'
    }
})