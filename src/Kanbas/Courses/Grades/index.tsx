import { FaSearch } from "react-icons/fa";
import GradesControls from "./GradesControls";
import { FiFilter } from "react-icons/fi";

export default function Grades() {
    return (
        <div id="wd-grades" className="ms-5">
            <br />
            <br />
            <GradesControls />
            <br />
            <br />
            <br />
            <div className="row">
                <div className="col">
                    <label
                        htmlFor="wd-student-names"
                        className="fw-bold fs-6 mb-2"
                    >
                        Student Names
                    </label>
                    <br />
                    <div className="input-group">
                        <span className="input-group-text">
                            <FaSearch />
                        </span>
                        <input
                            id="wd-student-names"
                            type="text"
                            className="form-control me-1"
                            placeholder="Search..."
                        />
                    </div>
                </div>
                <div className="col">
                    <label
                        htmlFor="wd-assignment-names"
                        className="fw-bold fs-6 mb-2"
                    >
                        Assignment Names
                    </label>
                    <br />
                    <div className="input-group">
                        <span className="input-group-text">
                            <FaSearch />
                        </span>
                        <input
                            id="wd-assignment-names"
                            type="text"
                            className="form-control me-1"
                            placeholder="Search..."
                        />
                    </div>
                </div>
            </div>
            <br />
            <button
                id="wd-view-progress"
                className="btn btn-lg btn-light me-3 mb-4 float-start"
            >
                <FiFilter className="fs-4" /> Apply Filters
            </button>
            <div className="container mt-4">
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Student Name</th>
          <th>A1 SETUP <br />Out of 100</th>
          <th>A2 HTML <br />Out of 100</th>
          <th>A3 CSS <br />Out of 100</th>
          <th>A4 BOOTSTRAP <br />Out of 100</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-danger">Jane Adams</td>
          <td><input type="text" className="form-control border-0" value="100%"/></td>
          <td><input type="text" className="form-control border-0" value="96.67%"/></td>
          <td><input type="text" className="form-control border-0" value="92.18%"/></td>
          <td><input type="text" className="form-control border-0" value="66.22%"/></td>
        </tr>
        <tr>
          <td className="text-danger">Christina Allen</td>
          <td><input type="text" className="form-control border-0" value="100%"/></td>
          <td><input type="text" className="form-control border-0" value="100%"/></td>
          <td><input type="text" className="form-control border-0" value="100%"/></td>
          <td><input type="text" className="form-control border-0" value="100%"/></td>
        </tr>
        <tr>
          <td className="text-danger">Samreen Ansari</td>
          <td><input type="text" className="form-control border-0" value="100%"/></td>
          <td><input type="text" className="form-control border-0" value="100%"/></td>
          <td><input type="text" className="form-control border-0" value="100%"/></td>
          <td><input type="text" className="form-control border-0" value="100%"/></td>
        </tr>
        <tr>
          <td className="text-danger">Han Bao</td>
          <td><input type="text" className="form-control border-0" value="100%"/></td>
          <td><input type="text" className="form-control border-0" value="100%"/></td>
          <td><input type="text" className="form-control border-0" value="88.03%"/></td>
          <td><input type="text" className="form-control border-0" value="98.99%"/></td>
        </tr>
        <tr>
          <td className="text-danger">Mahi Sai Srinivas Bobbili</td>
          <td><input type="text" className="form-control border-0" value="100%"/></td>
          <td><input type="text" className="form-control border-0" value="96.67%"/></td>
          <td><input type="text" className="form-control border-0" value="98.37%"/></td>
          <td><input type="text" className="form-control border-0" value="100%"/></td>
        </tr>
        <tr>
          <td className="text-danger">Siran Cao</td>
          <td><input type="text" className="form-control border-0" value="100%"/></td>
          <td><input type="text" className="form-control border-0" value="100%"/></td>
          <td><input type="text" className="form-control border-0" value="100%"/></td>
          <td><input type="text" className="form-control border-0" value="100%"/></td>
        </tr>
        <tr>
          <td className="text-danger">Kathryn Chalmers</td>
          <td><input type="text" className="form-control border-0" value="100%"/></td>
          <td><input type="text" className="form-control border-0" value="100%"/></td>
          <td><input type="text" className="form-control border-0" value="98.5%"/></td>
          <td><input type="text" className="form-control border-0" value="100%"/></td>
        </tr>
        <tr>
          <td className="text-danger">Chih-Yang Chen</td>
          <td><input type="text" className="form-control border-0" value="100%"/></td>
          <td><input type="text" className="form-control border-0" value="81.67%"/></td>
          <td><input type="text" className="form-control border-0" value="79.93%"/></td>
          <td><input type="text" className="form-control border-0" value="54.46%"/></td>
        </tr>
      </tbody>
    </table>
  </div>
        </div>
    );
}
