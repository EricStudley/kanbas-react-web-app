import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { TbFilePencil } from "react-icons/tb";

export default function Assignments() {
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
                    <ul id="wd-assignment-list" className="wd-assignment-list list-group rounded-0">
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3" />
                            <TbFilePencil className="me-3 fs-3" style={{ color: "green" }} />
                            <div>
                                <a
                                    className="wd-assignment-link"
                                    href="#/Kanbas/Courses/1234/Assignments/123"
                                    style={{ color: "#212529", fontWeight: "bold", textDecoration: "none"}}
                                >
                                    A1
                                </a>
                                <br />
                                <span style={{ color: "red" }}>Multiple Modules</span> | <span style={{ fontWeight: "bold", color: "grey" }}>Not Available until</span> May 6 at
                                12:00am |
                                <br />
                                Due May 13 at 11:59pm | 100 pts
                            </div>
                            <div className="ms-auto d-flex">
                                <AssignmentControlButtons />
                            </div>
                        </li>
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3" />
                            <TbFilePencil className="me-3 fs-3" style={{ color: "green" }} />
                            <div>
                                <a
                                    className="wd-assignment-link"
                                    href="#/Kanbas/Courses/1234/Assignments/456"
                                    style={{ color: "#212529", fontWeight: "bold", textDecoration: "none"}}
                                >
                                    A2
                                </a>
                                <br />
                                <span style={{ color: "red" }}>Multiple Modules</span> | <span style={{ fontWeight: "bold", color: "grey" }}>Not Available until</span> May 13 at
                                12:00am |
                                <br />
                                Due May 20 at 11:59pm | 100 pts
                            </div>
                            <div className="ms-auto d-flex">
                                <AssignmentControlButtons />
                            </div>
                        </li>
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3" />
                            <TbFilePencil className="me-3 fs-3" style={{ color: "green" }} />
                            <div>
                                <a
                                    className="wd-assignment-link"
                                    href="#/Kanbas/Courses/1234/Assignments/789"
                                    style={{ color: "#212529", fontWeight: "bold", textDecoration: "none"}}
                                >
                                    A3
                                </a>
                                <br />
                                <span style={{ color: "red" }}>Multiple Modules</span> | <span style={{ fontWeight: "bold", color: "grey" }}>Not Available until</span> May 20 at
                                12:00am |
                                <br />
                                Due May 27 at 11:59pm | 100 pts
                            </div>
                            <div className="ms-auto d-flex">
                                <AssignmentControlButtons />
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
