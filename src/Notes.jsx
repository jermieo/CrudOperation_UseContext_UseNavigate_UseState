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
      <Container fluid>
        <h3>My Notes</h3>
        <h6>Recently viewed</h6>
        <Row>
          {values.map((value) => {
            return (
              <>
                <Col
                  className=" m-5 p-5 border rounded-3"
                  style={{
                    backgroundColor: "red",
                  }}
                >
                  <Row className="fw-bold">
                    {value.title}
                    <Row>
                      <Button
                        style={{ width: "70px" }}
                        variant="success"
                        onClick={() => handle(value)}
                      >
                        Edit
                      </Button>
                      <Button
                        style={{ width: "70px" }}
                        variant="danger"
                        onClick={() => deletebtn(value)}
                      >
                        Delete
                      </Button>
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
