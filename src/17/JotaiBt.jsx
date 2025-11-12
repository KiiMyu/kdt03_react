import TailButton from "../components/TailButton"
import { useAtom } from "jotai"
import { cntAtom } from "./atomsF"

export default function JotaiBt() {
    const [cnt, setCnt] = useAtom(cntAtom);

    return (
        <div className="m-10">
            <TailButton color="blue" caption="증가" onClickEvent={() => setCnt(cnt + 1)} />
            <TailButton color="orange" caption="감소" onClickEvent={() => setCnt(cnt - 1)} />
        </div>
    )
}
