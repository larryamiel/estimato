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

function SepticTankDetails(props) {
    const [topSlabDetails, setTopSlabDetails] = useState({length: '', width: '', depth: '', thickness: ''});
    const [bottomSlabDetails, setBottomSlabDetails] = useState({length: '', width: '', thickness: ''});

    useEffect(() => {
        props.setConcreteValues(value => {
            value.septicTankValues = {
                topSlabDetails: topSlabDetails,
                bottomSlabDetails: bottomSlabDetails
            }

            return value;
        });
    }, [topSlabDetails, bottomSlabDetails]);

    return (
        <Card small className="mb-4">
            <CardHeader className="border-bottom">
                <h6 className="m-0">Septic Tank Details</h6>

                {/* <button className="btn-add-header" onClick={() => {props.incrementColumnFootingFormCount()}}><i className="material-icons">add</i></button> */}
            </CardHeader>
            <CardBody className="p-0 pb-3">
                <ListGroup flush>
                    <ListGroupItem className="p-3">
                        <Row>
                            <Col>
                                <Row>
                                    <Col>
                                        <h4>Top Slab Details</h4>
                                    </Col>
                                </Row>

                                <Row form>
                                    <Col xxsm="4" className="form-group">
                                        <label htmlFor="cc-septic-tank-x">Length (m)</label>
                                        <FormInput onChange={e => {
                                            const target = e.target;
                                            setTopSlabDetails(object => {
                                                object.length = target.value;
                                                return object;
                                            })
                                        }} id="cc-septic-tank-x" placeholder="Enter the value" />
                                    </Col>
                                    <Col xxsm="4" className="form-group">
                                        <label htmlFor="cc-septic-tank-y">Width (m)</label>
                                        <FormInput onChange={e => {
                                            const target = e.target;
                                            setTopSlabDetails(object => {
                                                object.width = target.value;
                                                return object;
                                            })
                                        }} id="cc-septic-tank-y" placeholder="Enter the value" />
                                    </Col>
                                    <Col xxsm="4" className="form-group">
                                        <label htmlFor="cc-septic-tank-z">Depth (m)</label>
                                        <FormInput onChange={e => {
                                            const target = e.target;
                                            setTopSlabDetails(object => {
                                                object.depth = target.value;
                                                return object;
                                            })
                                        }} id="cc-septic-tank-z" placeholder="Enter the value" />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xxsm="12" className="form-group">
                                        <label htmlFor="cc-septic-tank-z">Thickness (m)</label>
                                        <FormInput onChange={e => {
                                            const target = e.target;
                                            setTopSlabDetails(object => {
                                                object.thickness = target.value;
                                                return object;
                                            })
                                        }} id="cc-septic-tank-z" placeholder="Enter the value" />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <h4>Bottom Slab Details</h4>
                                    </Col>
                                </Row>

                                <Row form>
                                    <Col xxsm="6" className="form-group">
                                        <label htmlFor="cc-septic-tank-x">Length (m)</label>
                                        <FormInput onChange={e => {
                                            const target = e.target;
                                            setBottomSlabDetails(object => {
                                                object.length = target.value;
                                                return object;
                                            })
                                        }} id="cc-septic-tank-x" placeholder="Enter the value" />
                                    </Col>
                                    <Col xxsm="6" className="form-group">
                                        <label htmlFor="cc-septic-tank-y">Width (m)</label>
                                        <FormInput onChange={e => {
                                            const target = e.target;
                                            setBottomSlabDetails(object => {
                                                object.width = target.value;
                                                return object;
                                            })
                                        }} id="cc-septic-tank-y" placeholder="Enter the value" />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xxsm="12" className="form-group">
                                        <label htmlFor="cc-septic-tank-z">Thickness (m)</label>
                                        <FormInput onChange={e => {
                                            const target = e.target;
                                            setBottomSlabDetails(object => {
                                                object.thickness = target.value;
                                                return object;
                                            })
                                        }} id="cc-septic-tank-z" placeholder="Enter the value" />
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