import React, { useState, useEffect } from 'react';
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

function SlabDetails(props) {
    const [slabValues, setSlabValues] = useState([{horizontal: '', vertical: ''}]);
    const [slabCount, setSlabCount] = useState(1);

    useEffect(() => {
        props.setFormWorkValues(value => {
            value.slabDetailsValues[props.index] = {
                slabValues: slabValues,
                slabCount: slabCount
            }

            return value;
        });
    }, [slabValues, slabCount]);

    return (
        <Card small className="mb-4">
            <CardHeader className="border-bottom card-add-header">
                <h6 className="m-0">Slab Details</h6>

                <button className="btn btn-primary btn-pill btn-add-header" onClick={() => {props.incrementSlabFormCount()}}><i className="material-icons">add</i></button>
            </CardHeader>

            <CardBody className="p-0 pb-3">
                <ListGroup flush>
                    <ListGroupItem className="p-3">
                        <Row className="subdivision">
                            <Col md="12">
                                <h2 className="subdivision-title">Slabs</h2>
                                {[...Array(slabCount)].map((e, i) => 
                                    <Row form key={i} id={i}>
                                        <Col xxs="6" className="form-group">
                                            <label htmlFor="fw-sd-slab-horizontal">Slab Horizontal (m)</label>
                                            <FormInput type="number" id="fw-sd-slab-horizontal" onChange={e => {
                                                const target = e.target;

                                                setSlabValues(value => {
                                                    // Push into the value to define it
                                                    if (!value[i]) value[i] = {horizontal: '', vertical: ''};

                                                    value[i].horizontal = target.value;

                                                    return value;
                                                })
                                            }} placeholder="Enter horizontal in meters" />
                                        </Col>
                                        <Col xxs="6" className="form-group">
                                            <label htmlFor="fw-sd-slab-vertical">Slab Vertical (m)</label>
                                            <FormInput type="number" id="fw-sd-slab-vertical" onChange={e => {
                                                const target = e.target;

                                                setSlabValues(value => {
                                                    // Push into the value to define it
                                                    if (!value[i]) value[i] = {horizontal: '', vertical: ''};

                                                    value[i].vertical = target.value;
                                                    return value;
                                                })
                                            }} placeholder="Enter vertical" />
                                        </Col>
                                    </Row>
                                )}
                                <Button type="submit" icon="add" onClick={e => {
                                    console.log(slabValues);
                                    
                                    setSlabCount(e => e + 1);
                                }}>Add a Slab</Button>
                            </Col>
                        </Row>
                    </ListGroupItem>
                </ListGroup>
            </CardBody>
        </Card>
    );
}

export default SlabDetails;