const API = "http://localhost:5000/api"

let token=""

async function register(){

const name=document.getElementById("regName").value
const email=document.getElementById("regEmail").value
const password=document.getElementById("regPassword").value

const res=await fetch(API+"/auth/register",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({name,email,password})
})

const data=await res.json()
alert(data.message)
}

async function login(){

const email=document.getElementById("loginEmail").value
const password=document.getElementById("loginPassword").value

const res=await fetch(API+"/auth/login",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({email,password})
})

const data=await res.json()

token=data.token

alert("Login Successful")
}

async function createTask(){

const title=document.getElementById("taskTitle").value
const description=document.getElementById("taskDesc").value

const res=await fetch(API+"/tasks",{
method:"POST",
headers:{
"Content-Type":"application/json",
"Authorization":"Bearer "+token
},
body:JSON.stringify({title,description})
})

const data=await res.json()
alert(data.message)
}

async function getTasks(){

const res=await fetch(API+"/tasks",{
headers:{
"Authorization":"Bearer "+token
}
})

const tasks=await res.json()

const list=document.getElementById("taskList")

list.innerHTML=""

tasks.forEach(t=>{

const li=document.createElement("li")

li.innerHTML=`
<strong>${t.title}</strong><br>
${t.description}
`

list.appendChild(li)

})

}