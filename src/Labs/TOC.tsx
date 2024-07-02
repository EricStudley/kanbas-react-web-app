import { useLocation } from "react-router";

export default function TOC() {
    const { pathname } = useLocation();
    const labList = ["Lab1", "Lab2", "Lab3", "Lab4"];
    return (
        <ul className="nav nav-pills">
            <li className="nav-item">
                <a id="wd-a" href="#/Labs" className="nav-link">
                    Labs
                </a>
            </li>
            {labList.map((lab) => (
                <li key={lab} className="nav-item">
                    <a
                        id={`wd-a${lab}`}
                        href={`#/Labs/${lab}`}
                        className={`nav-link ${
                            pathname.includes(lab) ? "active" : ""
                        }`}
                    >
                        {lab}
                    </a>
                </li>
            ))}
            <li className="nav-item">
                <a id="wd-k" href="#/Kanbas" className="nav-link">
                    Kanbas
                </a>
            </li>
            <li className="nav-item">
                <a
                    id="wd-k"
                    href="https://github.com/ericstudley"
                    className="nav-link"
                >
                    My GitHub
                </a>
            </li>
        </ul>
    );
}
