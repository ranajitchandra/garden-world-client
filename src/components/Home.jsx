
import Carousel from "../components/Carousel";
import WorkWith from "../components/WorkWith";
import FourTrips from "../components/FourTrips";
import FeaturedGardeners from "./FeaturedGardeners";
import TopTrendingTips from "./TopTrendingTips";
export default function Home() {

    return (
        <>
            <Carousel></Carousel>
            <FeaturedGardeners></FeaturedGardeners>
            <TopTrendingTips></TopTrendingTips>
            <WorkWith></WorkWith>
            <FourTrips></FourTrips>
        </>
    )
}