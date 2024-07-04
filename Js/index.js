document.getElementById("myform").addEventListener("submit", function(event){
    event.preventDefault()
    const payload = {
        firstname : document.getElementById("firstname"),
        lastname : document.getElementById("lastname"),
        number : document.getElementById("number"),
        email : document.getElementById("email"),
        number : document.getElementById("rollnumber"),
 
    }
    console.log(payload)
})
