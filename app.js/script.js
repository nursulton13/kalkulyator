var ekran = document.querySelector(".ekran")

document.querySelectorAll('td').forEach((td) => {
    td.addEventListener('click', (e) =>{
        var belgi = e.target.innerText;

        if (belgi == "C") {
            ekran.value = '';
        } else if(belgi == "="){
            ekran.value = eval(ekran.value);
        } else if(belgi == 'x2'){
            a = eval(ekran.value); 
            ekran.value = Math.pow(a, 2);
        } else if(belgi == ''){
            a = eval(ekran.value); 
            ekran.value = Math.sqrt(a, 2);
        } else {
            ekran.value += belgi;
        }

    })
});