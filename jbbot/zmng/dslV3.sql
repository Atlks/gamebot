set a = 1,  b = 2,echo b,

    display 222    ,c=11,echo c,


    fun3:  let c=3,

         let a1=   __funArgs[0]
         let a2= __funArgs[1]
        return a1+a2



    endfun fun3 ,

c=0,

call fun3 abc def, c=0,


    echo __retVal, ef=__retVal, echo ef

        exit



 while a<3 ,c++,d=2,a++, echo c,




endwhile

  if a>1 ,  let b=1 ,else let b=2 ,c=1  ,endif





echo b



//exit
-- set @c=@a+@b
-- set @c= @a addx @b+5  //   add(@,@b)   +($rzt,5)
//echo c

let b=333


goto lab1
    let b=444

lab1:

call fun1 1 1
    echo 111111111111111111111111
echo __retVal

echo b



fun1:
 let a1=   __funArgs[0]
 let a2= __funArgs[1]
return a1+a2

endfun






exit



exit

while @a>1
   goto lb


endwhile



lb: repeat

call addx a,b,c

    leave
    break
    continue


    util @a>5  endrepeat



fn addx


    ret 3
return  5
endfn

