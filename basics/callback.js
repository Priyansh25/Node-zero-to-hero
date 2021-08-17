
function Sample(param){
    console.log(param)
    return param('ravi')
}


console.log(Sample(function(name){return name}))