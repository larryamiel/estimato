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

function SepticTankDetails(props) {
    const [onFill, setOnFill] = useState({height: '', area: ''});

    useEffect(() => {
        props.setEarthworkValues(values => {
            values.onFillValues[props.index] = {
                onFill: onFill
            }

            return values;
        });
    }, [onFill]);

    return (
        <Card small className="mb-4">
            <CardHeader className="border-bottom">
                <h6 className="m-0">On-Fill</h6>

                {/* <button className="btn-add-header" onClick={() => {props.incrementColumnFootingFormCount()}}><i className="material-icons">add</i></button> */}
            </CardHeader>
            <CardBody className="p-0 pb-3">
                <ListGroup flush>
                    <ListGroupItem className="p-3">
                        <Row>
                            <Col>
                                <Row form>
                                    <Col xxsm="6" className="form-group">
                                        <label htmlFor="ew-on-fill-height">On-Fill Height (m)</label>
                                        <FormInput onChange={e => setOnFill(object => {object.height = e.target.value; return object;})} id="ew-on-fill-height" placeholder="Enter Height in meters" />
                                    </Col>
                                    <Col xxsm="6" className="form-group">
                                        <label htmlFor="ew-on-fill-area">Area to be Filled (m²)</label>
                                        <FormInput onChange={e => setOnFill(object => {object.area = e.target.value; return object;})} id="ew-on-fill-area" placeholder="Enter area in meter squared" />
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

export default SepticTankDetails;