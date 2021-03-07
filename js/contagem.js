// btn count
function count(){
    let txtbegin = document.getElementById('txtbegin')
    let txtend = document.getElementById('txtend')
    let txtrange = document.getElementById('txtrange')
    let res = document.getElementById('res')
    let firstNumber = Number(txtbegin.value)
    let lastNumber = Number(txtend.value)
    let range = Number(txtrange.value)
    if(txtbegin.value.length == 0 || txtend.value.length == 0 || txtrange.value.length == 0){
        window.alert('Error in data entry!')
    }else{
        res.innerHTML = 'Counting....'
        for (i = firstNumber; i <= lastNumber; i += range){
            res.innerHTML += `${i} \u{1F928}`
        }
    }     
}