import { useEffect, useState } from "react";
import MainPageCard from "../components/MainPageCard";
import Property from "../components/Property";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import axios from "axios";

const HomePage = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetchApi('')
         .then(response => response?.data.hits)
        .then(res => setData(res));
       }, []);

    console.log("date in home page: " + data);

    return (
        <div className="HomePage">
            <MainPageCard purpose="RENT A HOME"
                title1="Rental homes for"
                title2="explore apartments"
                imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4" />
      
      <p></p>

            <MainPageCard purpose="BUY A HOME"
                title1="Buy your home"
                title2="explore apartments"
                imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4" />


        </div>
    );
}

export default HomePage;