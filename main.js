// {/* <li>
//    <input type="checkbox">
//    <span>Tesk name</span>
//    <button></button>
// </li> */}

const inputCreateElement = document.querySelector ("#todo-input");
const buttonCreateElement = document.querySelector ("#todo-form  button");
const listElement = document.querySelector("#todo-list");

buttonCreateElement.addEventListener("click", (e) => {
    e.preventDefault();

    const li = document.createElement("li")   
    listElement.append(li) 

   const inputElement = document.createElement("input");
   inputElement.setAttribute("type" ,"checkbox");
   li.append(inputElement);

   inputElement.addEventListener('change', ()=> {
    li.classList.toggle('completed')

    // if (li.classList.contains('completed')){
    //     li.classList.remove('completed')
    // }
    // else{
    //     li.classList.add('completed')
    // }
    if (li.classList.contains("completed")){
        alert('Задача ' + spanElement.innerText + ' успешно выполнена')
    }
   })

   const spanElement = document.createElement("span");
   spanElement.innerText = inputCreateElement.value;
   li.append(spanElement);

   const buttonDeleteElement =document.createElement("button");
   li.append(buttonDeleteElement);
   buttonDeleteElement.innerText = "x";

   buttonDeleteElement.addEventListener( "click", () => {
    li.remove()
   })

   



} );
