import React, { useEffect, useState } from 'react';
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

function ColumnFootingDetails(props) {
    const [columnType, setColumnType] = useState('rectangular');
    const [footingType, setFootingType] = useState('rectangular');

    const [columnRectangular, setColumnRectangular] = useState({x: '', y: '', z: ''});
    const [columnCircular, setColumnCircular] = useState({d: '', z: ''});

    const [footingRectangular, setFootingReactangular] = useState({x: '', y: '', z: ''});
    const [footingCircular, setFootingCircular] = useState({d: '', z: ''});

    const [columnCount, setColumnCount] = useState();

    useEffect(() => {
        props.setEarthworkValues(values => {
            values.columnFootingValues[props.index] = {
                columnType: columnType,
                footingType: footingType,
                columnRectangular: columnRectangular,
                columnCircular: columnCircular,
                footingRectangular: footingRectangular,
                footingCircular: footingCircular,
                columnCount: columnCount
            }

            return values;
        });
    }, [columnType, footingType, columnRectangular, columnCircular, footingRectangular, footingCircular, columnCount]);

    return (
        <Card small className="mb-4">
            <CardHeader className="border-bottom card-add-header">
                <h6 className="m-0">Column Footing Details</h6>

                <button className="btn btn-primary btn-pill btn-add-header" onClick={() => {props.incrementColumnFootingFormCount()}}><i className="material-icons">add</i></button>
            </CardHeader>
            <CardBody className="p-0 pb-3">
                <ListGroup flush>
                    <ListGroupItem className="p-3">
                        <Row>
                            <Col>
                                <Row form>
                                    <Col md="12" className="form-group">
                                        <label htmlFor="ew-cfd-type-of-column">Type of Column</label>
                                        <FormSelect onChange={e => setColumnType(e.target.value)} id="ew-cfd-type-of-column">
                                            <option value="rectangular">Rectangular</option>
                                            <option value="circular">Circular</option>
                                        </FormSelect>
                                    </Col>
                                </Row>

                                { columnType === 'rectangular' &&
                                    <Row form>
                                        <Col xxsm="4" className="form-group">
                                            <label htmlFor="ew-cfd-column-rectangular-x">Length (x)</label>
                                            <FormInput onChange={e => setColumnRectangular(object => {object.x = e.target.value; return object;})} id="ew-cfd-column-rectangular-x" placeholder="Enter the value x" />
                                        </Col>
                                        <Col xxsm="4" className="form-group">
                                            <label htmlFor="ew-cfd-column-rectangular-y">Width (y)</label>
                                            <FormInput onChange={e => setColumnRectangular(object => {object.y = e.target.value; return object;})} id="ew-cfd-column-rectangular-y" placeholder="Enter the value y" />
                                        </Col>
                                        <Col xxsm="4" className="form-group">
                                            <label htmlFor="ew-cfd-column-rectangular-z">Depth (z)</label>
                                            <FormInput onChange={e => setColumnRectangular(object => {object.z = e.target.value; return object;})} id="ew-cfd-column-rectangular-z" placeholder="Enter the value z" />
                                        </Col>
                                    </Row>
                                }

                                { columnType === 'circular' &&
                                    <Row form>
                                        <Col xxsm="6" className="form-group">
                                        <label htmlFor="ew-cfd-circular-d">Diameter (d)</label>
                                            <FormInput onChange={e => {
                                                const target = e.target;

                                                setColumnCircular(object => {
                                                    object.d = target.value;
                                                    return object;
                                                })
                                            }} id="ew-cfd-column-circular-d" placeholder="Enter the value d" />
                                        </Col>
                                        <Col xxsm="6" className="form-group">
                                        <label htmlFor="ew-cfd-column-circular-z">Depth (z)</label>
                                            <FormInput onChange={e => {
                                                const target = e.target;

                                                setColumnCircular(object => {
                                                    object.z = target.value;
                                                    return object;
                                                })
                                            }} id="ew-cfd-circular-circular-z" placeholder="Enter the value z" />
                                        </Col>
                                    </Row>
                                }

                                <Row form>
                                    <Col md="12" className="form-group">
                                        <label htmlFor="ew-cfd-type-of-footing">Type of Footing</label>
                                        <FormSelect onChange={e => setFootingType(e.target.value)} id="ew-cfd-type-of-footing">
                                            <option value="rectangular">Rectangular</option>
                                            <option value="circular">Circular</option>
                                        </FormSelect>
                                    </Col>
                                </Row>

                                { footingType === 'rectangular' &&
                                    <Row form>
                                        <Col xxsm="4" className="form-group">
                                            <label htmlFor="ew-cfd-footing-rectangular-x">Length (x)</label>
                                            <FormInput onChange={e => setFootingReactangular(object => {object.x = e.target.value; return object;})} id="ew-cfd-footing-rectangular-x" placeholder="Enter the value x" />
                                        </Col>
                                        <Col xxsm="4" className="form-group">
                                            <label htmlFor="ew-cfd-footing-rectangular-y">Width (y)</label>
                                            <FormInput onChange={e => setFootingReactangular(object => {object.y = e.target.value; return object;})} id="ew-cfd-footing-rectangular-y" placeholder="Enter the value y" />
                                        </Col>
                                        <Col xxsm="4" className="form-group">
                                            <label htmlFor="ew-cfd-footing-rectangular-z">Depth (z)</label>
                                            <FormInput onChange={e => setFootingReactangular(object => {object.z = e.target.value; return object;})} id="ew-cfd-footing-rectangular-z" placeholder="Enter the value z" />
                                        </Col>
                                    </Row>
                                }

                                { footingType === 'circular' &&
                                    <Row form>
                                        <Col xxsm="6" className="form-group">
                                            <label htmlFor="ew-cfd-footing-circular-d">Diameter (d)</label>
                                            <FormInput onChange={e => {
                                                const target = e.target;

                                                setFootingCircular(object => {
                                                    object.d = target.value;
                                                    return object;
                                                })
                                            }} id="ew-cfd-footing-circular-d" placeholder="Enter the value d" />
                                        </Col>
                                        <Col xxsm="6" className="form-group">
                                            <label htmlFor="ew-cfd-footing-circular-z">Depth (z)</label>
                                            <FormInput onChange={e => {
                                                const target = e.target;

                                                setFootingCircular(object => {
                                                    object.z = target.value;
                                                    return object;
                                                })
                                            }} id="ew-cfd-footing-circular-z" placeholder="Enter the value z" />
                                        </Col>
                                    </Row>
                                }

                                <Row form>
                                    <Col xxsm="6" className="form-group">
                                        <label htmlFor="ew-cfd-column-count">Number of Columns</label>
                                        <FormInput onChange={e => setColumnCount(e.target.value)} type="number" id="ew-cfd-column-count" placeholder="Enter number of columns" />
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

export default ColumnFootingDetails;