function food(money)
{
    var foodPrice=5;
    var quantity=money/foodPrice;
    return quantity;
}
function sum(num1, num2)
{
    var total =num1+num2;
    return total;
}
var myTk=30;
var myFood=food(myTk);
console.log('the quantity of food is ',myFood);
var totalsum=sum(20,15);
console.log('total sum ',totalsum);