import { IconSearch } from "@tabler/icons-react";
import axios from "axios";

const Location = ({location,setLocation}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const idLocation = event.target.idLocation.value;
        axios.get(`https://rickandmortyapi.com/api/location/${idLocation}`)
        .then(({data})=>setLocation(data))
        .catch((error)=>console.log(error))
    }
    return (
        <section className="text-center mt-[1vh] justify-center">
            <form onSubmit={handleSubmit} className="flex justify-center" action="">
                <input placeholder="Type a location Id ..." className="px-2 -mr-[1px] placeholder-[#938686] text-white bg-black border-[#8EFF8B] border-[2px]" name="idLocation" type="number" />
                <button type="submit" className="flex gap-2 items-center -ml-[1px] py-2 px-4 border-[#8EFF8B] border-[2px]" style={{backgroundColor: "rgba(142, 255, 139, 0.50)"}}>
                    <IconSearch size={19} ></IconSearch>
                </button>
            </form>
            <section className="mt-6 py-4 px-0 border-[2px]  mx-auto border-[#8EFF8B] bg-transparent max-w-[350px] md:max-w-[585px] lg:max-w-[888px]">
               <h3 className="text-[#8EFF8B] leading-8">
                Welcome to the <span className="capitalize">{location?.name}</span>
               </h3>
                <ul className="leading-7 text-[#938686] capitalize">
                    <li>Type: {location?.type}</li>
                    <li>Dimension: {location?.dimension}</li>
                    <li>Population: {location?.residents.length}</li>
                </ul> 
            </section>
        </section>
    )
}
export default Location;