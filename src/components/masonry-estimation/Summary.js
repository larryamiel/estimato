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
                                <div className="p-2">
                                    <span><strong>Number of CHBs</strong></span><br/>
                                    <span>4 x 8 x 16 Hollow Blocks: {+props.values.material_summary.CHB['4 x 8 x 16'].amount.toFixed(3)} pcs</span><br/>
                                    <span>6 x 8 x 16 Hollow Blocks: {+props.values.material_summary.CHB['6 x 8 x 16'].amount.toFixed(3)} pcs</span><br/>
                                    <span>8 x 8 x 16 Hollow Blocks: {+props.values.material_summary.CHB['8 x 8 x 16'].amount.toFixed(3)} pcs</span><br/>
                                </div>

                                <div className="p-2">
                                    <span><strong>Cement Bags & Sand</strong></span><br/>
                                    <span>Cement Bags: {+props.values.material_summary.cement_bags.amount.toFixed(3)} bags</span><br/>
                                    <span>Sand: {+props.values.material_summary.sand.amount.toFixed(3)} m³</span><br/>
                                </div>

                                <div className="p-2">
                                    <span><strong>Reinforcements</strong></span><br/>
                                    <span>Vertical Rebars: {+props.values.summary.reinforcement.vertical_rebars.toFixed(3)} pcs</span><br/>
                                    <span>Horizontal Rebars: {+props.values.summary.reinforcement.horizontal_rebars.toFixed(3)} pcs</span><br/>
                                    <span>Tie Wire: {+props.values.material_summary.tie_wire.amount.toFixed(3)} kgs³</span><br/>
                                </div>

                                <div className="p-2">
                                    <span><strong>Duration of Work</strong></span><br/>
                                    <span>Layering: {+props.values.manpower.layering.duration.toFixed(3)} days</span><br/>
                                    <span>Plastering: {+props.values.manpower.plastering.duration.toFixed(3)} days</span><br/>
                                </div>

                                <div className="p-2">
                                    <span><strong>Labor Costs</strong></span><br/>
                                    <span>Layering: {+props.values.manpower.layering.labor_cost.toFixed(3)} PHP</span><br/>
                                    <span>Plastering: {+props.values.manpower.plastering.labor_cost.toFixed(3)} PHP</span><br/>
                                </div>

                                <div className="p-2">
                                    <span><strong>Material Costs</strong></span><br/>
                                    <span>CHB (4 x 8 x 16): {+props.values.material_summary.CHB['4 x 8 x 16'].price.toFixed(3)} PHP</span><br/>
                                    <span>CHB (6 x 8 x 16): {+props.values.material_summary.CHB['6 x 8 x 16'].price.toFixed(3)} PHP</span><br/>
                                    <span>CHB (8 x 8 x 16): {+props.values.material_summary.CHB['8 x 8 x 16'].price.toFixed(3)} PHP</span><br/>
                                    <span>Cement Bags: {+props.values.material_summary.cement_bags.price.toFixed(3)} PHP</span><br/>
                                    <span>Sand: {+props.values.material_summary.sand.price.toFixed(3)} PHP</span><br/>
                                    <span>Rebars: {+props.values.material_summary.rebar.price.toFixed(3)} PHP</span><br/>
                                    <span>Tie Wire: {+props.values.material_summary.tie_wire.price.toFixed(3)} PHP</span><br/>
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