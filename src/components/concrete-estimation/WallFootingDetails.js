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

function WallFootingDetails(props) {
    const [wallFootingDepth, setWallFootingDepth] = useState('');
    const [wallFootingWidth, setWallFootingWidth] = useState('');
    const [wallPerimeter, setWallPerimeter] = useState('');

    useEffect(() => {
        props.setConcreteValues(value => {
            value.wallFootingValues[props.index] = {
                wallFootingDepth: wallFootingDepth,
                wallFootingWidth: wallFootingWidth,
                wallPerimeter: wallPerimeter
            }

            return value;
        });
    }, [wallFootingDepth, wallFootingWidth, wallPerimeter]);

    return (
        <Card small className="mb-4">
            <CardHeader className="border-bottom">
                <h6 className="m-0">Wall Footing Details</h6>

                {/* <button className="btn-add-header" onClick={() => {props.incrementColumnFootingFormCount()}}><i className="material-icons">add</i></button> */}
            </CardHeader>
            <CardBody className="p-0 pb-3">
                <ListGroup flush>
                    <ListGroupItem className="p-3">
                        <Row>
                            <Col>
                                <Row form>
                                    <Col xxsm="4" className="form-group">
                                        <label htmlFor="ew-wf-column-count">Depth of Wall Footing</label>
                                        <FormInput onChange={e => setWallFootingDepth(e.target.value)} type="number" id="ew-wf-depth" placeholder="Enter footing" />
                                    </Col>
                                    <Col xxsm="4" className="form-group">
                                        <label htmlFor="ew-wf-column-count">Width of Footing (Base)</label>
                                        <FormInput onChange={e => setWallFootingWidth(e.target.value)} type="number" id="ew-wf-width" placeholder="Enter width" />
                                    </Col>
                                    <Col xxsm="4" className="form-group">
                                        <label htmlFor="ew-wf-column-count">Wall Perimeter</label>
                                        <FormInput onChange={e => setWallPerimeter(e.target.value)} type="number" id="ew-wf-perimeter" placeholder="Enter perimeter" />
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