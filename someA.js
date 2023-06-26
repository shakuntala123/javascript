function isGreaterthan5(ele ,index,arr)
{
    return ele > 5;
}
function func()
{
    let arr = [2 ,3 ,0 ,8,9,34];
   let value = arr.some(isGreaterthan5);
   console.log(value);

}
func();