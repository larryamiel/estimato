import React, { useEffect } from 'react';
import {
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody
  } from "shards-react";

function Summary(props) {
    useEffect(() => {
        console.log(props.values);
    });

    return (
        <Card small className="mb-4">
            <CardHeader className="border-bottom">
                <h6 className="m-0">Summary</h6>

                {/* <button className="btn-add-header" onClick={() => {props.incrementColumnFootingFormCount()}}><i className="material-icons">add</i></button> */}
            </CardHeader>
            <CardBody className="p-0 pb-3">
                <ListGroup flush>
                    <ListGroupItem className="p-3">
                        <Row>
                            <Col>
                                <span>Volume for Excavation: {+props.values.summary.volume_for_excavation.toFixed(3)} m³</span><br/>
                                <span>Volume for Backfill: {+props.values.summary.volume_for_backfill.toFixed(3)} m³</span><br/>
                                <span>Volume for Gravel Bedding: {+props.values.summary.volume_for_gravel_bedding.toFixed(3)} m³</span><br/>
                                <span>Duration of Work: </span><br/>
                                <div className="p-2">
                                    <span>Excavation: {+props.values.manpower.duration.excavation.toFixed(3)} days</span><br/>
                                    <span>Backfill: {+props.values.manpower.duration.backfill.toFixed(3)} days</span><br/>
                                    <span>Gravel Bedding: {+props.values.manpower.duration.gravel_bedding.toFixed(3)} days</span><br/>
                                </div>
                                <span>Labor Costs: </span><br/>
                                <div className="p-2">
                                    <span>Excavation: {+props.values.manpower.labor_cost.excavation.toFixed(3)} PHP</span><br/>
                                    <span>Backfill: {+props.values.manpower.labor_cost.backfill.toFixed(3)} PHP</span><br/>
                                    <span>Gravel Bedding: {+props.values.manpower.labor_cost.gravel_bedding.toFixed(3)} PHP</span><br/>
                                </div>
                            </Col>
                        </Row>
                    </ListGroupItem>
                </ListGroup>
            </CardBody>
        </Card>
    );
}

export default Summary;