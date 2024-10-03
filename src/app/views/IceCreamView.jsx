import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ordered,restocked } from '../../features/iceCream/iceCreamSlice'

const IceCreamView = () => {
  const numOfIceCreams=useSelector((state)=>state.iceCream.numOfIceCreams)
  const dispatch= useDispatch()
  return (
    <div>
        <h2>Number of iceCreams:{numOfIceCreams}</h2>
        <button onClick={()=>dispatch(ordered())}>Order iceCream</button>
        <button onClick={()=>dispatch(restocked(5))} >Restock iceCream</button>
    </div>
  )
}

export default IceCreamView