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
                                    <span><strong>Columns</strong></span><br/>
                                    <span>Cement: {+props.values.column.required.cement.toFixed(3)} bags</span><br/>
                                    <span>Sand: {+props.values.column.required.sand.toFixed(3)} m³</span><br/>
                                    <span>Gravel: {+props.values.column.required.gravel.toFixed(3)} m³</span><br/>
                                </div>

                                <div className="p-2">
                                    <span><strong>Column Footing</strong></span><br/>
                                    <span>Cement: {+props.values.column_footing.required.cement.toFixed(3)} bags</span><br/>
                                    <span>Sand: {+props.values.column_footing.required.sand.toFixed(3)} m³</span><br/>
                                    <span>Gravel: {+props.values.column_footing.required.gravel.toFixed(3)} m³</span><br/>
                                </div>

                                <div className="p-2">
                                    <span><strong>Wall Footing</strong></span><br/>
                                    <span>Cement: {+props.values.wall_footing.required.cement.toFixed(3)} bags</span><br/>
                                    <span>Sand: {+props.values.wall_footing.required.sand.toFixed(3)} m³</span><br/>
                                    <span>Gravel: {+props.values.wall_footing.required.gravel.toFixed(3)} m³</span><br/>
                                </div>

                                <div className="p-2">
                                    <span><strong>Beams</strong></span><br/>
                                    <span>Cement: {+props.values.beam.required.cement.toFixed(3)} bags</span><br/>
                                    <span>Sand: {+props.values.beam.required.sand.toFixed(3)} m³</span><br/>
                                    <span>Gravel: {+props.values.beam.required.gravel.toFixed(3)} m³</span><br/>
                                </div>

                                <div className="p-2">
                                    <span><strong>Slab</strong></span><br/>
                                    <span>Cement: {+props.values.slab.required.cement.toFixed(3)} bags</span><br/>
                                    <span>Sand: {+props.values.slab.required.sand.toFixed(3)} m³</span><br/>
                                    <span>Gravel: {+props.values.slab.required.gravel.toFixed(3)} m³</span><br/>
                                </div>

                                <div className="p-2">
                                    <span><strong>Septic Tank</strong></span><br/>
                                    <span>Cement: {+props.values.septic_tank.required.cement.toFixed(3)} bags</span><br/>
                                    <span>Sand: {+props.values.septic_tank.required.sand.toFixed(3)} m³</span><br/>
                                    <span>Gravel: {+props.values.septic_tank.required.gravel.toFixed(3)} m³</span><br/>
                                </div>

                                <div className="p-2">
                                    <span><strong>Concrete Stairs</strong></span><br/>
                                    <span>Cement: {+props.values.concrete_stairs.required.cement.toFixed(3)} bags</span><br/>
                                    <span>Sand: {+props.values.concrete_stairs.required.sand.toFixed(3)} m³</span><br/>
                                    <span>Gravel: {+props.values.concrete_stairs.required.gravel.toFixed(3)} m³</span><br/>
                                </div>

                                <h6 className="mt-3 font-weight-bold">Duration of Work</h6>
                                <div className="p-2">
                                    <span>Concreting: {+props.values.manpower.concreting.duration.toFixed(3)} days</span><br/>
                                </div>

                                <h6 className="mt-3 font-weight-bold">Labor Costs</h6>
                                <div className="p-2">
                                    <span>Concreting: {+props.values.manpower.concreting.labor_cost.toFixed(3)} PHP</span><br/>
                                </div>

                                <h6 className="mt-3 font-weight-bold">Material Costs</h6>
                                <div className="p-2">
                                    <span>Cement Bags: {+props.values.material_summary.cement_bags.price.toFixed(3)} PHP</span><br/>
                                    <span>Sand: {+props.values.material_summary.sand.price.toFixed(3)} PHP</span><br/>
                                    <span>Gravel: {+props.values.material_summary.gravel.price.toFixed(3)} PHP</span><br/>
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