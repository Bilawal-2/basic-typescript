type StatusProps={
    _status:'loading'|'success'| 'error'
}

const Status = (props:StatusProps) => {
let message 
if(props._status === 'loading'){
    message='Loading...'
}

else if(props._status === 'success'){
    message='Data fetch successfully'
}

else if(props._status === 'error'){
    message='Error fetching data'
}
  
    return (
    <div>
        <h2>Status - {message}</h2>        
    </div>
  )
}

export default Status
