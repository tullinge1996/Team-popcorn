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
                <h2 className="textThing"><a href ="">Sales Overview</a></h2>
                </Col>
                <Col xl= "4" className = "ColContent2">
                <h4>Product Analytics</h4>
                <h2 className="textThing"><a href ="">Sales Funnel</a></h2>
                </Col>
                <Col xl= "4" className = "ColContent3">
                <h4>Product Analytics</h4>
                <h2 className="textThing"><a href ="">Product Inventory</a></h2>
                </Col>
              </Row>
            </Container>
            <Container className="ContentContainer">
                  <Row className = "RowContent">
                      <Col xl= "4" className = "ColContent">
                      <h4>Price Analytics</h4>
                      <h2 className="textThing"><a href ="">Optimisation</a></h2>
                      </Col>
                      <Col xl= "4" className = "ColContent2">
                      <h4>Data Queries</h4>
                      <h2 className="textThing"><a href ="">Create Data Queries</a></h2>
                      </Col>
                      <Col xl= "4" className = "ColContent3">
                      <h4>Data Segments</h4>
                      <h2 className="textThing"><a href ="">Create Data Segment Groups</a></h2>
                      </Col>
                    </Row>
                  </Container>
                  </div>
    );
  }
}
export default Content
