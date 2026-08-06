import {useState} from "react";
import {motion} from "framer-motion";
import {
Sparkles,
Sun,
CheckCircle2
} from "lucide-react";

import MoodSelector from "./components/MoodSelector";
import TaskCard from "./components/TaskCard";
import type {Task} from "./types/task";


function App(){


const [mood,setMood]=useState("Balanced");


const [tasks,setTasks]=useState<Task[]>([

{
id:1,
title:"Build Aurelia",
priority:"High",
energy:"High",
completed:false
},

{
id:2,
title:"Study something meaningful",
priority:"Medium",
energy:"Normal",
completed:true
}

]);



function toggleTask(id:number){

setTasks(
tasks.map(task=>

task.id===id
?
{
...task,
completed:!task.completed
}
:
task

)

)

}



const completed =
tasks.filter(task=>task.completed).length;



const progress =
Math.round(
(completed/tasks.length)*100
);



return(


<div className="
min-h-screen
p-8
">


<div className="
max-w-5xl
mx-auto
">


<motion.div

initial={{opacity:0,y:-20}}

animate={{opacity:1,y:0}}

className="
flex
justify-between
items-center
"

>


<div>

<h1 className="
text-6xl
font-bold
tracking-tight
">

Aurelia

<Sparkles
className="inline ml-3"
size={40}
/>

</h1>


<p className="
text-gray-500
mt-3
text-lg
">

Design your day with intention.

</p>


</div>



<div className="
bg-white/70
backdrop-blur-xl
rounded-3xl
p-5
shadow-lg
text-center
">


<Sun
className="mx-auto"
/>


<p className="text-sm">
Energy
</p>


<h3 className="
font-semibold
">

{mood}

</h3>


</div>


</motion.div>





<div className="
mt-12
grid
md:grid-cols-3
gap-6
">



<div className="
md:col-span-2
bg-white/70
backdrop-blur-xl
rounded-[2rem]
p-8
shadow-xl
">


<h2 className="
text-2xl
font-semibold
mb-6
">

How do you feel today?

</h2>


<MoodSelector

onMoodChange={setMood}

/>


</div>





<div className="
bg-black
text-white
rounded-[2rem]
p-8
shadow-xl
">


<h3>
Daily Growth
</h3>


<div className="
text-5xl
font-bold
mt-5
">

{progress}%

</div>


<p className="
mt-3
text-gray-300
">

Keep growing 🌱

</p>


</div>


</div>





<div className="
mt-10
space-y-5
">


{
tasks.map(task=>(

<TaskCard

key={task.id}

task={task}

toggleTask={toggleTask}

/>

))
}



</div>




</div>


</div>


)

}


export default App;