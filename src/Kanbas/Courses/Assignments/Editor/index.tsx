export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <br />
            <br />
            <input id="wd-name" value="A1 - ENV + HTML" />
            <br />
            <br />
            <textarea id="wd-description" style={{ width: "100%" }}>
                The assignment is available online. Submit a link to the landing
                page of your Web application running on Netlify. The landing
                page should include the following: Your full name and section,
                Links to each of the lab assignments, Link to the Kanbas
                application, Links to all relevant source code repositories. The
                Kanbas application should include a link to navigate back to the
                landing page.
            </textarea>
            <br />
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option selected value="ASSIGNMENTS">
                                ASSIGNMENTS
                            </option>
                            <option value="QUIZZES">QUIZZES</option>
                            <option value="TESTS">TESTS</option>
                            <option value="LABS">LABS</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">
                            Display Grade as
                        </label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option selected value="Percentage">
                                Percentage
                            </option>
                            <option value="Value">Value</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">
                            Submission Type
                        </label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
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
                        <input
                            type="checkbox"
                            name="wd-online-entry-options"
                            id="wd-text-entry"
                        />
                        <label htmlFor="wd-text-entry">Text Entry</label>
                        <br />
                        <input
                            type="checkbox"
                            name="wd-online-entry-options"
                            id="wd-website-url"
                        />
                        <label htmlFor="wd-website-url">Website URL</label>
                        <br />
                        <input
                            type="checkbox"
                            name="wd-online-entry-options"
                            id="wd-media-recordings"
                        />
                        <label htmlFor="wd-media-recordings">
                            Media Recordings
                        </label>
                        <br />
                        <input
                            type="checkbox"
                            name="w d-online-entry-options"
                            id="wd-student-annotations"
                        />
                        <label htmlFor="wd-student-annotations">
                            Student Annotations
                        </label>
                        <br />
                        <input
                            type="checkbox"
                            name="wd-online-entry-options"
                            id="wd-file-upload"
                        />
                        <label htmlFor="wd-file-upload">File Uploads</label>
                        <br />
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign</label>
                    </td>
                    <td>
                        <label htmlFor="wd-assign-to">Assign to</label>
                        <br />
                        <input id="wd-assign-to" value="Everyone" />
                        <br />
                        <br />
                        <label htmlFor="wd-due-date">Due Date</label>
                        <br />
                        <input
                            type="date"
                            id="wd-due-date"
                            value="2024-05-13"
                        />
                        <br />
                        <br />
                        <table>
                            <tr>
                                <td align="left" valign="top">
                                    <label htmlFor="wd-available-from">
                                        Available from
                                    </label>
                                </td>
                                <td>
                                    <label htmlFor="wd-available-until">
                                        Until
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input
                                        type="date"
                                        id="wd-available-from"
                                        value="2024-05-06"
                                    />
                                    <br />
                                </td>
                                <td>
                                    <input
                                        type="date"
                                        id="wd-available-until"
                                        value="2024-05-20"
                                    />
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            <hr />
            <table style={{ width: "100%" }}>
                <tr>
                    <td align="right">
                        <button id="wd-cancel">Cancel</button>{" "}
                        <button id="wd-save">Save</button>
                    </td>
                </tr>
            </table>
        </div>
    );
}
