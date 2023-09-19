import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { data1 } from "./App";
import { data2 } from "./App";
import { data3 } from "./App";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaPortrait } from "react-icons/fa";

const Notes = () => {
  const [values, setValues] = useContext(data1);
  const [addBtn, addBtnValues] = useContext(data2);
  const [editBtn, editBtnValues] = useContext(data3);

  let navigate = useNavigate();
  const deletebtn = (e) => {
    setValues(
      values.filter((item) => {
        return item.id != e.id;
      })
    );
  };
  console.log(values, "delete data");

  const handle = (dataId) => {
    addBtnValues(true);
    editBtnValues(false);
    navigate("/", { state: dataId });
  };

  return (
    <>
      <Container
        fluid
        style={{ backgroundColor: "rgb(227, 232, 248)", paddingTop: "50px" }}
      >
        <h3 className="text-center">
          <FaPortrait /> Notes
        </h3>
        <h6 className="text-center">Recently viewed</h6>
        <Row>
          {values.map((value) => {
            return (
              <>
                <Col
                  className="m-5 p-5 border rounded-3"
                  style={{
                    backgroundColor: "rgb(249, 247, 247)",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                >
                  <Row className="fw-bold">
                    <div
                      className="border"
                      style={{
                        color: "rgb(26, 25, 72)",
                        backgroundColor: "red",
                        boxShadow:
                          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                      }}
                    >
                      {value.title}
                    </div>
                    <Row>
                      <div className="d-flex">
                        <Button
                          style={{ width: "50px", height: "60px" }}
                          variant="success"
                          onClick={() => handle(value)}
                        >
                          <FaEdit />
                          Edit
                        </Button>
                        <Button
                          style={{ width: "70px", height: "60px" }}
                          variant="danger"
                          onClick={() => deletebtn(value)}
                        >
                          <FaTrash />
                          Delete
                        </Button>
                      </div>
                    </Row>
                  </Row>
                  <Row>{value.content}</Row>
                  <Row className="fw-bold">{value.day}</Row>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Notes;
