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

function PlywoodAndLumber(props) {
    const [palValues, setPalValues] = useState(
        {
            size_of_plywood: {
                x: '',
                y: ''
            },
            wood_frame_size: '',
            wood_frame_thickness: '',
            lumber_size: {
                vertical: '',
                horizontal: '',
                diagonal: ''
            },
            metal_sheets: '',
            spacing_for_vertical_ribs: '',
            length_of_steel_bar: ''
        }
    );

    useEffect(() => {
        props.setFormWorkValues(value => {
            value.plywoodAndLumberValues = {
                palValues: palValues
            }

            return value;
        });
    }, [palValues]);

    return (
        <Card small className="mb-4">
            <CardHeader className="border-bottom">
                <h6 className="m-0">Plywood and Lumber</h6>
            </CardHeader>

            <CardBody className="p-0 pb-3">
                <ListGroup flush>
                    <ListGroupItem className="p-3">
                        <Row>
                            <Col md="12">
                                <Row form>
                                    <Col md="6" className="form-group">
                                        <label htmlFor="fw-pal-size-of-plywood-x">Size of Plywood (x)</label>
                                        <FormInput type="number" id="fw-pal-size-of-plywood-x" onChange={e => {
                                            const target = e.target;
                                            setPalValues(values => {
                                                values.size_of_plywood.x = target.value;

                                                return values;
                                            });
                                        }} placeholder="Size of plywood x" />
                                    </Col>
                                    <Col md="6" className="form-group">
                                        <label htmlFor="fw-pal-size-of-plywood-y">Slab Vertical (m)</label>
                                        <FormInput type="number" id="fw-pal-size-of-plywood-y" onChange={e => {
                                            const target = e.target;
                                            setPalValues(values => {
                                                values.size_of_plywood.y = target.value;

                                                return values;
                                            });
                                        }} placeholder="Size of plywood y" />
                                    </Col>
                                </Row>

                                <Row form>
                                    <Col md="6" className="form-group">
                                        <label htmlFor="fw-pal-wood-frame-size">Wood Frame Size</label>
                                        <FormSelect id="fw-pal-wood-frame-size" onChange={e => {
                                            const target = e.target;
                                            setPalValues(values => {
                                                values.wood_frame_size = target.value;

                                                return values;
                                            });
                                        }} placeholder="Wood frame size">
                                            <option value='2"x2"'>2"x2"</option>
                                            <option value='2"x3"'>2"x3"</option>
                                        </FormSelect>
                                    </Col>
                                    <Col md="6" className="form-group">
                                        <label htmlFor="fw-pal-wood-frame-thickness">Wood Frame Thickness</label>
                                        <FormSelect id="fw-pal-wood-frame-thickness" onChange={e => {
                                            const target = e.target;
                                            setPalValues(values => {
                                                values.wood_frame_thickness = target.value;

                                                return values;
                                            });
                                        }} placeholder="Wood frame thickness">
                                            <option value='1/4"'>1/4" (6mm)</option>
                                            <option value='1/2"'>1/2" (12mm)</option>
                                        </FormSelect>
                                    </Col>
                                </Row>

                                <Row form>
                                    <Col md="4" className="form-group">
                                        <label htmlFor="fw-pal-lumber-size-vertical">Lumber Size Vertical</label>
                                        <FormSelect id="fw-pal-lumber-size-vertical" onChange={e => {
                                            const target = e.target;
                                            setPalValues(values => {
                                                values.lumber_size.vertical = target.value;

                                                return values;
                                            });
                                        }}>
                                            <option value='2"x2"'>2"x2"</option>
                                            <option value='2"x3"'>2"x3"</option>
                                            <option value='2"x3"'>2"x4"</option>
                                        </FormSelect>
                                    </Col>
                                    <Col md="4" className="form-group">
                                        <label htmlFor="fw-pal-lumber-size-horizontal">Lumber Size Horizontal</label>
                                        <FormSelect id="fw-pal-lumber-size-horizontal" onChange={e => {
                                            const target = e.target;
                                            setPalValues(values => {
                                                values.lumber_size.horizontal = target.value;

                                                return values;
                                            });
                                        }}>
                                            <option value='2"x2"'>2"x2"</option>
                                            <option value='2"x3"'>2"x3"</option>
                                            <option value='2"x3"'>2"x4"</option>
                                        </FormSelect>
                                    </Col>
                                    <Col md="4" className="form-group">
                                        <label htmlFor="fw-pal-lumber-size-diagonal">Lumber Size Diagonal</label>
                                        <FormSelect id="fw-pal-lumber-size-diagonal" onChange={e => {
                                            const target = e.target;
                                            setPalValues(values => {
                                                values.lumber_size.diagonal = target.value;

                                                return values;
                                            });
                                        }}>
                                            <option value='2"x2"'>2"x2"</option>
                                            <option value='2"x3"'>2"x3"</option>
                                            <option value='2"x3"'>2"x4"</option>
                                        </FormSelect>
                                    </Col>
                                </Row>

                                <Row form>
                                    <Col md="6" className="form-group">
                                        <label htmlFor="fw-pal-metal-sheets">Metal Sheets for Circular Column</label>
                                        <FormSelect id="fw-pal-metal-sheets" onChange={e => {
                                            const target = e.target;
                                            setPalValues(values => {
                                                values.metal_sheets = target.value;

                                                return values;
                                            });
                                        }}>
                                            <option value='0.90 x 2.40'>0.90 x 2.40</option>
                                            <option value='0.90 x 2.40'>1.20 x 2.40</option>
                                        </FormSelect>
                                    </Col>
                                    <Col md="6" className="form-group">
                                        <label htmlFor="fw-pal-spacing-vertical-ribs">Spacing for Vertical Ribs (cm)</label>
                                        <FormSelect id="fw-pal-spacing-vertical-ribs" onChange={e => {
                                            const target = e.target;
                                            setPalValues(values => {
                                                values.spacing_for_vertical_ribs = target.value;

                                                return values;
                                            });
                                        }}>
                                            <option value="15">15 cm</option>
                                            <option value="20">20 cm</option>
                                        </FormSelect>
                                    </Col>
                                </Row>

                                <Row form>
                                    <Col md="6" className="form-group">
                                        <label htmlFor="fw-pal-length-steel-bar">Length of Steel Bar (m)</label>
                                        <FormInput id="fw-pal-length-steel-bar" onChange={e => {
                                            const target = e.target;
                                            setPalValues(values => {
                                                values.length_of_steel_bar = target.value;

                                                return values;
                                            });
                                        }} placeholder="Length in meters" />
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

export default PlywoodAndLumber;