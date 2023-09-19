import { useState, useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ArrayData from "./ArrayData";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { data1 } from "./App";
import { data2 } from "./App";
import { data3 } from "./App";
import "./App.css";

const Home = () => {
  const obj = { id: null, title: "", content: "" };
  const [forms, setValue] = useState(obj);
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  const [values, setValues] = useContext(data1);
  const [addBtn, addBtnValues] = useContext(data2);
  const [editBtn, editBtnValues] = useContext(data3);

  if (data != null) {
    obj.title = data.title;
    obj.content = data.content;
    obj.id = data.id;
    obj.day = data.day;
  }
  const Onchanges = (e) => {
    const { name, value } = e.target;
    setValue({ ...forms, [name]: value });
  };
  const handleAdd = (event) => {
    event.preventDefault();

    if (forms.title != "" && forms.content != "") {
      values.push({
        title: forms.title,
        content: forms.content,
        day: "5 day ago",
        id: ArrayData.length + 1,
      });

      console.log(values, "ArrayData Add");
      setValues(values);
      navigate("/note");
    } else {
      console.log("else -> add data is empty");
    }
  };

  const handleupdate = (event) => {
    event.preventDefault();
    setValues(values.map((item) => (item.id === forms.id ? forms : item)));
    console.log(values, "updata data1");

    // setValues(v1);
    navigate("/note");
  };
  return (
    <div>
      <Container
        style={{
          backgroundColor: "rgb(227, 232, 248)",
          marginLeft: "220px",
          marginTop: "220px",
        }}
      >
        <Row
          className="m-5 p-4 text-capitalize border rounded-3"
          style={{
            backgroundColor: "rgb(249, 247, 247)",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <Col>
            <h3 className="text-center">Add a Note</h3>
          </Col>
          <Row>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                Title
              </span>
              <input
                type="text"
                class="form-control"
                placeholder=""
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={forms.title}
                name="title"
                onChange={Onchanges}
              />
            </div>
          </Row>
          <Row className="xm-12">
            <FloatingLabel controlId="floatingTextarea2" label="Content">
              <Form.Control
                as="textarea"
                placeholder=""
                style={{ height: "100px" }}
                value={forms.content}
                name="content"
                onChange={Onchanges}
              />
            </FloatingLabel>
          </Row>
        </Row>
        <div className="text-center d-flex justify-content-evenly">
          <Button
            variant="success"
            type="submit"
            disabled={addBtn}
            onClick={() => handleAdd(event)}
          >
            Add data
          </Button>

          <Button
            variant="success"
            type="submit"
            disabled={editBtn}
            onClick={() => handleupdate(event)}
          >
            Update data
          </Button>
        </div>
      </Container>
      <div style={{ marginTop: "368px" }}></div>
    </div>
  );
};

export default Home;
