var ekran = document.querySelector(".ekran")

document.querySelectorAll('td').forEach((td) => {
    td.addEventListener('click', (e) =>{
        var belgi = e.target.innerText;

        if(ekran.value == ''){
            ekran.value += belgi;
            obj = ekran.value.split("")
            
        } else if (belgi == "+" || belgi == "-" || belgi == "*" || belgi == "/") {
            ekran.value += belgi;
            obj = ekran.value.split("")
            if (belgi == "+" || belgi == "-" || belgi == "*" || belgi == "/") {
                for(i = 1; i < obj.length; i++){
                    if ((obj[i] == "+" && obj[i-1] =="+") || (obj[i] == "-" && obj[i-1] =="-") 
                        || (obj[i] == "/" && obj[i-1] =="/") || (obj[i] == "*" && obj[i-1] =="*")) {
                        belgi = obj.pop()
                        ekran.value = obj.join('')
                    }
                }
            }
        } else if (belgi == "Ce") {
            obj = ekran.value.split('');
            belgi = obj.pop()
            ekran.value = obj.join('')
        } else if(belgi == "M+" || belgi == "M-" || belgi == "M"){
            obj = ekran.value.split('');
            ekran.value = obj.join('')
        } else if (belgi == "C") {
            ekran.value = '';
        } else if(belgi == "="){
            ekran.value = eval(ekran.value);            
        } else if(belgi == "^"){
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