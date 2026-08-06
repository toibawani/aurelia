interface Props {
    onMoodChange: (mood:string)=>void;
}


export default function MoodSelector({onMoodChange}:Props){

const moods=[
    {
        name:"High Energy",
        emoji:"⚡"
    },
    {
        name:"Balanced",
        emoji:"🌱"
    },
    {
        name:"Low Energy",
        emoji:"🌙"
    }
];


return(

<div className="flex justify-center gap-4 flex-wrap">

{
moods.map((mood)=>(

<button

key={mood.name}

onClick={()=>onMoodChange(mood.name)}

className="
bg-white
px-6
py-4
rounded-3xl
shadow-md
hover:-translate-y-1
transition-all
"

>

<div className="text-2xl">

{mood.emoji}

</div>

<div>

{mood.name}

</div>


</button>

))
}

</div>

)

}