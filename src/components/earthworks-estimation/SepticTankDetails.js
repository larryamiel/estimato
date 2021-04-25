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
    const [septicTank, setSepticTank] = useState({x: '', y: '', z: ''});

    useEffect(() => {
        props.setEarthworkValues(values => {
            values.septicTankValues[props.index] = {
                septicTank: septicTank
            }

            return values;
        });
    }, [septicTank]);

    return (
        <Card small className="mb-4">
            <CardHeader className="border-bottom card-add-header">
                <h6 className="m-0">Septic Tank Details</h6>

                <button className="btn btn-primary btn-pill btn-add-header" onClick={() => {props.incrementSepticTankFormCount()}}><i className="material-icons">add</i></button>
            </CardHeader>
            <CardBody className="p-0 pb-3">
                <ListGroup flush>
                    <ListGroupItem className="p-3">
                        <Row>
                            <Col>
                                <Row form>
                                <Col xxsm="4" className="form-group">
                                            <label htmlFor="ew-septic-tank-x">Length (x)</label>
                                            <FormInput onChange={e => setSepticTank(object => {object.x = e.target.value; return object;})} id="ew-septic-tank-x" placeholder="Enter the value x" />
                                        </Col>
                                        <Col xxsm="4" className="form-group">
                                            <label htmlFor="ew-septic-tank-y">Width (y)</label>
                                            <FormInput onChange={e => setSepticTank(object => {object.y = e.target.value; return object;})} id="ew-septic-tank-y" placeholder="Enter the value y" />
                                        </Col>
                                        <Col xxsm="4" className="form-group">
                                            <label htmlFor="ew-septic-tank-z">Depth (z)</label>
                                            <FormInput onChange={e => setSepticTank(object => {object.z = e.target.value; return object;})} id="ew-septic-tank-z" placeholder="Enter the value z" />
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