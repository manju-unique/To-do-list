
let counter = 0;

 function add_task()
    {
                if(counter < 30)
                {
                counter += 1;
                const task = document.getElementById("text");
                const task_text = task.value;
                const list_item = document.createElement("li");
                const node = document.createTextNode(task_text);
                list_item.appendChild(node);
                const element = document.getElementById("taskitems");
                element.appendChild(list_item);
                document.getElementById("text").value = "";
                }
                else
                {
                    alert("Tasks Exceeded\n");
                }
        
        
    }
    

function remove_task()
{  
    counter -= 1;
    const task = document.getElementById("text").value = "";
    const last_task = document.getElementById("taskitems");
    last_task.removeChild(last_task.firstElementChild);
}

