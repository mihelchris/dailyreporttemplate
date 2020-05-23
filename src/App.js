import React, {Component} from "react";
import { Container, Row, Col } from "react-grid-system";
import GetCurrentDate from "./components/GetCurrentDate";
import Todo from "./components/todo/Todo";
import ValueSliders from "./components/slider/ValueSliders";
import EditableText from "./components/editable/StoredEditableText";
import Header from "./components/header/Header";
import Box from "./components/box/Box";

import "normalize.css";
import "./styles/style.scss";

export default class App extends Component {

  render() {
    return (
      <div id="journal">
        <Container>
          <Row>
            <Col lg={3}>
              <Header
                level={1}
                divider={false}
                editable={true}
                className="name"
                innerText="Your name"
              />
              <EditableText
                innerText="Your occupation"
                className="occupation"
              />
  
              <Header
                level={3}
                divider={true}
                editable={false}
                className="date-title"
                innerText="Date"
              />
              <GetCurrentDate className="date" />
  
              <Header
                level={3}
                divider={true}
                editable={false}
                className="vital"
                innerText="Vital Signs"
              />
              <ValueSliders />
            </Col>
  
            <Col lg={6}>
              <Header
                level={3}
                divider={false}
                editable={false}
                className="today"
                innerText="Today"
              />
              <Todo />
  
              <Header
                level={3}
                divider={true}
                editable={false}
                className="planned"
                innerText="Planned"
              />
              <Todo />
            </Col>
  
            <Col lg={3}>
              <Header
                level={3}
                divider={false}
                editable={false}
                className="gratitudes"
                innerText="Gratitude"
              />
              <Box innerText="Your gratitude goes here" />
  
              <Header
                level={3}
                divider={true}
                editable={false}
                className="blockers"
                innerText="Blockers"
              />
              <Box innerText="Blockers" />
  
              <Header
                level={3}
                divider={true}
                editable={false}
                className="leaves"
                innerText="Leaves planned"
              />
              <Box innerText="Leaves" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
