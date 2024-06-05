import React from "react";

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <div className="row">
                <div className="col">
                    <label htmlFor="wd-name">Assignment Name</label>
                    <br />
                    <br />
                    <input
                        id="wd-name"
                        value="A1 - ENV + HTML"
                        className="form-control"
                    />
                </div>
            </div>
            <br />
            <br />
            <div className="row">
                <div className="col">
                    <textarea
                        id="wd-description"
                        style={{ width: "100%" }}
                        className="form-control"
                    >
                        The assignment is available online. Submit a link to the
                        landing page.
                    </textarea>
                </div>
            </div>
            <br />
            <br />
            <div className="row">
                <label htmlFor="wd-points" className="col">
                    Points
                </label>
                <input
                    id="wd-points"
                    value={100}
                    className="form-control col"
                />
            </div>
            <br />
            <div className="row">
                <label htmlFor="wd-group" className="col">
                    Assignment Group
                </label>
                <select id="wd-group" className="form-control col">
                    <option selected value="ASSIGNMENTS">
                        ASSIGNMENTS
                    </option>
                    <option value="QUIZZES">QUIZZES</option>
                    <option value="TESTS">TESTS</option>
                    <option value="LABS">LABS</option>
                </select>
            </div>
            <br />
            <div className="row">
                <label htmlFor="wd-display-grade-as" className="col">
                    Display Grade as
                </label>
                <select id="wd-display-grade-as" className="form-control col">
                    <option selected value="Percentage">
                        Percentage
                    </option>
                    <option value="Value">Value</option>
                </select>
            </div>
            <br />
            <div className="row">
                <label htmlFor="wd-submission-type" className="col">
                    Submission Type
                </label>
                <div
                    className="col"
                    style={{
                        border: "1px solid grey",
                        borderRadius: "3px",
                        padding: "10px",
                    }}
                >
                    <select id="wd-submission-type" className="form-control">
                        <option selected value="ONLINE">
                            Online
                        </option>
                        <option value="IN-PERSON">In-person</option>
                    </select>
                    <br />
                    <br />
                    <label htmlFor="wd-online-entry-options">
                        Online Entry Options:
                    </label>
                    <br />
                    <div className="form-check">
                        <input
                            type="checkbox"
                            name="wd-online-entry-options"
                            id="wd-text-entry"
                            className="form-check-input"
                        />
                        <label htmlFor="wd-text-entry">Text Entry</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            name="wd-online-entry-options"
                            id="wd-website-url"
                            className="form-check-input"
                        />
                        <label htmlFor="wd-website-url">Website URL</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            name="wd-online-entry-options"
                            id="wd-media-recordings"
                            className="form-check-input"
                        />
                        <label htmlFor="wd-media-recordings">
                            Media Recordings
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            name="w d-online-entry-options"
                            id="wd-student-annotations"
                            className="form-check-input"
                        />
                        <label htmlFor="wd-student-annotations">
                            Student Annotations
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            name="wd-online-entry-options"
                            id="wd-file-upload"
                            className="form-check-input"
                        />
                        <label htmlFor="wd-file-upload">File Uploads</label>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="row">
                <div className="col">
                    <label htmlFor="wd-assign-to">Assign</label>
                </div>
                <div className="col">
                    <label htmlFor="wd-assign-to">Assign to</label>
                    <br />
                    <input
                        id="wd-assign-to"
                        value="Everyone"
                        className="form-control"
                    />
                    <br />
                    <label htmlFor="wd-due-date">Due Date</label>
                    <br />
                    <input
                        type="date"
                        id="wd-due-date"
                        value="2024-05-13"
                        className="form-control"
                    />
                    <br />
                    <label htmlFor="wd-available-from">Available from</label>
                    <br />
                    <input
                        type="date"
                        id="wd-available-from"
                        value="2024-05-06"
                        className="form-control"
                    />
                    <br />
                    <label htmlFor="wd-available-until">Until</label>
                    <br />
                    <input
                        type="date"
                        id="wd-available-until"
                        value="2024-05-20"
                        className="form-control"
                    />
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col">
                    <button
                        id="wd-cancel"
                        className="btn btn-secondary float-end"
                    >
                        Cancel
                    </button>
                    <button id="wd-save" className="btn btn-primary float-end me-2">
                        Save
                    </button>
                </div>
            </div>
            <br />
        </div>
    );
}
