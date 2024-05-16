export default function Modules() {
    return (
        <div>
            <button id="wd-collapse-all">Collapse All</button>{" "}
            <button id="wd-view-progress">View Progress</button>{" "}
            <select id="wd-filter">
                <option selected value="all">
                    Publish All
                </option>
                <option value="completed">Publish Completed</option>
            </select>{" "}
            <button id="wd-add-module">+ Module</button>
            <ul id="wd-modules">
                <li>
                    <div>
                        Week 1, Lecture 1 - Course Introduction, Syllabus,
                        Agenda
                    </div>
                    <ul>
                        <li>
                            <span>LEARNING OBJECTIVES</span>
                            <ul>
                                <li>Introduction to the course</li>
                                <li>Learn what is Web Development</li>
                            </ul>
                        </li>
                        <li>
                            <span>READING</span>
                            <ul>
                                <li>
                                    Full Stack Developer - Chapter 1 -
                                    Introduction
                                </li>
                                <li>
                                    Full Stack Developer - Chapter 2 - Creating
                                    User
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span>SLIDES</span>
                            <ul>
                                <li>Introduction to Web Development</li>
                                <li>Creating an HTTP server with Node.js</li>
                                <li>Creating a React Application</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <div>
                        Week 1, Lecture 2 - Formatting User Interfaces with HTML
                    </div>
                    <ul>
                        <li>
                            <span>LEARNING OBJECTIVES</span>
                            <ul>
                                <li>
                                    Learn how to create user interfaces with
                                    HTML
                                </li>
                                <li>Deploy the assignment to Netlify</li>
                            </ul>
                        </li>
                        <li>
                            <span>SLIDES</span>
                            <ul>
                                <li>Introduction to HTML and the DOM</li>
                                <li>
                                    Formatting Web content with Headings and
                                </li>
                                <li>
                                    Formatting content with Lists and Tables
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
