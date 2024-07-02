import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import GreenCheckmark from "../../Components/GreenCheckmark";

export default function AssignmentControlButtons() {
    return (
        <div className="float-end">
            <FaTrash
                data-bs-toggle="modal"
                data-bs-target="#wd-delete-assignment-dialog"
                className="text-danger me-2 mb-1"
            />
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}
