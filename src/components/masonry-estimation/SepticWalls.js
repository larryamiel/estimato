import React, { useState, useEffect } from 'react';
import {
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    FormInput,
    FormSelect,
    Card,
    CardHeader,
    CardBody
  } from "shards-react";

function SepticWalls(props) {
    const [values, setValues] = useState({
        septicDepth: '',
        septicLength: '',
        septicWidth: '',
        size_of_CHB: {
            cm: '10 x 20 x 40',
            inches: '4 x 8 x 16'
        },
        classMixture: 'A',
        numberOfChambers: '',
        reinforcing_bars: {
            vertical_spacing: '40',
            horizontal_spacing: '2',
            rebar_length: '5',
            tie_wire_length: '25',
            rebar_diameter: '8'
        }
    });

    useEffect(() => {
        props.setMasonryValues(value => {
            value.septicWallValues = values

            return value;
        });

        console.log(props.masonryValues.septicWallValues);
    }, [values]);

    return (
        <Card small className="mb-4">
            <CardHeader className="border-bottom">
                <h6 className="m-0">Septic Walls</h6>

                {/* <button className="btn-add-header" onClick={() => {props.incrementColumnFootingFormCount()}}><i className="material-icons">add</i></button> */}
            </CardHeader>
            <CardBody className="p-0 pb-3">
                <ListGroup flush>
                    <ListGroupItem className="p-3">
                        <Row className="subdivision">
                            <Col>
                                <h2 className="subdivision-title">Specifications</h2>
                                <Row form>
                                    <Col xxsm="4" className="form-group">
                                        <label htmlFor="">Depth (m)</label>
                                        <FormInput onChange={e => {
                                            const target = e.target;

                                            setValues(values => {
                                                values.septicDepth = target.value;
                                                return {...values};
                                            });
                                        }} value={props.masonryValues.septicWallValues[props.index] ? props.masonryValues.septicWallValues[props.index].septicDepth : values.septicDepth} type="number" id="" placeholder="" />
                                    </Col>
                                    <Col xxsm="4" className="form-group">
                                        <label htmlFor="">Length (m)</label>
                                        <FormInput onChange={e => {
                                            const target = e.target;

                                            setValues(values => {
                                                values.septicLength = target.value;
                                                return {...values};
                                            });
                                        }} value={props.masonryValues.septicWallValues[props.index] ? props.masonryValues.septicWallValues[props.index].septicLength : values.septicLength} type="number" id="" placeholder="" />
                                    </Col>
                                    <Col xxsm="4" className="form-group">
                                        <label htmlFor="">Width (m)</label>
                                        <FormInput onChange={e => {
                                            const target = e.target;

                                            setValues(values => {
                                                values.septicWidth = target.value;
                                                return {...values};
                                            });
                                        }} value={props.masonryValues.septicWallValues[props.index] ? props.masonryValues.septicWallValues[props.index].septicWidth : values.septicWidth} type="number" id="" placeholder="" />
                                    </Col>
                                </Row>

                                <Row form>
                                    <Col xxsm="6" className="form-group">
                                        <label htmlFor="">Size of CHB (cm)</label>
                                        <FormSelect onChange={e => {
                                            const target = e.target;

                                            setValues(values => {
                                                values.size_of_CHB.cm = target.value;

                                                if (target.value === '10 x 20 x 40') values.size_of_CHB.inches = '4 x 8 x 16';
                                                else if (target.value === '15 x 20 x 40') values.size_of_CHB.inches = '6 x 8 x 16';
                                                else if (target.value === '20 x 20 x 40') values.size_of_CHB.inches = '8 x 8 x 16';

                                                return {...values};
                                            });
                                        }} value={props.masonryValues.septicWallValues[props.index] ? props.masonryValues.septicWallValues[props.index].size_of_CHB.cm : values.size_of_CHB.cm} id="">
                                            <option value='10 x 20 x 40'>10 x 20 x 40</option>
                                            <option value='15 x 20 x 40'>15 x 20 x 40</option>
                                            <option value='20 x 20 x 40'>20 x 20 x 40</option>
                                        </FormSelect>
                                    </Col>
                                    <Col xxsm="6" className="form-group">
                                        <label htmlFor="">Size of CHB (inches)</label>
                                        <p>{props.masonryValues.septicWallValues[props.index] ? props.masonryValues.septicWallValues[props.index].size_of_CHB.inches : values.size_of_CHB.inches}</p>
                                    </Col>
                                </Row>

                                <Row form>
                                    <Col xxsm="6" className="form-group">
                                        <label htmlFor="">Class Mixture</label>
                                        <FormSelect onChange={e => {
                                            const target = e.target;

                                            setValues(values => {
                                                values.classMixture = target.value;
                                                return {...values};
                                            });
                                        }} value={props.masonryValues.septicWallValues[props.index] ? props.masonryValues.septicWallValues[props.index].classMixture : values.classMixture} id="">
                                            <option value='A'>A</option>
                                            <option value='B'>B</option>
                                            <option value='C'>C</option>
                                            <option value='D'>D</option>
                                        </FormSelect>
                                    </Col>
                                    <Col xxsm="6" className="form-group">
                                        <label htmlFor="">Number of Chambers</label>
                                        <FormInput onChange={e => {
                                            const target = e.target;

                                            setValues(values => {
                                                values.numberOfChambers = target.value;
                                                return {...values};
                                            });
                                        }} value={props.masonryValues.septicWallValues[props.index] ? props.masonryValues.septicWallValues[props.index].numberOfChambers : values.numberOfChambers} id="" />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Row className="subdivision">
                            <Col>
                                <h2 className="subdivision-title">Reinforcing Bars</h2>
                                <Row form>
                                    <Col xxsm="6" className="form-group">
                                        <label htmlFor="">Vertical Spacing (cm)</label>
                                        <FormSelect onChange={e => {
                                            const target = e.target;

                                            setValues(values => {
                                                values.reinforcing_bars.vertical_spacing = target.value;
                                                return {...values};
                                            });
                                        }} value={props.masonryValues.septicWallValues[props.index] ? props.masonryValues.septicWallValues[props.index].reinforcing_bars.vertical_spacing : values.reinforcing_bars.vertical_spacing} id="">
                                            <option value='40'>40</option>
                                            <option value='60'>60</option>
                                            <option value='80'>80</option>
                                        </FormSelect>
                                    </Col>
                                    <Col xxsm="6" className="form-group">
                                        <label htmlFor="">Horizontal Spacing (layer)</label>
                                        <FormSelect onChange={e => {
                                            const target = e.target;

                                            setValues(values => {
                                                values.reinforcing_bars.horizontal_spacing = target.value;
                                                return {...values};
                                            });
                                        }} value={props.masonryValues.septicWallValues[props.index] ? props.masonryValues.septicWallValues[props.index].reinforcing_bars.horizontal_spacing : values.reinforcing_bars.horizontal_spacing} id="">
                                            <option value='2'>2</option>
                                            <option value='3'>3</option>
                                            <option value='4'>4</option>
                                        </FormSelect>
                                    </Col>
                                </Row>

                                <Row form>
                                    <Col xxsm="4" className="form-group">
                                        <label htmlFor="">Rebar Length (m)</label>
                                        <FormSelect onChange={e => {
                                            const target = e.target;

                                            setValues(values => {
                                                values.reinforcing_bars.rebar_length = target.value;
                                                return {...values};
                                            });
                                        }} value={props.masonryValues.septicWallValues[props.index] ? props.masonryValues.septicWallValues[props.index].reinforcing_bars.rebar_length : values.reinforcing_bars.rebar_length} id="">
                                            <option value='5'>5</option>
                                            <option value='6'>6</option>
                                            <option value='7.5'>7.5</option>
                                            <option value='9'>9</option>
                                            <option value='12'>12</option>
                                        </FormSelect>
                                    </Col>
                                    <Col xxsm="4" className="form-group">
                                        <label htmlFor="">Tie Wire Length (cm)</label>
                                        <FormSelect onChange={e => {
                                            const target = e.target;

                                            setValues(values => {
                                                values.reinforcing_bars.tie_wire_length = target.value;
                                                return {...values};
                                            });
                                        }} value={props.masonryValues.septicWallValues[props.index] ? props.masonryValues.septicWallValues[props.index].reinforcing_bars.tie_wire_length : values.reinforcing_bars.tie_wire_length} id="">
                                            <option value='25'>25</option>
                                            <option value='30'>30</option>
                                            <option value='40'>40</option>
                                        </FormSelect>
                                    </Col>
                                    <Col md="4" className="form-group">
                                        <label htmlFor="">Rebar Diameter (mm)</label>
                                        <FormSelect onChange={e => {
                                            const target = e.target;

                                            setValues(values => {
                                                values.reinforcing_bars.rebar_diameter = target.value;
                                                return {...values};
                                            });
                                        }} value={props.masonryValues.septicWallValues[props.index] ? props.masonryValues.septicWallValues[props.index].reinforcing_bars.rebar_diameter : values.reinforcing_bars.rebar_diameter} id="">
                                            <option value='8'>8</option>
                                            <option value='10'>10</option>
                                            <option value='12'>12</option>
                                            <option value='13'>13</option>
                                            <option value='15'>15</option>
                                            <option value='16'>16</option>
                                            <option value='20'>20</option>
                                            <option value='25'>25</option>
                                            <option value='28'>28</option>
                                            <option value='30'>30</option>
                                            <option value='32'>32</option>
                                            <option value='36'>36</option>
                                        </FormSelect>
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

export default SepticWalls;