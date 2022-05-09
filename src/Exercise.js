var second = 0;
setInterval(timer, 1000);

if (localStorage.getItem("second") != null)
{
    second = localStorage.getItem("second")
    document.getElementById("timer").innerText = '使用时间：' + second + '秒';
}

function timer()
{
    second++;
    document.getElementById("timer").innerText = '使用时间：' + second + '秒';
}

function lastArticle() 
{
    localStorage.setItem("second", second)
    window.location.href = './Article1.html'
}

function nextArticle() 
{
    localStorage.setItem("second", second)
    window.location.href = './Article2.html'
}

function nextArticle2() 
{
    localStorage.setItem("second", second)
    window.location.href = './Article3.html'
}

function lastArticle2() 
{
    localStorage.setItem("second", second)
    window.location.href = './Article2.html'
}