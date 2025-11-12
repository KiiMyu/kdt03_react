import JotaiBt from "./JotaiBt";
import { useAtom, useAtomValue } from "jotai"; // useAtomValue를 쓰면 UseState 구성에서 set을 없앨 수 있음.
import { cntAtom, dbCntAtom } from "./atomsF";

export default function JotaiCnt() {

    // const cnt = useAtom(cntAtom);
    // const dbCnt = useAtom(dbCntAtom);

    const cnt = useAtomValue(cntAtom);
    const dbCnt = useAtomValue(dbCntAtom);

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <div className="text-4xl font-bold m-10">
                Jotai 전역 상태 관리
            </div>
            <div className="rounded-3xl bg-amber-100 w-7/10 h-2/10">
                <div>
                    count : {cnt}
                </div>
                <div>
                    double count : {dbCnt}
                </div>
            </div>
            <JotaiBt />

        </div>
    )
}
