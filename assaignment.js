
//Question number 1
 function max(x,y){
    if(x>y){
        return x;
    }else{
        return y;
    }
 }

 console.log(max(7,8));

 console.log("Hello")

//Question number 2
function maxOfThree(x,y,z){
    if(x>y && x>z){
        return x;
    }
    else if (y>z){
        return y;
    }
else return z;
}

//Question number 3
function isVowel(y){
    switch(y){
        case 'a': "Its vowel a"
        break;
        case 'e': "Its vowel e"
        break;
        case 'i': "Its vowel i"
        break;
        case 'o': "Its vowel o"
        break;
        case 'u': "Its vowel u"
        break;
        default: console.log("not a vowel")
    }
}
//Question number 4
function sum(array){
    let result = 0;
    for(let i=0; i < array.length;i++){
        result+=array[i];
    }
    return result;
}
console.log(sum[1,2,3,4]);
//multiply
function mul(array){
    let prod = 1;
    for(let i=0; i<array.length;i++){
        prod*=array[i];
    }
    return prod;
}
console.log(sum[1,2,3,4])

//Question number 5
function reverse(array=[]){
   let s='';
   for(let i=array.length-1; i>=0;i--){
    s+= array[i];
    return [i];
   }
   
}
console.log(reverse["jag testar"])

//Question number 6
function findLongestWord(arr=[]){
    let max= array[0].length;
    let count = 0;
    for(let i=1; i<array.length;i++){
        if(array[i].length>max){
            count = i;
            max = array[i].length;
        }
    }
       return max;
}
console.log(findLongestWord(["hi","hola","hello","bonjour"]));

//Question 7
function filterLongWords(array,n){
    let newArray=[];
    array.forEach(value=> {
        if(value.length > n){
            newArray.push(value);
        }
    });
    return newArray;

}
console.log(filterLongWords(["hi","hola","hello","Merhaba"]));

//Question 8
const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
return elem + 3;
})
document.writeln(b.toString() + "<br/>");
const c = a.filter(function(elem, i, array){
return elem !== 3;});
document.writeln(c.toString() + "<br/>");
const d = a.reduce(function(prevValue, elem, i, array){
return prevValue + elem;
});
document.writeln(d+ "<br/>");

const d2 = a.find(function(elem) {return elem > 1;}); //3
const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
document.writeln(d2+ "<br/>");
document.writeln(d3);

//anonymos
(function(){
    console.log("this is anonymos function")
    })
    
    
    //shortest,
    function shortest(arr=[]){
        let min=arr[0];
        let count=0;
    for(let i=1; i<arr.length; i++){
            if(arr[i].length<min.length){
                count=i;
                min=arr[i];
            }
    } 
    return min; 
        }
    console.log(shortest(["hello","z","bye"]));
    
    
    
    function myFunctionTest(expectedVal, testfn)
    {
       if(JSON.stringify(testfn())==JSON.stringify(expectedVal))
            return "TEST SUCCEEDED";
        else
            return "TEST FAILED. Expected "+JSON.stringify(expectedVal)+" found "+ JSON.stringify(testfn());
    }
    
    console.log("Expected output of max(20,10) is 20 and  " +
       myFunctionTest(20, function(){return max( 20, 10);} ));
    
    console.log("Expected output of maxOfThree(5,4,44) is 44 and  " +
    myFunctionTest(44, function(){return maxOfThree(5,4,44);} ));
    
    
    console.log("Expected output of isVowel('b') is false and  " +
    myFunctionTest(false, function(){return isVowel('b');} ));
    
    
    console.log("Expected output of sum([1,2,3,4]) is 10 and  " +
    myFunctionTest(10, function(){return sum([1,2,3,4]);} ));
    
    
    console.log("Expected output of mul([1,2,3,4]) is 24 and  " +
    myFunctionTest(24, function(){return mul([1,2,3,4]);} ));
    
    
    console.log("Expected output of reverse(abc) is cba and  " +
    myFunctionTest("cba", function(){return reverse("abc");} ));
    
    
    console.log("Expected output of findLongestWord([\"hi\",\"hola\",\"hello\",\"bonjour\"]) is \"bonjour\" and  " +
       myFunctionTest("bonjour", function(){return findLongestWord(["hi","hola","hello","bonjour"]);} )); 
    
    
    console.log("Expected output of filterLongWords([\"apple\",\"orange\",\"bee\",\"hon\"],4) is [\"apple\",\"orange\"]] and  " +
       myFunctionTest(["apple","orange"], function(){return filterLongWords(["apple","orange","bee","hon"],4);} ));