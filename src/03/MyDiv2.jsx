import MyDiv3 from "./MyDiv3"

//export default function MyDiv2(props) {
export default function MyDiv2({dv1, dv2, dv3}) {
    return (
        <div className="bg-green-700 w-7/10 h-7/10 p-10 m-10 flex flex-col justify-center items-start text-white text-center">
            {/* {props.dv1} &gt; {props.dv2} <br />
            <MyDiv3 d1={props.dv1} d2={props.dv2} d3={props.dv3}/>  */}
            {dv1} &gt; {dv2}
            <MyDiv3 d1={dv1} d2={dv2} d3={dv3}/>
        </div>
    )
}