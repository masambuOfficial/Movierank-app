import { useEffect, useState } from 'react'

function Adventures() {
  let [adventure, setAdventure] = useState(null);

      function fetchData() {
        let apiurl = "https://movierank-api.onrender.com/api/adventures?populate=*";
        fetch(apiurl)
        .then((response) => {
          return response.json();
        })
        .then((dataObject) => {
          let actionData = dataObject.data;
          setAdventure(actionData)
        })
      }

      useEffect(() =>{
        fetchData();
      }, []);
  return (
    <>
    {
      adventure !== null ? (
        adventure.map((d) => {
          return(
            <div key={d.id} className="md:w-[258px] md:m-0 m-auto w-[90%]">
                <div className="hub-movie-poster-wrap">
                  <img src={`https://movierank-api.onrender.com${d.attributes.poster.data.attributes.url}`} alt="The Hunt Poster"/>
                  <div className=" p-2 border-2 border-[#2FC4EC]">
                    <div className='font-bold leading-4'>{d.attributes.title}</div>
                  </div>
                </div>
                  <div className="w-[100%] bg-[#2e2e2e] px-2 py-2 text-[#2FC4EC]">
                    <a target='_blank' title="Watch The Trailer" href={d.attributes.link}>Watch Trailer</a>
                  </div>
            </div>
          )
        })
      ):
      <p>loading movies...</p>
    }
    </>
  )
}

export default Adventures