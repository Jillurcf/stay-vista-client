import { useEffect, useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading";
import Loader from "../Shared/Loader";
import { getAllRooms } from "../../api/rooms";


const Rooms = () => {
    const [Rooms, setRooms] = useState([])
    const [params, setParams] = useSearchParams();
    const [loading, setLoading] = useState(true)
    const category = params.get('category')
    useEffect(()=>{
        setLoading(true)
        getAllRooms()
        .then(data => {
            if(category){
                const filtered = data.filter(room=> room.category === category)
                setRooms(filtered)
            }
            else{
                setRooms(data)
            }
            setLoading(false)
        })
    },[category])


    if(loading){
        return <Loader></Loader>
    }
    return (
       <Container>
       {Rooms && Rooms.length > 0 ?  <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {/* <h1>Rooms card</h1> */}
            {
                Rooms.map(room=> <Card key={Card.id} room={room}></Card>)
            }
        </div>
        : <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
            <Heading center={true} title="No Rooms Available in this Category" subtitle='Select Other Categoris'></Heading>
        </div>
        }
       </Container>
    );
};

export default Rooms;