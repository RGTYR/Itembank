function loginJump()
{
    var account = document.getElementsByClassName("account")[0].value;
    var password = document.getElementsByClassName("password")[0].value;
    
    if (account == "admin" && password == "admin")
    {
        window.open("ItemBank.html")
        window.close()
    }
    else
    {
        alert("账号不存在或密码错误，请重新输入。")
    }
}