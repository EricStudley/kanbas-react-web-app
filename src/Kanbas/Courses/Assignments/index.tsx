import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { TbFilePencil } from "react-icons/tb";
import { useParams } from "react-router";
import { useState } from "react";
import { deleteAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import AssignmentDeleteDialog from "./AssignmentDeleteDialog";

export default function Assignments() {
    const dispatch = useDispatch();
    const { cid } = useParams();
    const { assignments } = useSelector(
        (state: any) => state.assignmentsReducer
    );
    return (
        <div id="wd-assignments">
            <br />
            <AssignmentsControls />
            <br />
            <ul id="wd-assignments" className="list-group rounded-0">
                <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS 40% of Total
                    </div>
                    <ul
                        id="wd-assignment-list"
                        className="wd-assignment-list list-group rounded-0"
                    >
                        {assignments
                            .filter(
                                (assignment: any) => assignment.course === cid
                            )
                            .map((assignment: any) => (
                                <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <TbFilePencil
                                        className="me-3 fs-3"
                                        style={{ color: "green" }}
                                    />
                                    <div>
                                        <a
                                            className="wd-assignment-link"
                                            href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                            style={{
                                                color: "#212529",
                                                fontWeight: "bold",
                                                textDecoration: "none",
                                            }}
                                        >
                                            {assignment.title}
                                        </a>
                                        <br />
                                        <span style={{ color: "red" }}>
                                            Multiple Modules
                                        </span>{" "}
                                        |{" "}
                                        <span
                                            style={{
                                                fontWeight: "bold",
                                                color: "grey",
                                            }}
                                        >
                                            Not Available until
                                        </span>{" "}
                                        {assignment.available} |
                                        <br />
                                        Due {assignment.due} |{" "}
                                        {assignment.points} pts
                                    </div>
                                    <div className="ms-auto d-flex">
                                        <AssignmentControlButtons/>
                                    </div>
                                    <AssignmentDeleteDialog
                                        deleteAssignment={() =>
                                            dispatch(deleteAssignment(assignment._id))
                                        }
                                    />
                                </li>
                            ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
}
