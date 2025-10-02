// export default function MyDiv3(props) {
export default function MyDiv3({d1, d2, d3}) {
    return (
        <div className="bg-green-300 w-6/10 h-6/10 p-10 m-10 text-black text-center flex justify-center items-start">
        {/* <h1> {props.d1} &gt; {props.d2} &gt; {props.d3 }</h1> */}
        <h1> {d1} &gt; {d2} &gt; {d3}</h1>
         </div>
    )
}