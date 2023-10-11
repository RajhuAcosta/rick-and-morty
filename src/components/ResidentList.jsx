import { useEffect, useState } from "react"
import ResidentCard from "./ResidentCard"
import { paginationLogic } from "../utils/pagination";

const ResidentList = ({residents}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const {pages,residentes__in__page} = paginationLogic(currentPage,residents);
  useEffect(() => {
    setCurrentPage(1);
  }, [residents])
  return (
    <section className='bg-center bg-cover' style={{backgroundImage: "url(/backgrounds/background_body.png)"}}>
      {residents.length ? (
        <section className="grid grid-cols-[repeat(auto-fit,_280px)] justify-center gap-6 max-w-[1000px] mx-auto py-10 px-4">
          {
              residentes__in__page.map((resident)=><ResidentCard key={resident} residentEndpoint={resident}></ResidentCard>)
          }
        </section>
      ) : (
        <section className="border-[2px]  mx-auto border-[#8EFF8B] px-5 mt-10 text-center mb-5">
          <h3 className="md:text-5xl text-xl my-20 py-5">Earth destroyed !</h3>
          <p className="text-[#938686] my-20 text-lg">No pupulation to show</p>
        </section>
      )}
      <ul className="text-lg flex gap-3 justify-center flex-wrap px-4">
        {
          pages.map((page)=>(
            <li className="my-5" key={page}>
              <button className={`p-2 ${page===currentPage ? "bg-green-400" : ""}`} onClick={()=>setCurrentPage(page)}>
                {page}
              </button>
            </li>
          ))
        }
      </ul>
    </section>
  )
}
export default ResidentList