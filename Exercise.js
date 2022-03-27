var second = 0;
setInterval(timer, 1000);

function timer()
{
    second++;
    document.getElementById("timer").innerText = '使用时间：' + second + '秒';
}