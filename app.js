const form = document.querySelector('.form');
const inputField = document.querySelector('.input-task');
const tasks = document.querySelector('.tasks');
const searchInput = document.querySelector('.filter')
const removeAllBtn = document.querySelector('.clear-tasks')
const msgBox = document.querySelector('.msg');


//load eventlisteners
runEventListeners()

function runEventListeners(){
    //Store new task
    form.addEventListener('submit', addTask);
    //remove task
    tasks.addEventListener('click', removeItem);
    //remove all 
    removeAllBtn.addEventListener('click', removeAll);

    //filter
    searchInput.addEventListener('keyup', searchTask);
}

function addTask(e){
    
    if(inputField.value === '') {
        alert('Empty task');
        msgBox.style.display = 'none';
        
    }
    else{


    //create task
    const li = document.createElement('li');
    li.classList= 'task';
    //add text to new task
    li.appendChild(document.createTextNode(inputField.value));
    //create div
    const icons = document.createElement('div');
    icons.className = 'icons';
    const remove = document.createElement('a');
    remove.className = 'remove';
    remove.innerText = '🛑';
    const done = document.createElement('a');
    done.className = 'done';
    done.innerText = '✅';

    //append icons into icons div
    icons.appendChild(remove);
    icons.appendChild(done);

    //append icons div into li
    li.appendChild(icons);

    //append li to ul
    tasks.appendChild(li);
    console.log(inputField.value)

    inputField.value = '';
    msgBox.style.display = 'none';
    
    e.preventDefault();
}
}

function removeItem(e){
  if(e.target.classList.contains('remove')){
      
          e.target.parentElement.parentElement.remove();
      

    }
    else if (e.target.classList.contains('done')){
        e.target.parentElement.parentElement.style.backgroundColor = '#9DD9D2';
        e.target.parentElement.parentElement.style.color = '#fff';
        
    }
     
  
}

//remove all
function removeAll(){
    if(confirm('Are you sure')){
        while(tasks.firstChild){
        tasks.removeChild(tasks.firstChild);
    }
    }
    
}

//search task
function searchTask(e){
    const textInput = e.target.value.toLowerCase();

    document.querySelectorAll('.task').forEach(
        function(items){
         const item = items.firstChild.textContent;
         if(item.toLowerCase().indexOf(textInput) != -1){
             items.style.display = 'block';
         } else{
             items.style.display = 'none';
         }
        }
    )
}
