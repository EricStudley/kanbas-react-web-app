import "./index.css";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1
                id="wd-dashboard-title"
                style={{
                    fontWeight: "bold",
                }}
            >
                Dashboard
            </h1>{" "}
            <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5">
                    <div
                        className="wd-dashboard-course col"
                        style={{ width: "296px" }}
                    >
                        <div className="card shadow">
                            <img
                                src="images/reactjs.jpg"
                                alt=""
                                className="card-img-top"
                                style={{ width: "auto", height: "146px" }}
                            />
                            <div className="card-body">
                                <a
                                    className="wd-dashboard-course-link card-title"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{
                                        textDecoration: "none",
                                        color: "navy",
                                        fontWeight: "bold",
                                    }}
                                >
                                    CS1234 React JS
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Full Stack software developer
                                </p>
                                <a
                                    href="#/Kanbas/Courses/1234/Home"
                                    className="btn btn-primary"
                                >
                                    {" "}
                                    Go{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="wd-dashboard-course col"
                        style={{ width: "296px" }}
                    >
                        <div className="card shadow">
                            <img
                                src="images/logic.png"
                                alt=""
                                className="card-img-top"
                                style={{ width: "auto", height: "146px" }}
                            />
                            <div className="card-body">
                                <a
                                    className="wd-dashboard-course-link card-title"
                                    href="#/Kanbas/Courses/1000/Home"
                                    style={{
                                        textDecoration: "none",
                                        color: "navy",
                                        fontWeight: "bold",
                                    }}
                                >
                                    CS1000 Intro to Logic
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Introduction to programming logic
                                </p>
                                <a
                                    href="#/Kanbas/Courses/1000/Home"
                                    className="btn btn-primary"
                                >
                                    {" "}
                                    Go{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="wd-dashboard-course col"
                        style={{ width: "296px" }}
                    >
                        <div className="card shadow">
                            <img
                                src="images/algorithms.jpg"
                                alt=""
                                className="card-img-top"
                                style={{ width: "auto", height: "146px" }}
                            />
                            <div className="card-body">
                                <a
                                    className="wd-dashboard-course-link card-title"
                                    href="#/Kanbas/Courses/2000/Home"
                                    style={{
                                        textDecoration: "none",
                                        color: "navy",
                                        fontWeight: "bold",
                                    }}
                                >
                                    CS2000 Algorithms
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Algorithm design and analysis
                                </p>
                                <a
                                    href="#/Kanbas/Courses/2000/Home"
                                    className="btn btn-primary"
                                >
                                    {" "}
                                    Go{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="wd-dashboard-course col"
                        style={{ width: "296px" }}
                    >
                        <div className="card shadow">
                            <img
                                src="images/datastructures.jpg"
                                alt=""
                                className="card-img-top"
                                style={{ width: "auto", height: "146px" }}
                            />
                            <div className="card-body">
                                <a
                                    className="wd-dashboard-course-link card-title"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{
                                        textDecoration: "none",
                                        color: "navy",
                                        fontWeight: "bold",
                                    }}
                                >
                                    CS3000 Data Structures
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Data structures and algorithms
                                </p>
                                <a
                                    href="#/Kanbas/Courses/1234/Home"
                                    className="btn btn-primary"
                                >
                                    {" "}
                                    Go{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="wd-dashboard-course col"
                        style={{ width: "296px" }}
                    >
                        <div className="card shadow">
                            <img
                                src="images/operatingsystems.jpg"
                                alt=""
                                className="card-img-top"
                                style={{ width: "auto", height: "146px" }}
                            />
                            <div className="card-body">
                                <a
                                    className="wd-dashboard-course-link card-title"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{
                                        textDecoration: "none",
                                        color: "navy",
                                        fontWeight: "bold",
                                    }}
                                >
                                    CS4000 Operating Systems
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Operating systems and system programming
                                </p>
                                <a
                                    href="#/Kanbas/Courses/1234/Home"
                                    className="btn btn-primary"
                                >
                                    {" "}
                                    Go{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="wd-dashboard-course col"
                        style={{ width: "296px" }}
                    >
                        <div className="card shadow">
                            <img
                                src="images/computernetworks.jpg"
                                alt=""
                                className="card-img-top"
                                style={{ width: "auto", height: "146px" }}
                            />
                            <div className="card-body">
                                <a
                                    className="wd-dashboard-course-link card-title"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{
                                        textDecoration: "none",
                                        color: "navy",
                                        fontWeight: "bold",
                                    }}
                                >
                                    CS5000 Computer Networks
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Computer networks and network programming
                                </p>
                                <a
                                    href="#/Kanbas/Courses/1234/Home"
                                    className="btn btn-primary"
                                >
                                    {" "}
                                    Go{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="wd-dashboard-course col"
                        style={{ width: "296px" }}
                    >
                        <div className="card shadow">
                            <img
                                src="images/machinelearning.jpg"
                                alt=""
                                className="card-img-top"
                                style={{ width: "auto", height: "146px" }}
                            />
                            <div className="card-body">
                                <a
                                    className="wd-dashboard-course-link card-title"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{
                                        textDecoration: "none",
                                        color: "navy",
                                        fontWeight: "bold",
                                    }}
                                >
                                    CS6000 Machine Learning
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Machine learning and artificial intelligence
                                </p>
                                <a
                                    href="#/Kanbas/Courses/1234/Home"
                                    className="btn btn-primary"
                                >
                                    {" "}
                                    Go{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
