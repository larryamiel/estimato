import React, { useEffect, useState } from 'react';
import {
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    FormInput,
    Card,
    CardHeader,
    CardBody,
    Button
  } from "shards-react";

function BeamDetails(props) {
    const [beamDimensions, setBeamDimensions] = useState({x: '', y: ''});
    const [beamValues, setBeamValues] = useState([{length: '', amount: ''}]);
    const [beamCount, setBeamCount] = useState(1);
    
    useEffect(() => {
        props.setConcreteValues(value => {
            value.beamDetailsValues[props.index] = {
                beamsDimensions: beamDimensions,
                beamValues: beamValues,
                beamCount: beamCount
            }

            return value;
        });
    }, [beamDimensions, beamValues, beamCount]);

    return (
        <Card small className="mb-4">
            <CardHeader className="border-bottom">
                <h6 className="m-0">Beam Details</h6>

                {/* <button className="btn-add-header" onClick={() => {props.incrementColumnFootingFormCount()}}><i className="material-icons">add</i></button> */}
            </CardHeader>

            <CardBody className="p-0">
                <ListGroup flush>
                    <ListGroupItem className="p-3 pb-0">
                        <Row>
                            <Col>
                                <Row form>
                                    <Col md="6" className="form-group">
                                        <label htmlFor="fw-bd-length">Length (x)</label>
                                        <FormInput type="number" id="fw-bd-length" onChange={e => setBeamDimensions(dimensions => {
                                            dimensions.x = e.target.value;
                                            return dimensions;
                                        })} placeholder="Enter length in meters" />
                                    </Col>

                                    <Col md="6" className="form-group">
                                        <label htmlFor="fw-bd-width">Width (y)</label>
                                        <FormInput type="number" id="fw-bd-width" onChange={e => setBeamDimensions(dimensions => {
                                            dimensions.y = e.target.value;
                                            return dimensions;
                                        })} placeholder="Enter width in meters" />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </ListGroupItem>
                </ListGroup>
            </CardBody>

            <CardBody className="p-0 pb-3">
                <ListGroup flush>
                    <ListGroupItem className="p-3">
                        <Row className="subdivision">
                            <Col md="12">
                                <h2 className="subdivision-title">Beams</h2>
                                {[...Array(beamCount)].map((e, i) => 
                                    <Row form key={i} id={i}>
                                        <Col md="6" className="form-group">
                                            <label htmlFor="fw-bd-beam-length">Beam Length (m)</label>
                                            <FormInput type="number" id="fw-bd-beam-length" onChange={e => {
                                                const target = e.target;

                                                setBeamValues(value => {
                                                    // Push into the value to define it
                                                    if (!value[i]) value[i] = {length: '', amount: ''};

                                                    value[i].length = target.value;

                                                    return value;
                                                })
                                            }} placeholder="Enter length in meters" />
                                        </Col>
                                        <Col md="6" className="form-group">
                                            <label htmlFor="fw-bd-beam-amount">Beam Amount</label>
                                            <FormInput type="number" id="fw-bd-beam-amount" onChange={e => {
                                                const target = e.target;

                                                setBeamValues(value => {
                                                    // Push into the value to define it
                                                    if (!value[i]) value[i] = {length: '', amount: ''};

                                                    value[i].amount = target.value;
                                                    return value;
                                                })
                                            }} placeholder="Enter amount" />
                                        </Col>
                                    </Row>
                                )}
                                <Button type="submit" icon="add" onClick={e => {
                                    console.log(beamValues);
                                    
                                    setBeamCount(e => e + 1);
                                }}>Add a Beam</Button>
                            </Col>
                        </Row>
                    </ListGroupItem>
                </ListGroup>
            </CardBody>
        </Card>
    );
}

export default BeamDetails;