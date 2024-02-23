import React from "react";

const url = "https://res.cloudinary.com/dwbajw6h8/image/upload/v1708689996/mqyps2zuu8rlmdg8jawh.png"
let urls = []
for (let i = 0; i < 5; i ++) {
    urls.push(url)
}

export default function Chapter_Main() {
    return (
        <div className="">
            {urls.map((el, index) => (
                <img key={`${index}_oxo`} src={el} className="mx-auto w-2/3 block" />
            ))}
        </div>
    )
}