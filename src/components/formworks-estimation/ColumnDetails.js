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

function ColumnDetails(props) {
    const [columnType, setColumnType] = useState('rectangular');

    const [columnRectangular, setColumnRectangular] = useState({x: undefined, y: undefined, z: undefined});
    const [columnCircular, setColumnCircular] = useState({d: undefined, z: undefined});

    const [columnCount, setColumnCount] = useState();
    const [columnHeight, setColumnHeight] = useState();

    useEffect(() => {
        props.setFormWorkValues(value => {
            value.columnDetailsValues[props.index] = {
                columnType: columnType,
                columnRectangular: columnRectangular,
                columnCircular: columnCircular,
                columnCount: columnCount,
                columnHeight: columnHeight
            }

            return value;
        });
    }, [columnType, columnRectangular, columnCircular, columnCount, columnHeight]);

    return (
        <Card small className="mb-4">
            <CardHeader className="border-bottom">
                <h6 className="m-0">Column Details</h6>

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
                                        <FormSelect onChange={e => setColumnType(e.target.value)} id="fw-cd-type-of-column">
                                            <option value="rectangular">Rectangular</option>
                                            <option value="circular">Circular</option>
                                        </FormSelect>
                                    </Col>
                                </Row>

                                { columnType === 'rectangular' &&
                                    <Row form>
                                        <Col xxsm="4" className="form-group">
                                            <label htmlFor="fw-cd-column-rectangular-x">Length (x)</label>
                                            <FormInput onChange={e => {
                                                const target = e.target;

                                                setColumnRectangular(object => {
                                                    object.x = target.value;
                                                    return object;
                                                })
                                            }} id="fw-cd-column-rectangular-x" placeholder="Enter the value x" />
                                        </Col>
                                        <Col xxsm="4" className="form-group">
                                            <label htmlFor="fw-cd-column-rectangular-y">Width (y)</label>
                                            <FormInput onChange={e => {
                                                const target = e.target;

                                                setColumnRectangular(object => {
                                                    object.y = target.value;
                                                    return object;
                                                })
                                            }} id="fw-cd-column-rectangular-y" placeholder="Enter the value y" />
                                        </Col>
                                        <Col xxsm="4" className="form-group">
                                            <label htmlFor="fw-cd-column-rectangular-z">Depth (z)</label>
                                            <FormInput onChange={e => {
                                                const target = e.target;

                                                setColumnRectangular(object => {
                                                    object.z = target.value;
                                                    return object;
                                                })
                                            }} id="fw-cd-column-rectangular-z" placeholder="Enter the value z" />
                                        </Col>
                                    </Row>
                                }

                                { columnType === 'circular' &&
                                    <Row form>
                                        <Col xxsm="6" className="form-group">
                                        <label htmlFor="fw-cd-circular-d">Diameter (d)</label>
                                            <FormInput onChange={e => {
                                                const target = e.target;

                                                setColumnCircular(object => {
                                                    object.d = target.value;
                                                    return object;
                                                })
                                            }} id="fw-cd-column-circular-d" placeholder="Enter the value d" />
                                        </Col>
                                        <Col xxsm="6" className="form-group">
                                        <label htmlFor="fw-cd-column-circular-z">Depth (z)</label>
                                            <FormInput onChange={e => {
                                                const target = e.target;

                                                setColumnCircular(object => {
                                                    object.d = target.value;
                                                    return object;
                                                })
                                            }} id="fw-cd-circular-circular-z" placeholder="Enter the value z" />
                                        </Col>
                                    </Row>
                                }

                                <Row form>
                                    <Col xxsm="6" className="form-group">
                                        <label htmlFor="ew-cfd-column-count">Number of Columns</label>
                                        <FormInput onChange={e => setColumnCount(e.target.value)} type="number" id="ew-cfd-column-count" placeholder="Enter number of columns" />
                                    </Col>
                                    <Col xxsm="6" className="form-group">
                                        <label htmlFor="ew-cfd-column-height">Column Height (m)</label>
                                        <FormInput onChange={e => setColumnHeight(e.target.value)} type="number" id="ew-cfd-column-height" placeholder="Enter height in meters" />
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

export default ColumnDetails;