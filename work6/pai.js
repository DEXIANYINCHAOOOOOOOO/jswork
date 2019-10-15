//"计算"按钮点击处理函数
function calculate(){
    //读取阶数输入框的数值
<<<<<<< HEAD
    let num = document.getElementById('num').value
    num = parseInt(num)&&Number(num)
    if(!isNaN(num)){
        //设置圆周率输入框的值
        document.getElementById('pai').value = pi(num)
=======
    let num = document.getElementById('').value
    num = parseInt(num)&&Number(num)
    if(!isNaN(num)){
        //设置圆周率输入框的值
        document.getElementById('').value = pi()
>>>>>>> 6c434b7412f070c465a4f514e5021ba3e371f9c9
    }
}
//声明阶乘函数n！ factorial()
function factorial(n){
    //声明阶乘汇总数并赋值为1
    let sum = 1
    //for循环累乘
<<<<<<< HEAD
    for(let i=1;i<=n;++i){
        sum *= i
=======
    for(let i=1;i<=0;++i){
        s
>>>>>>> 6c434b7412f070c465a4f514e5021ba3e371f9c9
    }
    //返回阶乘汇总数
    return sum
}
//声明奇数阶乘函数（2n+1）！！ oddFactorial()
function oddFactorial(n){
    //声明阶乘汇总数并赋值为1
    let sum = 1 
    //for循环累乘
    for(let i=1;i<=n;++i){
<<<<<<< HEAD
        sum *= ((2*i)+1)
=======
        s
>>>>>>> 6c434b7412f070c465a4f514e5021ba3e371f9c9
    }
    //返回阶乘汇总数
    return sum
}
//阶乘法计算圆周率函数
function pi(num){
    //声明汇总值变量，并赋值0
    let sum = 0 
    //for循环计算圆周率
    for(let i=0;i<=num;++i){
        //声明及阶乘被除数 divdend,并调用factorial函数取值
<<<<<<< HEAD
        let dividend = factorial(i)
        //声明及阶乘被除数 divisor,并调用oddFactorial函数取值
        let divisor = oddFactorial(i)
        //累加汇总值
        sum += (dividend/divisor)
    }
    //返回圆周率
    return sum*2
}
=======
        let dividend = factorial( )
        //声明及阶乘被除数 divisor,并调用oddFactorial函数取值
        let divisor = oddFactorial( )
        //累加汇总值
        s
    }
    //返回圆周率
    return sum
}

>>>>>>> 6c434b7412f070c465a4f514e5021ba3e371f9c9
calculate()
