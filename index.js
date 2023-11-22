// let inp = document.getElementById("items");
// let text = document.querySelector('.list-container');
// localStorage.clear()
// // console.log(inp);

// function addtask() {
//     if (inp.value == '') {
//         alert("First Enter a new Task!!!");
//         return false;
//     }
//     else {

//         let newEle = document.createElement('li');
//         newEle.innerHTML += `
//         <div class="task  border-bottom  mb-2">
//                 <li>
//                     <div class="form-check" id="form">
//                         <input type="checkbox" class="form-check-input" id="check">
//                         <label class="form-check-label" for="check">${inp.value}</label>
//                         <div class="icon">
//                             <ion-icon name="trash-outline" class="del-icon"></ion-icon>
//                         </div>
//                     </div>
//                </li>
//             </div>
//         `;

//         text.appendChild(newEle);
//         inp.value = '';
//         newEle.querySelector('ion-icon').addEventListener("click", function () {
//             newEle.remove();
//         })
//     }
// }

selectData();

function addtask() {
    let inp = document.getElementById('items').value;

    if (inp.trim() === '') {
        alert("Please enter a task first!!");
    } else {
        let arr = JSON.parse(localStorage.getItem('crud')) || [];
        arr.push(inp);
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
                    <div class="form-check" id="form">
                        <input type="checkbox" class="form-check-input">
                        <label class="form-check-label">${arr[k]}</label>
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