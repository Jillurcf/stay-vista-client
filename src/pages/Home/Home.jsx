
import Rooms from "../../components/Rooms/Rooms"
import Category from "../../components/Rooms/Category";
import { Helmet } from "react-helmet-async";

const Home = () => {
  
  return (
    <div>
      <Helmet>
        <title>StayVista | Vacation Homes & Condo Rentals</title>
      </Helmet>
      <h1>Welcome to StayVista</h1>
      <Category></Category>
     
      <Rooms></Rooms>
    </div>
  )
}

export default Home
