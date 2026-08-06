import { useState } from "react";
import MoodSelector from "./components/MoodSelector";
import TaskCard from "./components/TaskCard";
import type { Task } from "./types/task";


function App() {

  const [mood, setMood] = useState("Balanced");


  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Build Aurelia",
      priority: "High",
      energy: "High",
      completed: false,
    },
    {
      id: 2,
      title: "Read and learn something new",
      priority: "Medium",
      energy: "Normal",
      completed: false,
    },
  ]);


  function toggleTask(id:number){

    setTasks(
      tasks.map((task)=> 
        task.id === id
        ?
        {
          ...task,
          completed: !task.completed
        }
        :
        task
      )
    );

  }


  return (

    <main className="
      min-h-screen
      bg-[#faf7f2]
      p-10
    ">


      <section className="
        max-w-3xl
        mx-auto
      ">

        <h1 className="
          text-5xl
          font-bold
          text-center
        ">
          Aurelia ✨
        </h1>


        <p className="
          text-center
          text-gray-500
          mt-3
          text-lg
        ">
          A mindful productivity companion
        </p>


        <div className="mt-10">

          <MoodSelector 
            onMoodChange={setMood}
          />

        </div>


        <h2 className="
          text-center
          mt-8
          text-xl
          font-medium
        ">
          Today's energy: {mood}
        </h2>



        <div className="
          mt-8
          space-y-5
        ">

          {
            tasks.map((task)=>(

              <TaskCard

                key={task.id}

                task={task}

                toggleTask={toggleTask}

              />

            ))
          }


        </div>


      </section>


    </main>

  );

}


export default App;