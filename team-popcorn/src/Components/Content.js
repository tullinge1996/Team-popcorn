import React,{Component} from "react";
import "../App.css";
import { Container, Row, Col } from 'reactstrap';



class Content extends Component {
  render(){
    return(
      <div>
      <Container className="ContentContainer">
            <Row className = "RowContent">
                <Col xl= "4" className = "ColContent">
                <h4>Financial Analytics</h4>
                <h2>Sales Overview</h2>
                </Col>
                <Col xl= "4" className = "ColContent2">
                <h4>Product Analytics</h4>
                <h2>Sales Funnel</h2>
                </Col>
                <Col xl= "4" className = "ColContent3">
                <h4>Product Analytics</h4>
                <h2>Production Inventory</h2>
                </Col>
              </Row>
            </Container>
            <Container className="ContentContainer">
                  <Row className = "RowContent">
                      <Col xl= "4" className = "ColContent">
                      <h4>Price Analytics</h4>
                      <h2>Optimisation</h2>
                      </Col>
                      <Col xl= "4" className = "ColContent2">
                      <h4>Data Queries</h4>
                      <h2>Create Data Queries</h2>
                      </Col>
                      <Col xl= "4" className = "ColContent3">
                      <h4>Data Segments</h4>
                      <h2>Create Data Segment Groups</h2>
                      </Col>
                    </Row>
                  </Container>
                  </div>
    );
  }
}
export default Content
