import React from "react";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  Button
} from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

const AddNewEstimationForm = () => (
  <ListGroup flush>
    <ListGroupItem className="p-3">
      <Row>
        <Col>
          <Form>
            <Row form>
              <Col md="12" className="form-group">
                <label htmlFor="es-estimation-label">Estimation Label</label>
                <FormInput
                  id="es-estimation-label"
                  type="text"
                  placeholder="New Estimation Label"
                />
              </Col>
            </Row>

            <Button type="submit">Create New Estimation</Button>
          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
);

export default AddNewEstimationForm;
