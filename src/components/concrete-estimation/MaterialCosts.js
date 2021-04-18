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
            cement_bags: '',
            sand: '',
            gravel: ''
        }
    );

    useEffect(() => {
        props.setConcreteValues(value => {
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
                                    <Col md="4" className="form-group">
                                        <label htmlFor="fw-mc-plywood">Cement Bags (PHP)</label>
                                        <FormInput type="number" id="fw-mc-plywood" onChange={e => {
                                            const target = e.target;
                                            setCostValues(values => {
                                                values.cement_bags = target.value;

                                                return values;
                                            });
                                        }} placeholder="Enter value in PHP" />
                                    </Col>
                                    <Col md="4" className="form-group">
                                        <label htmlFor="fw-mc-wood-frame">Sand (PHP)</label>
                                        <FormInput type="number" id="fw-mc-wood-frame" onChange={e => {
                                            const target = e.target;
                                            setCostValues(values => {
                                                values.sand = target.value;

                                                return values;
                                            });
                                        }} placeholder="Enter value in PHP" />
                                    </Col>
                                    <Col md="4" className="form-group">
                                        <label htmlFor="fw-mc-wood-frame">Gravel (PHP)</label>
                                        <FormInput type="number" id="fw-mc-wood-frame" onChange={e => {
                                            const target = e.target;
                                            setCostValues(values => {
                                                values.gravel = target.value;

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