function loginJump()
{
    var account = document.getElementsByClassName("account")[0].value;
    var password = document.getElementsByClassName("password")[0].value;
    
    if (account == "admin" && password == "admin")
    {
        window.open('./src/Article1.html')
        window.close()
    }
    else
    {
        alert("学校名或学生ID不存在，请重新输入。")
    }
}