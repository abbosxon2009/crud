function addInfo(){
    var inp1 = document.getElementById('inp1');
    var inp2 = document.getElementById('inp2');
    var inp11 = document.getElementById('inp11');
    var inp3 = document.getElementById('inp3');
    var inp4 = document.getElementById('inp4');
    var inp5 = document.getElementById('inp5');
    var tbody = document.getElementById('tbody');
     
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td11 = document.createElement('td');
    var img = document.createElement('img');
    var btn = document.createElement('button');
    var btn1 = document.createElement('button');
    
    btn.innerText = "Edit";
    btn1.innerText = "Trash";
   
    btn1.addEventListener('click', e =>{
        tbody.removeChild(tr);
    })
    img.setAttribute('src', inp11.value);
    img.style.width = "40px";
    // btn.style.width  ="120px";
    // btn.style.height  ="40px";
    // btn.style.backgroundColor  ="orange";
    // btn.style.borderRadius  ="10px";
    
    btn.classList.add('btn');
    btn.classList.add('btn-warning');

    btn1.classList.add('btn');
    btn1.classList.add('btn-danger');
    
    td.innerText = inp1.value;
    td11.appendChild(img);
    td1.innerText = inp2.value;
    td2.innerText = inp3.value;
    td3.innerText = inp4.value;
    td4.innerText = inp5.value;
    td5.appendChild(btn);
    td5.appendChild(btn1);
   
    
    tr.appendChild(td);
    tr.appendChild(td11);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
  

    tbody.appendChild(tr);
}