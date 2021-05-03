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
            CHB: {
                '4 x 8 x 16': '',
                '6 x 8 x 16': '',
                '8 x 8 x 16': ''
            },
            rebar: '',
            tie_wire: ''
        }
    );

    useEffect(() => {
        props.setMasonryValues(value => {
            value.materialCostsValues = costValues;

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
                        <Row className="subdivision">
                            <Col md="12">
                                <Row form>
                                    <Col xxsm="6" className="form-group">
                                        <label htmlFor="fw-mc-plywood">Cement Bags (PHP)</label>
                                        <FormInput type="number" id="fw-mc-plywood" onChange={e => {
                                            const target = e.target;
                                            setCostValues(values => {
                                                values.cement_bags = target.value;

                                                return {...values};
                                            });
                                        }} value={props.masonryValues.materialCostsValues ? props.masonryValues.materialCostsValues.cement_bags : costValues.cement_bags} placeholder="Enter value in PHP" />
                                    </Col>
                                    <Col xxsn="6" className="form-group">
                                        <label htmlFor="fw-mc-wood-frame">Sand (PHP)</label>
                                        <FormInput type="number" id="fw-mc-wood-frame" onChange={e => {
                                            const target = e.target;
                                            setCostValues(values => {
                                                values.sand = target.value;

                                                return {...values};
                                            });
                                        }} value={props.masonryValues.materialCostsValues ? props.masonryValues.materialCostsValues.sand : costValues.sand} placeholder="Enter value in PHP" />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="subdivision">
                            <Col md="12">
                                <h2 className="subdivision-title">CHB</h2>
                                <Row form>
                                    <Col xxsm="4" className="form-group">
                                        <label htmlFor="fw-mc-plywood">4 x 8 x 16 in (PHP)</label>
                                        <FormInput type="number" id="fw-mc-plywood" onChange={e => {
                                            const target = e.target;
                                            setCostValues(values => {
                                                values.CHB['4 x 8 x 16'] = target.value;

                                                return {...values};
                                            });
                                        }} value={props.masonryValues.materialCostsValues.CHB ? props.masonryValues.materialCostsValues.CHB['4 x 8 x 16'] : costValues.CHB['4 x 8 x 16']} placeholder="Enter value in PHP" />
                                    </Col>
                                    <Col xxsm="4" className="form-group">
                                        <label htmlFor="fw-mc-plywood">6 x 8 x 16 in (PHP)</label>
                                        <FormInput type="number" id="fw-mc-plywood" onChange={e => {
                                            const target = e.target;
                                            setCostValues(values => {
                                                values.CHB['6 x 8 x 16'] = target.value;

                                                return {...values};
                                            });
                                        }} value={props.masonryValues.materialCostsValues.CHB ? props.masonryValues.materialCostsValues.CHB['6 x 8 x 16'] : costValues.CHB['4 x 8 x 16']} placeholder="Enter value in PHP" />
                                    </Col>
                                    <Col xxsm="4" className="form-group">
                                        <label htmlFor="fw-mc-plywood">8 x 8 x 16 in (PHP)</label>
                                        <FormInput type="number" id="fw-mc-plywood" onChange={e => {
                                            const target = e.target;
                                            setCostValues(values => {
                                                values.CHB['8 x 8 x 16'] = target.value;

                                                return {...values};
                                            });
                                        }} value={props.masonryValues.materialCostsValues.CHB ? props.masonryValues.materialCostsValues.CHB['8 x 8 x 16'] : costValues.CHB['4 x 8 x 16']} placeholder="Enter value in PHP" />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="subdivision">
                            <Col md="12">
                                <Row form>
                                    <Col xxsm="6" className="form-group">
                                        <label htmlFor="fw-mc-plywood">Rebar (PHP)</label>
                                        <FormInput type="number" id="fw-mc-plywood" onChange={e => {
                                            const target = e.target;
                                            setCostValues(values => {
                                                values.rebar = target.value;

                                                return {...values};
                                            });
                                        }} value={props.masonryValues.materialCostsValues ? props.masonryValues.materialCostsValues.rebar : costValues.rebar} placeholder="Enter value in PHP" />
                                    </Col>
                                    <Col xxsn="6" className="form-group">
                                        <label htmlFor="fw-mc-wood-frame">Tie Wire (PHP)</label>
                                        <FormInput type="number" id="fw-mc-wood-frame" onChange={e => {
                                            const target = e.target;
                                            setCostValues(values => {
                                                values.tie_wire = target.value;

                                                return {...values};
                                            });
                                        }} value={props.masonryValues.materialCostsValues ? props.masonryValues.materialCostsValues.tie_wire : costValues.tie_wire} placeholder="Enter value in PHP" />
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