import Link from "next/link";
import RemoveButton from "./RemoveButton";
import {HiPencilAlt} from "react-icons/hi";

export default function TopicsList() {
    return <>
        <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
            <div>
                <h2 className="font-bold text-2xl">Topic Title</h2>
                <div>Topic Description</div>
            </div>

            <div className="flex gap-2">
                <RemoveButton />
                <Link href={'/editTopic/123'}>
                    <HiPencilAlt size={24} />
                </Link>
            </div>
        </div>
    </>
}