document.write("<h3>fizzbuzz</h3> ");

for(var i=1; i<100; i++){
    
    if(i%3===0){
        document.write("fizz");
    }
    if(i%5===0){
        document.write("buzz");
    }
    if(i%3!==0 && i%5!==0){
        document.write(i)
    }
    document.write("</br>")
}