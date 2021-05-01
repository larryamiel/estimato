import React, { useState, useEffect } from 'react';
import {
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    FormSelect,
    Card,
    CardHeader,
    CardBody
  } from "shards-react";

function WallFootingDetails(props) {
    const [cementMixValues, setCementMixValues] = useState({
        classMixture: 'AA',
        cementBag: '40kg',
        proportions: ''
    });

    useEffect(() => {
        props.setConcreteValues(value => {
            value.cementMixValues = cementMixValues

            return value;
        });
    }, [cementMixValues]);

    return (
        <Card small className="mb-4">
            <CardHeader className="border-bottom">
                <h6 className="m-0">Cement Mix</h6>

                {/* <button className="btn-add-header" onClick={() => {props.incrementColumnFootingFormCount()}}><i className="material-icons">add</i></button> */}
            </CardHeader>
            <CardBody className="p-0 pb-3">
                <ListGroup flush>
                    <ListGroupItem className="p-3">
                        <Row>
                            <Col>
                                <Row form>
                                    <Col xxsm="4" className="form-group">
                                        <label htmlFor="ew-wf-column-count">Class Mixture</label>
                                        <FormSelect onChange={e => {
                                                const target = e.target;

                                                setCementMixValues(object => {
                                                    object.classMixture = target.value;
                                                    return object;
                                                })
                                        }} type="number" id="ew-wf-depth" >
                                            <option value="AA">AA</option>
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                            <option value="C">C</option>
                                        </FormSelect>
                                    </Col>
                                    <Col xxsm="4" className="form-group">
                                        <label htmlFor="ew-wf-column-count">Cement Bag</label>
                                        <FormSelect onChange={e => {
                                                const target = e.target;

                                                setCementMixValues(object => {
                                                    object.cementBag = target.value;
                                                    return object;
                                                })
                                        }} type="number" id="ew-wf-width">
                                            <option value="40kg">40kg</option>
                                            <option value="50kg">50kg</option>
                                        </FormSelect>
                                    </Col>
                                    <Col xxsm="4" className="form-group">
                                        <label htmlFor="ew-wf-column-count">Proportions</label>
                                        <p>{cementMixValues.proportions}</p>
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