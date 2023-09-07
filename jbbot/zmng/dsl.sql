

set a=1258
let  b=2
echo a

//exit
-- set @c=@a+@b
-- set @c= @a addx @b+5  //   add(@,@b)   +($rzt,5)
echo @c

    let b=333

if a>1

    let b=1

else
 let b=2

endif

    echo b

exit

while @a>1
   goto lb


endwhile



lb: repeat

       call addx  a,b,c

    leave
    break
    continue


    util @a>5  endrepeat



fn addx


    ret 3
return  5
endfn

