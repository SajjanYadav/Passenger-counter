let saveEl = document.getElementById("save-el")
let countEv = document.getElementById("count-el")
let count = 0

function increment(){
    count+=1
    countEv.innerText = count
}

function save(){
    let vaar = count + " - "
    saveEl.textContent += vaar // since innerText is not formatting things correctly use textContent
    console.log(count)
    count=0
    countEv.innerText = 0
}

function decrement(){
    count-=1
    countEv.innerText = count 
}
