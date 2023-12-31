/* eslint-disable react/prop-types */
import { formatDistance } from "date-fns";
import Button from "../../components/Button/Button";
import Calendars from "./Calendars";
import { useState } from "react";


const RoomReservation = ({room}) => {

    // Price calcualtion
    // Tootal days * Price
    const totalDays = parseInt(formatDistance(new Date(room?.to), new Date(room?.from)).split(" ")[0])
   
    const totalPrice = totalDays * room?.price;
  const [value, setValue] = useState({
    startDate: new Date(room?.from),
    endDate: new Date(room?.to),
    key: 'selection'
  })
 

    return (
        <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
            <div className="flex items-center gap-2 p-4">
                <div className="text-2xl font-semibold">$ {room?.price}</div>
                <div className="font-light text-neutral-600">Night</div>
            </div>
         <hr />
         <div className="flex justify-center">
         <Calendars value={value} ></Calendars>
         </div>
          <hr />
          <div className="p-4">
        <Button label="Reservation"></Button>
          </div>
          <hr />
          <div className="p-4 flex items-center justify-between font-semibold text-lg"><div>
            Total
          </div>
          <div>
           $ {totalPrice}
            </div>
            </div>
        </div>
    );
};

export default RoomReservation;