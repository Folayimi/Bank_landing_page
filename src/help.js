//Pass in a local parameter of string type
function Capitalize(name){
    //create an empty list
    var newName = []
    //create a list of all the small letters
    var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q',
    'r','s','t','u','v','w','x','y','z']

    //create a list of all the capital letters
    var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q',
    'R','S','T','U','V','W','X','Y','Z']

    //convert the string parameter (name) to a list
    const List = name.split('')

    //run the following codes in C..
    for (var i=0; i<=name.length; i++){
        for(var j=0; j<lowerCase.length; j++){
            if(List[i]===lowerCase[j]){
                //append the item at point j in lowercase list in the newName(which is initially 
                //a empy array)
                newName.push(upperCase[j])
            }
            else if(List[i]===upperCase[j]){                             
                newName.push(List[i])                
            }
        }
    }
    let final = newName.join('');

    //log out the output in C..
    console.log(final);
}
Capitalize('Ridwan')
