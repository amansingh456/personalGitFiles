function mark(){
    x=document.getElementById('a').value
    y=document.getElementById('b').value
    z=Number(x)+Number(y)
    document.getElementById('c').value=z


    
    if(z>=90){
        document.getElementById('d').value='A1'
    }
    else if(z>=85){
        document.getElementById('d').value='A'
    }
    else if(z>=75){
        document.getElementById('d').value='B1'
    }
    else if(z>=70){
        document.getElementById('d').value='B'
    }
    else if(z>=60){
        document.getElementById('d').value='C'
    }
    else if(z>=50){
        document.getElementById('d').value='D'
    }
    else if(z>=33){
        document.getElementById('d').value='E'
    }
    else{
        document.getElementById('d').value='Fail'
    }

    // innerHtml tb lagate hai jab kisi h1 ya h2 ya p tG ME print karvana ho or input me print karvana hai to .value lagate hai

}

