const getVideos = () => {
  console.log("Fetching videos...");

  return [
    {
      videoImg: "cjdj", title: "dasturlash"
    },
    {
      videoImg: "cjdj", title: "dasturlash"
    },
    {
      videoImg: "cjdj", title: "dasturlash"
    },
    {
      videoImg: "cjdj", title: "dasturlash"
    },
  ]

}


import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState("")
  const [video, setvideo] = useState([])

  const vidie = getVideos()


  useEffect(() => {
    getVideos()
  }, [])


  return (
    <>
      <div>
        <input onChange={(e) => { setCount(e.target.value) }} type="text" placeholder='search..' />


        {
          vidie.map((item, index, rray) => {

            if (item.title.toLowerCase().includes(count.toLowerCase())) {
            return (

              <div>
                <img src={item.img} alt="" />

                <h1>{item.title}</h1>
              </div>

            )
          }
          }

      )
        }
      </div >
    </>
  )
}

export default App
