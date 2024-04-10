// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.
const mainFnc = () =>{
    setTimeout(()=>{
        const callback=()=>{
            console.log(767676);
        }
        callback();
    }, 2000);
}

mainFnc();
