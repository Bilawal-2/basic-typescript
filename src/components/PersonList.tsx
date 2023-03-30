import {Name} from './Person.type'

type PersonListProps = {
    namelist:Name[]
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
