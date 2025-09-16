import react , {useState} from "react"


function ToDoList(){
    const [tasks, setTasks]= useState(["Study test",'Clean the room','Wash dishes']);
    const [newTask,setNewtask]= useState("");

    function handelInputChange(event){
        setNewtask(event.target.value)

    }

    function addTask(){
        if(newTask.trim()!==""){
            setTasks(t=> [...t,newTask]);
            setNewtask("");
        }


    }

    function deleteTask(index){
        
        const updatedtasks= tasks.filter((_,i)=> i!==index);
        setTasks(updatedtasks);

    }

    function movetaskUp(index){
        const updatedtask= [...tasks];
        if(index <tasks.length ){
            [updatedtask[index],updatedtask[index-1]]=
             [updatedtask[index-1],updatedtask[index]];
             setTasks(updatedtask);
        }

    }



    function movetaskDown(index){
        const updatedtask= [...tasks];

        if(index >=0){
            [updatedtask[index],updatedtask[index+1]]=
             [updatedtask[index+1],updatedtask[index]];
             setTasks(updatedtask);
        }
        
    }


    return(
        <div className="to-do-list">
            <h1>To-Do-List </h1>
            <div>
                <input
                 type="text"
                 placeholder="Enter a task..."
                 value={newTask}
                 onChange={handelInputChange}/>

                 <button className="add-button" onClick={addTask} >
                    add
                 </button>
                 
            </div>
            <ol>
                {tasks.map((task,index)=>
                <li key={index}>
                    <span className="text">
                        {task}
                    </span>
                    <button className="delete-button" onClick={()=> deleteTask(index)}>
                    Delete
                    </button>
                    <button className="move-button" onClick={()=> movetaskUp(index)}>
                        
                       👆🏽
                    </button>
                    <button className="move-button" onClick={()=> movetaskDown(index)}>
                        
                       👇🏽
                    </button>

                    

                </li>
                )}
            </ol>


        </div>
    );
}

export default ToDoList;