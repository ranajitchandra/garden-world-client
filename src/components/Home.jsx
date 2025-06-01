
import Carousel from "../components/Carousel";
import WorkWith from "../components/WorkWith";
import FourTrips from "../components/FourTrips";
import FeaturedGardeners from "./FeaturedGardeners";
export default function Home() {

    return (
        <>
            <Carousel></Carousel>
            <FeaturedGardeners></FeaturedGardeners>
            <WorkWith></WorkWith>
            <FourTrips></FourTrips>
        </>
    )
}