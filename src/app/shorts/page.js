import Header from "../header/page";
import Sidebar from "../slidebar/page";
import Shorts from "./videoSection/page";

export const metadata = {
    title: 'Shorts',
}


export default function shorts() {
    return (
        <>
            <Header></Header>
            <Sidebar></Sidebar>
            <Shorts></Shorts>
        </>
    )
}