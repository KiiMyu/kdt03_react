import MyDiv2 from "./MyDiv2"

export default function MyDiv1 () {
    const d1 = 'div1';
    const d2 = 'div2';
    const d3 = 'div3';
    return (
        <div className="bg-green-900 w-9/10 h-9/10 p-10 m-10 flex flex-col justify-center items-start text-white">
            <h1>MyDiv1</h1>
            <MyDiv2 dv1={d1} dv2={d2} dv3={d3}/>
        </div>
    )
}