selectData();


function addtask() {
    let inp = document.getElementById('items').value;

    if (inp.trim() === '') {
        alert("Please enter a task first!!");
    } else {
        let arr = JSON.parse(localStorage.getItem('crud')) || [];
        arr.push({todo:inp,isComplete:false,id:new Date().getTime()});
        localStorage.setItem('crud', JSON.stringify(arr));
        selectData(); // Update the list after adding a task
        
    }

    document.getElementById('items').value = '';
}

function selectData() {
    let arr = JSON.parse(localStorage.getItem('crud')) || [];
    let text = document.querySelector('.list-container');
    text.innerHTML = ''; // Clear the list before re-rendering

    for (let k = 0; k < arr.length; k++) {
        let newEle = document.createElement('li');
        newEle.innerHTML = `
            <div class="task border-bottom mb-2">
                <li>
                    <div class="form-check d-flex gap-2 justify-content-between" id="form">
                        <input  ${arr[k].isComplete?`checked`:''} type="checkbox" class="form-check-input" onclick="save(${arr[k].id})">
                        <label class="${arr[k].isComplete?`form-check-label`:''}">${arr[k].todo}</label>
                        <div class="icon">
                            <ion-icon name="trash-outline" class="del-icon" onclick="deleteTask(${k})"></ion-icon>
                        </div>
                    </div>
                </li>
                </div>
        `;

        text.appendChild(newEle);
      
    }
}

function deleteTask(index) {
    let arr = JSON.parse(localStorage.getItem('crud')) || [];
    arr.splice(index, 1);
    localStorage.setItem('crud', JSON.stringify(arr));
    selectData(); // Update the list after deleting a task
}

function save(id){
    let arr1=JSON.parse(localStorage.getItem('crud')) || [];

    const new_arr = arr1.filter((cur,i,arr)=>{
        if(cur.id===id){
            cur.isComplete= true
        }
        return cur
    })

            localStorage.setItem('crud',JSON.stringify(new_arr));
            console.log("work success");
            selectData()
}
