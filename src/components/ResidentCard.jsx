import axios from "axios"
import { characterStatus } from "../constants/resident";
import { useEffect, useState } from "react"

const ResidentCard = ({ residentEndpoint }) => {

    const [resident, setResident] = useState(null);

    useEffect(() => {
        axios.get(residentEndpoint)
        .then(({data})=>setResident(data))
        .catch((error)=>console.log(error))
    }, [])

    

    return (
        <article className="">
            <header className="relative border-[#8EFF8B] border-[2px] -mb-[1px]">
                <img src={resident?.image} alt="" />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-1 rounded-md flex items-center gap-2">
                    <div className={`h-3 w-3 ${characterStatus[resident?.status]} rounded-full`}></div>
                    <span>{resident?.status}</span>
                </div>
            </header>
            <div className="capitalize border-[#8EFF8B] border-[2px] -mt-[1px]">
                <h4 className="px-4 text-xl pt-4 pb-3 border-b-[#084851] border-[1px]">{resident?.name}</h4>
                <ul className="px-4 text-sm py-3">
                    <li className="flex leading-7"><span className="text-[#938686] min-w-[138px] block mr-4px">Species</span>{resident?.species}</li>
                    <li className="flex leading-7"><span className="text-[#938686] min-w-[138px] block mr-4px">Origin</span>{resident?.origin.name}</li>
                    <li className="flex leading-7"><span className="text-[#938686] min-w-[138px] block mr-4px">Times appear</span>{resident?.episode.length}</li>
                </ul>
            </div>
        </article>
    )
}
export default ResidentCard;