import React, { useState, useEffect } from 'react';
import {
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    FormInput,
    Card,
    CardHeader,
    CardBody
  } from "shards-react";

function MaterialCosts(props) {
    const [costValues, setCostValues] = useState(
        {
            plywood: '',
            wood_frame: '',
            lumber: ['', '']
        }
    );

    useEffect(() => {
        props.setFormWorkValues(value => {
            value.materialCostsValues = {
                costValues: costValues
            }

            return value;
        });
    }, [costValues]);

    return (
        <Card small className="mb-4">
            <CardHeader className="border-bottom">
                <h6 className="m-0">Material Costs</h6>
            </CardHeader>

            <CardBody className="p-0 pb-3">
                <ListGroup flush>
                    <ListGroupItem className="p-3">
                        <Row>
                            <Col md="12">
                                <Row form>
                                    <Col md="6" className="form-group">
                                        <label htmlFor="fw-mc-plywood">Plywood (PHP)</label>
                                        <FormInput type="number" id="fw-mc-plywood" onChange={e => {
                                            const target = e.target;
                                            setCostValues(values => {
                                                values.plywood = target.value;

                                                return values;
                                            });
                                        }} placeholder="Enter value in PHP" />
                                    </Col>
                                    <Col md="6" className="form-group">
                                        <label htmlFor="fw-mc-wood-frame">Wood Frame (PHP)</label>
                                        <FormInput type="number" id="fw-mc-wood-frame" onChange={e => {
                                            const target = e.target;
                                            setCostValues(values => {
                                                values.wood_frame = target.value;

                                                return values;
                                            });
                                        }} placeholder="Enter value in PHP" />
                                    </Col>
                                </Row>

                                <Row form>
                                    <Col md="6" className="form-group">
                                        <label htmlFor="fw-mc-lumber-0">Lumber (PHP)</label>
                                        <FormInput type="number" id="fw-mc-lumber-0" onChange={e => {
                                            const target = e.target;
                                            setCostValues(values => {
                                                values.lumber[0] = target.value;

                                                return values;
                                            });
                                        }} placeholder="Enter value in PHP" />
                                    </Col>
                                    <Col md="6" className="form-group">
                                        <label htmlFor="fw-mc-lumber-1">Lumber (PHP)</label>
                                        <FormInput type="number" id="fw-mc-lumber-1" onChange={e => {
                                            const target = e.target;
                                            setCostValues(values => {
                                                values.lumber[1] = target.value;

                                                return values;
                                            });
                                        }} placeholder="Enter value in PHP" />
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

export default MaterialCosts;