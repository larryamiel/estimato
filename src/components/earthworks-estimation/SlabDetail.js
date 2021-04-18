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

function SlabDetail(props) {
    const [slabDetailArea, setSlabDetailArea] = useState('');

    useEffect(() => {
        props.setEarthworkValues(values => {
            values.slabDetailValues= {
                slabDetailArea: slabDetailArea
            }

            return values;
        });
    }, [slabDetailArea]);

    return (
        <Card small className="mb-4">
            <CardHeader className="border-bottom">
                <h6 className="m-0">Slab Detail</h6>

                {/* <button className="btn-add-header" onClick={() => {props.incrementColumnFootingFormCount()}}><i className="material-icons">add</i></button> */}
            </CardHeader>
            <CardBody className="p-0 pb-3">
                <ListGroup flush>
                    <ListGroupItem className="p-3">
                        <Row>
                            <Col>
                                <Row form>
                                    <Col md="12" className="form-group">
                                        <label htmlFor="ew-slab-detail-area">Area Used for Ground Slab (m²)</label>
                                        <FormInput type="number" id="ew-slab-detail-area" onChange={e => setSlabDetailArea(e.target.value)} placeholder="Enter gravel bedding in meters" />
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

export default SlabDetail;