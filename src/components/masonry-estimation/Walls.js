import React, { useState, useEffect } from 'react';
import {
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    FormInput,
    FormSelect,
    Card,
    CardHeader,
    CardBody
  } from "shards-react";

function Walls(props) {
    const [values, setValues] = useState({
        wallHeight: '',
        wallPerimeter: '',
        size_of_CHB: '',
        classMixture: '',
        plasterThickness: '',
        doubleSided: '',
        reinforcing_bars: {
            vertical_spacing: '',
            horizontal_spacing: '',
            rebar_length: '',
            tie_wire_length: '',
            rebar_diameter: ''
        },
        door_window_gross_area: {
            doors: [
                {
                    area: '',
                    count: ''
                }
            ],
            windows: [
                {
                    area: '',
                    count: ''
                }
            ]
        }
    });

    const [doorCount, setDoorCount] = useState(1);
    const [windowCount, setWindowCount] = useState(1);

    useEffect(() => {
        props.setMasonryValues(value => {
            value.wallsValues[props.index] = {
                values: values
            }

            return value;
        });
    }, [values]);

    return (
        <Card small className="mb-4">
            <CardHeader className="border-bottom">
                <h6 className="m-0">Walls</h6>

                {/* <button className="btn-add-header" onClick={() => {props.incrementColumnFootingFormCount()}}><i className="material-icons">add</i></button> */}
            </CardHeader>
            <CardBody className="p-0 pb-3">
                <ListGroup flush>
                    <ListGroupItem className="p-3">
                        <Row>
                            <Col>
                                <Row form>
                                    <Col md="12" className="form-group">
                                        <label htmlFor="fw-cd-type-of-column">Type of Column</label>
                                        <FormSelect onChange={e => setValues(e.target.value)} id="fw-cd-type-of-column">
                                            <option value="rectangular">Rectangular</option>
                                            <option value="circular">Circular</option>
                                        </FormSelect>
                                    </Col>
                                </Row>

                                <Row form>
                                    <Col xxsm="6" className="form-group">
                                        <label htmlFor="ew-cfd-column-count">Number of Columns</label>
                                        <FormInput onChange={e => setValues(e.target.value)} type="number" id="ew-cfd-column-count" placeholder="Enter number of columns" />
                                    </Col>
                                    <Col xxsm="6" className="form-group">
                                        <label htmlFor="ew-cfd-column-height">Column Height (m)</label>
                                        <FormInput onChange={e => setValues(e.target.value)} type="number" id="ew-cfd-column-height" placeholder="Enter height in meters" />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </ListGroupItem>
                </ListGroup>
            </CardBody>
        </Card>
    );
}

export default Walls;