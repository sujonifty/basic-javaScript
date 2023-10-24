/*
need 4 things for while loop.
1.loop variable
2.loop condition
3. loop body
4. change the loop variable
*/
var rostGiven=0;
while(rostGiven < 7)
{
    console.log('give me more rost.');
    // rostGiven=rostGiven + 1;
    // rostGiven += 1;
    rostGiven++;
}
//for loop
for(rostGiven=0; rostGiven<5; rostGiven++)
{
    console.log('give me more rost.');
}
//simplify for loop
for(var i=0; i<5; i++)
{
    console.log('simplify for loop.');
}
//using array
var numbers=[2,3,5,7,5,13];
//for ( var i=0; i<7; i++)
for ( var i=0; i<numbers.length; i++)
{
     var num=numbers[i];
    console.log(num);
}
//we can do it for reverse value 

for ( var i=10; i>=1; i--)
{
    console.log(i);
}