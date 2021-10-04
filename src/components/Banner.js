import React from "react";
import banner from "../assets/banner.png"

export const Banner = () => {
    return (
        <div style={{
            background: `url(${banner})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            height: "400px"
        }}>

        </div>
    )
}