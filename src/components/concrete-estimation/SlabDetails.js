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
    const [slabThickness, setSlabThickness] = useState('');
    const [slabCount, setSlabCount] = useState(1);

    useEffect(() => {
        props.setConcreteValues(value => {
            
            value.slabDetailsValues[props.index] = {
                slabValues: slabValues,
                slabThickness: slabThickness,
                slabCount: slabCount
            }

            return value;
        });
    }, [slabValues, slabThickness, slabCount]);

    return (
        <Card small className="mb-4">
            <CardHeader className="border-bottom">
                <h6 className="m-0">Slab Details</h6>

                {/* <button className="btn-add-header" onClick={() => {props.incrementColumnFootingFormCount()}}><i className="material-icons">add</i></button> */}
            </CardHeader>

            <CardBody className="p-0 pb-3">
                <ListGroup flush>
                    <ListGroupItem className="p-3">
                        <Row>
                            <Col md="12">
                                <h4>Slabs</h4>
                            </Col>
                            <Col md="12">
                                {[...Array(slabCount)].map((e, i) => 
                                    <Row form key={i} id={i}>
                                        <Col md="6" className="form-group">
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
                                        <Col md="6" className="form-group">
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

                                <Row className="pb-3">
                                    <Col>
                                        <Button type="submit" icon="add" onClick={e => {
                                            console.log(slabValues);
                                            
                                            setSlabCount(e => e + 1);
                                        }}>Add a Slab</Button>
                                    </Col>
                                </Row>
                                
                                <Row form>
                                    <Col md="6" className="form-group">
                                        <label htmlFor="fw-sd-slab-vertical">Slab Thickness (cm)</label>
                                        <FormInput type="number" id="fw-sd-slab-vertical" onChange={e => {
                                            var target = e.target;

                                            setSlabThickness(slabThickness => {
                                                slabThickness = target.value;

                                                return slabThickness;
                                            });
                                        }} placeholder="Enter slab vertical" />
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

export default SlabDetails;