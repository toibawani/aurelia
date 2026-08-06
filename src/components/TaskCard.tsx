import {motion} from "framer-motion";
import {CheckCircle2} from "lucide-react";
import type {Task} from "../types/task";


interface Props{

task:Task;

toggleTask:(id:number)=>void;

}



export default function TaskCard({
task,
toggleTask
}:Props){


return(

<motion.div

whileHover={{
scale:1.02
}}

className="
bg-white/80
backdrop-blur-xl
rounded-[2rem]
p-6
shadow-lg
flex
justify-between
items-center
"


>


<div>

<h2 className="
text-xl
font-semibold
">

{task.title}

</h2>


<p className="
text-gray-500
mt-2
">

{task.priority}
priority • {task.energy}

</p>


</div>



<button

onClick={()=>toggleTask(task.id)}

>

<CheckCircle2

size={34}

className={
task.completed
?
"text-green-600"
:
"text-gray-300"
}

/>

</button>


</motion.div>


)

}