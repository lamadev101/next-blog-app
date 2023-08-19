import { useEffect, useState } from "react"

const NoInternetConnection = ({children}:any) => {
  const [isOnline, setIsOnline] = useState(true)

  useEffect(()=>{
    setIsOnline(navigator.onLine)
  }, [])

  window.addEventListener("online", ()=>{
    setIsOnline(true)
  })

  window.addEventListener("offline", ()=>{
    setIsOnline(false)
  })
  
  if(isOnline){
    return children
  }else{
    return (
      <div>
        <p>No Internet Connection. Please check your connection.</p>
      </div>
    )

  }
}

export default NoInternetConnection
