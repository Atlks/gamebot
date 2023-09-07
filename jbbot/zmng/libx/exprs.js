

//使用数组dataStore保存站内元素，构造函数将其初始化为一个空数组。
//变量top定义栈顶的位置，构造时初始化为0，表示栈的起始位置为0
function Stack(){
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
    this.printElement = printStack;

    //注意++操作符的位置，它放在this.top的后面，这样新入栈的元素就被放在top的当前位置对应的位置，同时top自加1，指向下一个位置
    function push(element){
        this.dataStore[this.top++] = element;
    }
    //返回栈顶元素，同时top的位置减1
    function pop(){
        return this.dataStore[--this.top];
    }
    //peek()方法返回数组的第top-1个位置的元素，即栈顶元素
    function peek(){
        return this.dataStore[this.top-1];
    }
    //将top的值设置0，即清空一个栈
    function clear(){
        this.top = 0;
    }
    //返回变量top的值即为栈内元素的个数
    function length(){
        return this.top;
    }

    //输出栈内元素
    function printStack(){
        while (this.top>0){
            console.log(this.pop()+"  ");
        }
    }
}

/*-------------------栈将中缀表达式转换成后缀表达式-------------------*/
//document.write('<br><br>');
function suffixExpression(str){
  //  var str = 'a+b*c+(d*e+f)*g';
    var stack = new Stack();
    var outStack = new Array();
    for (var i=0; i<str.length; ++i) {
        if(')' == str[i]){
            while (true){
                var top = stack.peek();
                stack.pop();
                if('(' != top){
                    outStack[outStack.length] = top;
                }else{
                    break;
                }
            }
        }else if(['-','+'].indexOf(str[i])>-1){
            if(['*','/'].indexOf(stack.peek())>-1){
                while (['*','/'].indexOf(stack.peek())>-1){
                    outStack[outStack.length] = stack.peek();
                    stack.pop();
                }
                outStack[outStack.length] = str[i];
            }else{
                stack.push(str[i]);
            }
        }else if(['(','*','/'].indexOf(str[i])>-1){
            stack.push(str[i]);
        }else{
            outStack[outStack.length] = str[i];
        }
    }
    //
    for (var i=0; i< outStack.length; i++) {
        console. log(outStack[i]);
    }
 //   console.log(str)
    return  outStack;


}
suffixExpression("1+2+3");
/*-------------------用栈结构求后缀表达式的值-------------------*/
//document.write('<br><br>');
function countSuffixExpression(){
    var str = '6523+8*+3+*';
    var stack = new Stack();
    for (var i=0; i<str.length; i++) {
        if(isNaN(str[i])){
            stack.push( eval( stack.pop() + str[i] + stack.pop()) );
        }else{
            stack.push(str[i])
        }
    }

    console.log(stack.pop());
}
 countSuffixExpression();

