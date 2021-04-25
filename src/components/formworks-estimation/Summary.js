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
                                <h6 className="font-weight-bold">Formworks</h6>
                                <div className="p-2">
                                    <span><strong>Column</strong></span><br/>
                                    <span>Total Number of Plywood: {+props.values.column.rectangular.total_number_of_plywood.toFixed(3)} pcs</span><br/>
                                    <span>Wood Frames (Board Feet): {+props.values.column.rectangular.wood_frame.toFixed(3)} bd'ft</span><br/>
                                </div>

                                <div className="p-2">
                                    <span><strong>Beam</strong></span><br/>
                                    <span>Total Number of Plywood: {+props.values.beam.total_number_of_plywood.toFixed(3)} pcs</span><br/>
                                    <span>Wood Frames (Board Feet): {+props.values.beam.wood_frame.toFixed(3)} bd'ft</span><br/>
                                </div>

                                <div className="p-2">
                                    <span><strong>Slab</strong></span><br/>
                                    <span>Total Number of Plywood: {+props.values.slab.total_number_of_plywood.toFixed(3)} pcs</span><br/>
                                    <span>Wood Frames (Board Feet): {+props.values.slab.wood_frame.toFixed(3)} bd'ft</span><br/>
                                </div>

                                <h6 className="mt-3 font-weight-bold">Scaffolding</h6>
                                <div className="p-2">
                                    <span><strong>Column</strong></span><br/>
                                    <span>Vertical: {+props.values.column_scaffolding.vertical.toFixed(3)} bd'ft</span><br/>
                                    <span>Horizontal: {+props.values.column_scaffolding.horizontal.toFixed(3)} bd'ft</span><br/>
                                    <span>Diagonal: {+props.values.column_scaffolding.diagonal.toFixed(3)} bd'ft</span><br/>
                                </div>

                                <div className="p-2">
                                    <span><strong>Beam</strong></span><br/>
                                    <span>Vertical: {+props.values.beam_scaffolding.vertical.toFixed(3)} bd'ft</span><br/>
                                    <span>Horizontal: {+props.values.beam_scaffolding.horizontal.toFixed(3)} bd'ft</span><br/>
                                </div>

                                <div className="p-2">
                                    <span><strong>Slab</strong></span><br/>
                                    <span>Vertical: {+props.values.slab_scaffolding.vertical.toFixed(3)} bd'ft</span><br/>
                                </div>

                                <h6 className="mt-3 font-weight-bold">Duration of Work</h6>
                                <div className="p-2">
                                    <span>Formworks: {+props.values.manpower.duration.formworks.toFixed(3)} days</span><br/>
                                </div>

                                <h6 className="mt-3 font-weight-bold">Labor Costs</h6>
                                <div className="p-2">
                                    <span>Formworks: {+props.values.manpower.labor_cost.formworks.toFixed(3)} PHP</span><br/>
                                </div>

                                <h6 className="mt-3 font-weight-bold">Material Costs</h6>
                                <div className="p-2">
                                    <span>Plywood ({props.values.material_summary.plywood.data[0] + ' ' + props.values.material_summary.plywood.data[1]}): {+props.values.material_summary.plywood.cost.toFixed(3)} PHP</span><br/>
                                    <span>Wood Frame ({props.values.material_summary.wood_frames.data[0] + ' ' + props.values.material_summary.wood_frames.data[1]}): {+props.values.material_summary.wood_frames.cost.toFixed(3)} PHP</span><br/>
                                    <span>Lumber ({props.values.material_summary.lumber.vertical.data[0] + ' ' + props.values.material_summary.lumber.vertical.data[1]}): {+props.values.material_summary.lumber.vertical.cost.toFixed(3)} PHP</span><br/>
                                    <span>Lumber ({props.values.material_summary.lumber.horizontal.data[0] + ' ' + props.values.material_summary.lumber.horizontal.data[1]}): {+props.values.material_summary.lumber.horizontal.cost.toFixed(3)} PHP</span><br/>
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