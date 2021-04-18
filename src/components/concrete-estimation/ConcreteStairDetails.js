import React, { useState, useEffect } from 'react';
import {
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Button,
    FormInput,
    Card,
    CardHeader,
    CardBody
  } from "shards-react";

function ConcreteStairDetails(props) {
    const [concreteStairValues, setConcreteStairValues] = useState(
        {
            rise_length: '',
            run_length: '',
            height_of_stair: '',
            width_of_stair: '',
            length_of_stair: '',
            waistlength_thickness: '',
            landing: [
                {
                    thickness_of_landing: '',
                    landing_width: '',
                    landing_length: ''
                }
            ]
        }
    );
    const [landingCount, setLandingCount] = useState(1);

    useEffect(() => {
        props.setConcreteValues(value => {
            value.concreteStairValues[props.index] = {
                concreteStairValues: concreteStairValues
            }

            return value;
        });
    }, [concreteStairValues]);

    return (
        <Card small className="mb-4">
            <CardHeader className="border-bottom">
                <h6 className="m-0">Concrete Stair Details</h6>
            </CardHeader>

            <CardBody className="p-0 pb-3">
                <ListGroup flush>
                    <ListGroupItem className="p-3">
                        <Row>
                            <Col md="12">
                                <Row form>
                                    <Col md="4" className="form-group">
                                        <label htmlFor="fw-mc-plywood">Rise Length (m)</label>
                                        <FormInput type="number" id="fw-mc-plywood" onChange={e => {
                                            const target = e.target;
                                            setConcreteStairValues(values => {
                                                values.rise_length = target.value;

                                                return values;
                                            });
                                        }} placeholder="Enter value in meters" />
                                    </Col>
                                    <Col md="4" className="form-group">
                                        <label htmlFor="fw-mc-wood-frame">Run Length (m)</label>
                                        <FormInput type="number" id="fw-mc-wood-frame" onChange={e => {
                                            const target = e.target;
                                            setConcreteStairValues(values => {
                                                values.run_length = target.value;

                                                return values;
                                            });
                                        }} placeholder="Enter value in meters" />
                                    </Col>
                                    <Col md="4" className="form-group">
                                        <label htmlFor="fw-mc-wood-frame">Height of Stairs (m)</label>
                                        <FormInput type="number" id="fw-mc-wood-frame" onChange={e => {
                                            const target = e.target;
                                            setConcreteStairValues(values => {
                                                values.height_of_stair = target.value;

                                                return values;
                                            });
                                        }} placeholder="Enter value in meters" />
                                    </Col>
                                </Row>

                                <Row form>
                                    <Col md="4" className="form-group">
                                        <label htmlFor="fw-mc-plywood">Width of Stairs (m)</label>
                                        <FormInput type="number" id="fw-mc-plywood" onChange={e => {
                                            const target = e.target;
                                            setConcreteStairValues(values => {
                                                values.width_of_stair = target.value;

                                                return values;
                                            });
                                        }} placeholder="Enter value in meters" />
                                    </Col>
                                    <Col md="4" className="form-group">
                                        <label htmlFor="fw-mc-wood-frame">Length of Stairs (m)</label>
                                        <FormInput type="number" id="fw-mc-wood-frame" onChange={e => {
                                            const target = e.target;
                                            setConcreteStairValues(values => {
                                                values.length_of_stair = target.value;

                                                return values;
                                            });
                                        }} placeholder="Enter value in meters" />
                                    </Col>
                                    <Col md="4" className="form-group">
                                        <label htmlFor="fw-mc-wood-frame">Waistlength Thickness (m)</label>
                                        <FormInput type="number" id="fw-mc-wood-frame" onChange={e => {
                                            const target = e.target;
                                            setConcreteStairValues(values => {
                                                values.waistlength_thickness = target.value;

                                                return values;
                                            });
                                        }} placeholder="Enter value in meters" />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <h4>Landing</h4>
                                    </Col>
                                </Row>

                                {[...Array(landingCount)].map((e, i) => 
                                    <Row form key={i}>
                                        <Col md="4" className="form-group">
                                            <label htmlFor="fw-mc-lumber-0">Thickness of Landing (m)</label>
                                            <FormInput type="number" id="fw-mc-lumber-0" onChange={e => {
                                                const target = e.target;
                                                setConcreteStairValues(values => {
                                                    // Push into the value to define it
                                                    if (!values.landing[i]) values.landing[i] = {thickness_of_landing: '', landing_width: '', landing_length: ''};

                                                    values.landing[i].thickness_of_landing = target.value;

                                                    return values;
                                                });
                                            }} placeholder="Enter value in meters" />
                                        </Col>
                                        <Col md="4" className="form-group">
                                            <label htmlFor="fw-mc-lumber-1">Landing Width (m)</label>
                                            <FormInput type="number" id="fw-mc-lumber-1" onChange={e => {
                                                const target = e.target;
                                                setConcreteStairValues(values => {
                                                    // Push into the value to define it
                                                    if (!values.landing[i]) values.landing[i] = {thickness_of_landing: '', landing_width: '', landing_length: ''};
                                                    
                                                    values.landing[i].landing_width = target.value;

                                                    return values;
                                                });
                                            }} placeholder="Enter value in meters" />
                                        </Col>
                                        <Col md="4" className="form-group">
                                            <label htmlFor="fw-mc-lumber-1">Landing Length (m)</label>
                                            <FormInput type="number" id="fw-mc-lumber-1" onChange={e => {
                                                const target = e.target;
                                                setConcreteStairValues(values => {
                                                    // Push into the value to define it
                                                    if (!values.landing[i]) values.landing[i] = {thickness_of_landing: '', landing_width: '', landing_length: ''};
                                                    
                                                    values.landing[i].landing_length = target.value;

                                                    return values;
                                                });
                                            }} placeholder="Enter value in meters" />
                                        </Col>
                                    </Row>
                                )}

                                <Button type="submit" icon="add" onClick={e => {
                                    console.log(landingCount);
                                    
                                    setLandingCount(e => e + 1);
                                }}>Add a Slab</Button>
                            </Col>
                        </Row>
                    </ListGroupItem>
                </ListGroup>
            </CardBody>
        </Card>
    );
}

export default ConcreteStairDetails;