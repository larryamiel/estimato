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

function GravelBedding(props) {
    const [gravelBeddingDepth, setGravelBeddingDepth] = useState();

    useEffect(() => {
        props.setEarthworkValues(values => {
            values.gravelBeddingValues = {
                gravelBeddingDepth: gravelBeddingDepth
            }

            return values;
        });
    }, [gravelBeddingDepth]);

    return (
        <Card small className="mb-4">
            <CardHeader className="border-bottom">
                <h6 className="m-0">Gravel Bedding</h6>

                {/* <button className="btn-add-header" onClick={() => {props.incrementColumnFootingFormCount()}}><i className="material-icons">add</i></button> */}
            </CardHeader>
            <CardBody className="p-0 pb-3">
                <ListGroup flush>
                    <ListGroupItem className="p-3">
                        <Row>
                            <Col>
                                <Row form>
                                    <Col md="12" className="form-group">
                                        <label htmlFor="ew-gravel-bedding-depth">Gravel Bedding (m)</label>
                                        <FormInput type="number" id="ew-gravel-bedding-depth" onChange={e => setGravelBeddingDepth(e.target.value)} placeholder="Enter gravel bedding in meters" />
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

export default GravelBedding;