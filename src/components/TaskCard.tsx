import {Task} from "../types/task";


interface Props{
task:Task;
toggleTask:(id:number)=>void;
}


export default function TaskCard({task,toggleTask}:Props){

return(

<div className="
bg-white
rounded-3xl
p-5
shadow-lg
flex
justify-between
items-center
">


<div>

<h3 className="
text-xl
font-semibold
">

{task.title}

</h3>


<p className="text-gray-500">

{task.priority} Priority • {task.energy}

</p>

</div>



<button

onClick={()=>toggleTask(task.id)}

className="text-3xl"

>

{
task.completed
?
"🌱"
:
"⭕"
}

</button>


</div>

)

}