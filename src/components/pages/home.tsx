import react from "react";
import NewsTab from '../landingPage/newsTab'
import CardComponent from '../landingPage/cardComponent';
import picture from "../../assets/picture.jpg"


const style: any = {
    height: "20%",
    width: "100%"
}

export function Home() {
    return (
        <div className="content">
            <div >
                <img src={picture} style={style} alt="vereinssee" />
            </div>
            <NewsTab />
            <CardComponent />

        </div>
    )
}