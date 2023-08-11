var clutter=""
var clutter2 = "";




function encryption(){
    document.querySelector("#encrypt-btn").addEventListener("click",function(){

        // getting the input data 
        var input=document.getElementById("textmsg").value;
        console.log(input);

        // getting the password
        var password=document.getElementById("password").value;
        console.log(password);

        // splitting the input

        const str=input.split("");
        // console.log(str);

        // converting it into emoji by using Ascii value
        str.forEach(element => {
            clutter += `&#128${(element.charCodeAt())} `
            
        });
        
        // storing it in the result div
        document.querySelector("#result").style.display="block";
        document.querySelector("#result").innerHTML = clutter

        var dataarr = [];
        if(JSON.parse(localStorage.getItem('data1'))){
            dataarr = JSON.parse(localStorage.getItem('data1'));
            console.log(dataarr)
            dataarr.push({"password":password, "input":input, "clutter":clutter})
        }else{
            dataarr = [{"password":password,"input":input,"clutter":clutter}]
        }
        localStorage.setItem(`data1`, JSON.stringify(dataarr))

    })
}

function decryption() {
    document.querySelector("#decrypt-btn").addEventListener("click", function () {
       
        var input2 = document.querySelector("#emojimsg").value
        console.log(input2)
        var password2 = document.querySelector("#password2").value
        console.log(password2);
        var user = JSON.parse(localStorage.getItem('data1'))
        console.log(user)
       
        var str2 = input2.split(" ")
        str2.forEach(element => {
                clutter2 += `&#${(element.codePointAt(0))} `
        });
        console.log(clutter2)
        var found;
        for(let i of user){
            if(i.clutter == clutter2){
                found = i;
                console.log(i)
            }
        }
        if (found.clutter === clutter2 && found.password===password2) {
            console.log("jay ho")
            document.querySelector("#result").style.display = `block`
            document.querySelector("#result").style.color = `#eee`

            document.querySelector("#result").innerHTML = found.input
        } else {
            console.log("Wrong Password")
            document.querySelector("#result").style.display = `block`
            document.querySelector("#result").style.color = `red`
            document.querySelector("#result").innerHTML = "Wrong password!"
        }
    })

}





function buttonClick(){
    document.querySelector("button").addEventListener("click", function () {
        document.querySelector("#result").style.display = "block"
    })
    document.querySelector("#dec-btn").addEventListener("click",function(){
        document.querySelector("#decryption").style.display="block"
        document.querySelector("#encryption").style.display="none"
        document.querySelector("#dec-btn").style.backgroundColor = "#333"
        document.querySelector("#enc-btn").style.backgroundColor = "#222"
        document.querySelector("#main>h1 span img").style.rotate = '270deg'
        document.querySelector("#result").style.display = "none"
    })
    document.querySelector("#enc-btn").addEventListener("click",function(){
        document.querySelector("#encryption").style.display="block"
        document.querySelector("#decryption").style.display="none"
        document.querySelector("#dec-btn").style.backgroundColor = "#222"
        document.querySelector("#enc-btn").style.backgroundColor = "#333"
        document.querySelector("#main>h1 span img").style.rotate = '90deg'
        document.querySelector("#result").style.display = "none"
       

    })
 

}
buttonClick()
encryption()
decryption()
