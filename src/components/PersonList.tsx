type PersonListProps = {
    namelist:{
        first:string
        last:string
    }[]
}

const PersonList = (props:PersonListProps) => {
  return (
    <div>
        {props.namelist.map(name=>{
            return(
                <h2 key ={name.first}>
                    {name.first} {name.last}
                </h2>
            )
        })}
    </div>
  )
}

export default PersonList
