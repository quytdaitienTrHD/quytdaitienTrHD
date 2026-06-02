const PASS = "123456";

function checkPassword(){

  const input =
    document.getElementById("password").value;

  if(input === PASS){

    document.getElementById("password-box")
      .style.display = "none";

    document.getElementById("content")
      .style.display = "block";

  }else{

    document.getElementById("error")
      .innerText = "Sai mật khẩu";

  }
}

document.addEventListener(
  "contextmenu",
  e => e.preventDefault()
);