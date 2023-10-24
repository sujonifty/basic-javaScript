//continue 
console.log('continue working');
var numbers=[19,4,25,63,17,8,12,15];

for(var i=0; i<numbers.length; i++)
{
    var num=numbers[i];
    if(num>20)// value skip korbi(bangla)
    {
        continue;// it will skip the value
    }
    console.log(num);
}