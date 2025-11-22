import React, { useEffect, useState } from "react";
import { ListGroup, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link, useLocation } from "react-router-dom";

function Equipmentbytag() {
  let [equipmentdata, setEquipmentdata] = useState([]);
  let [exe, setExe] = useState([]);
  let equipment = useLocation().pathname.split("/")[2];

  async function FetchEquipment() {
    const url = "https://exercisedb.p.rapidapi.com/exercises/equipmentList";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "201f7d4684msheed7ae8591cb35fp12a367jsnb49b1b720713",
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setEquipmentdata(result);
      console.log(equipmentdata);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    FetchEquipment();
  }, []);

  async function FetchExeList() {
    const url = `https://exercisedb.p.rapidapi.com/exercises/equipment/${equipment}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "201f7d4684msheed7ae8591cb35fp12a367jsnb49b1b720713",
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setExe(result);
      console.log(result);
      console.log(exe);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    FetchExeList();
  }, [equipment]);

  useEffect(() => {
    FetchExeList();
  }, []);

  return (
    <>
      <main>
        {/*? Hero Start */}
        <div className="slider-area2">
          <div className="slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap hero-cap2 pt-70">
                    <h2>Equipment</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero End */}
        {/*? Blog Area Start */}
        <section className="blog_area single-post-area section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="blog_right_sidebar">
                  <aside className="single_sidebar_widget post_category_widget">
                    <h4 className="widget_title" style={{ color: "#2d2d2d" }}>
                      Equipment List
                    </h4>
                    {equipmentdata.map((value) => {
                      return (
                        <>
                          <ul className="list cat-list">
                            <li>
                              <Link
                                to={`/equipmentbytag/${value}`}
                                className="d-flex"
                              >
                                <p>{value}</p>
                              </Link>
                            </li>
                          </ul>
                        </>
                      );
                    })}
                  </aside>
                </div>
              </div>
              <div className="col-lg-9 posts-list">
                <Row>
                  {exe.map((value) => {
                    return (
                      <Col sm="6" md="4">
                        <Card className="my-5">
                          <Card.Img
                            variant="top"
                            src="https://www.shutterstock.com/image-vector/woman-sport-gym-vector-illustration-260nw-1677799246.jpg"
                          />
                          <Card.Body>
                            <Card.Title>
                              <h3 className="mt-2">{value.name}</h3>
                            </Card.Title>
                            <Card.Text>{value.description}</Card.Text>
                          </Card.Body>
                          <ListGroup className="list-group-flush">
                            <ListGroup.Item>
                              <b>BodyPart</b> : {value.bodyPart}
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <b>Equipment</b> : {value.equipment}
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <b>Target</b> : {value.target}
                            </ListGroup.Item>
                          </ListGroup>
                          <Card.Body>
                            <Link to={`/details/${value.id}`}>View More</Link>
                          </Card.Body>
                        </Card>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </div>
          </div>
        </section>
        {/* Blog Area End */}
      </main>
    </>
  );
}

export default Equipmentbytag;
