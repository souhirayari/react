export default function Home({data}){
    return (
        <div> 
            {
             data.map((item)=><p key={item.id}>{item.name}</p>)
            }
        </div>
    )
}