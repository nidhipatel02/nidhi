document.getElementById("myform").addEventListener("submit", function(event){
    event.preventDefault()
    const payload = {
        firstname : document.getElementById("firstname").value,
        lastname : document.getElementById("lastname").value,
        number : document.getElementById("number").value,
        email : document.getElementById("email").value,
        roll_number : document.getElementById("rollnumber").value,
 
    }
    // console.log(payload)
    const apiurl = "http://192.168.194.144:3001/userregister"
    const option ={
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(payload)

    }
    fetch(apiurl,option).then(Response =>{
        if(!Response.ok){
            console.log("error")
        }
        return Response.json()
        
    }).then(data =>{
        console.log(data)
        userinfo(data)
    })
})
function userinfo(data){
    const userdatadiv = document.getElementById("userdata")
    userdatadiv.innerHTML =`
    <h2>user info</h2>
    <p>firstname :${data.firstname}</p>
    <p>lastname :${data.lastname}</p>
    <p>number :${data.number}</p>
    <p>email :${data.email}</p>
    <p>rollnumber :${data.roll_number}</p>
    
    `
}
