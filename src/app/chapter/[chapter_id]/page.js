import React from "react";
import Chapter_Header from "../../components/chapter_header";
import Chapter_Main from "../../components/chapter_main";
import Chapter_Footer from "../../components/chapter_footer";

export default function Chapter ({params}) {

    return (
        <div className="flex flex-col h-full bg-slate-800">
            <Chapter_Header />
            <Chapter_Main />
            <Chapter_Footer />
        </div>
    )
}