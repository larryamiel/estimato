import React, { useEffect, useState } from 'react';
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

function WallFootingDetails(props) {
    const [depthCHB, setDepthCHB] = useState('');
    const [depthWallFooting, setDepthWallFooting] = useState('');
    const [widthFooting, setWidthFooting] = useState('');
    const [wallPerimeter, setWallPerimeter] = useState('');

    useEffect(() => {
        props.setEarthworkValues(values => {
            values.wallFootingValues[props.index] = {
                depthCHB: depthCHB,
                depthWallFooting: depthWallFooting,
                widthFooting: widthFooting,
                wallPerimeter: wallPerimeter
            }

            return values;
        });
    }, [depthCHB, depthWallFooting, widthFooting, wallPerimeter]);

    return (
        <Card small className="mb-4">
            <CardHeader className="border-bottom card-add-header">
                <h6 className="m-0">Wall Footing Details</h6>

                <button className="btn btn-primary btn-pill btn-add-header" onClick={() => {props.incrementWallFootingFormCount()}}><i className="material-icons">add</i></button>
            </CardHeader>
            <CardBody className="p-0 pb-3">
                <ListGroup flush>
                    <ListGroupItem className="p-3">
                        <Row>
                            <Col>
                                <Row form>
                                    <Col md="6" className="form-group">
                                        <label htmlFor="ew-wfd-depth-chb">Depth of CHB from NGL (m)</label>
                                        <FormInput type="number" id="ew-wfd-depth-chb" onChange={e => setDepthCHB(e.target.value)} placeholder="Enter depth in meters" />
                                    </Col>
                                    <Col md="6" className="form-group">
                                        <label htmlFor="ew-wfd-depth-wall-footing">Depth of Wall Footing (m)</label>
                                        <FormInput type="number" id="ew-wfd-depth-wall-footing" onChange={e => setDepthWallFooting(e.target.value)} placeholder="Enter depth in meters" />
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md="6" className="form-group">
                                        <label htmlFor="ew-wfd-width-footing">Width of Footing (m)</label>
                                        <FormInput type="number" id="ew-wfd-width-footing" onChange={e => setWidthFooting(e.target.value)} placeholder="Enter width in meters" />
                                    </Col>
                                    <Col md="6" className="form-group">
                                        <label htmlFor="ew-wfd-wall-perimiter">Wall Perimiter (m)</label>
                                        <FormInput type="number" id="ew-wfd-wall-perimiter" onChange={e => setWallPerimeter(e.target.value)} placeholder="Enter perimeter in meters" />
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

export default WallFootingDetails;