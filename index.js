let x=0;
function increment(){
        x=x+1
        document.getElementById('counter').innerHTML=x;
    }

function decrement(){
        if(x>0){
            x=x-1
            document.getElementById('counter').innerHTML=x;
        }

    }