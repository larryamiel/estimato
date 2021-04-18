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

function Manpower(props) {
    const [numberLaborer, setNumberLaborer] = useState('');
    const [numberForeman, setNumberForeman] = useState('');
    const [numberSkilled, setNumberSkilled] = useState('');
    const [laborerWage, setLaborerWage] = useState('');
    const [foremanWage, setForemanWage] = useState('');
    const [skilledWage, setSkilledWage] = useState('');

    useEffect(() => {
        props.setMasonryValues(value => {
            value.manpowerValues = {
                numberLaborer: numberLaborer,
                numberForeman: numberForeman,
                numberSkilled: numberSkilled,
                laborerWage: laborerWage,
                foremanWage: foremanWage,
                skilledWage: skilledWage,
            }

            return value;
        });
    }, [numberLaborer, numberForeman, numberSkilled, laborerWage, foremanWage, skilledWage]);

    return (
        <Card small className="mb-4">
            <CardHeader className="border-bottom">
                <h6 className="m-0">Manpower</h6>

                {/* <button className="btn-add-header" onClick={() => {props.incrementColumnFootingFormCount()}}><i className="material-icons">add</i></button> */}
            </CardHeader>
            <CardBody className="p-0 pb-3">
                <ListGroup flush>
                    <ListGroupItem className="p-3">
                        <Row>
                            <Col>
                                <Row form>
                                    <Col md="4" className="form-group">
                                        <label htmlFor="fw-man-laborer">Number of Laborers</label>
                                        <FormInput type="number" id="fw-man-laborer" onChange={e => setNumberLaborer(e.target.value)} value={numberLaborer} placeholder="Enter number of Laborers" />
                                    </Col>
                                    <Col md="4" className="form-group">
                                        <label htmlFor="fw-man-foreman">Number of Foreman</label>
                                        <FormInput type="number" id="fw-man-foreman" onChange={e => setNumberForeman(e.target.value)} value={numberForeman} placeholder="Enter number of Foreman" />
                                    </Col>
                                    <Col md="4" className="form-group">
                                        <label htmlFor="fw-man-skilled">Number of Skilled</label>
                                        <FormInput type="number" id="fw-man-skilled" onChange={e => setNumberSkilled(e.target.value)} value={numberSkilled} placeholder="Enter number of Skilled" />
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md="4" className="form-group">
                                        <label htmlFor="fw-man-laborer-wage">Laborer Wage (PHP)</label>
                                        <FormInput type="number" id="fw-man-laborer-wage" onChange={e => setLaborerWage(e.target.value)} value={laborerWage} placeholder="Enter amount in PHP" />
                                    </Col>
                                    <Col md="4" className="form-group">
                                        <label htmlFor="fw-man-foreman-wage">Foreman Wage (PHP)</label>
                                        <FormInput type="number" id="fw-man-foreman-wage" onChange={e => setForemanWage(e.target.value)} value={foremanWage} placeholder="Enter amount in PHP" />
                                    </Col>
                                    <Col md="4" className="form-group">
                                        <label htmlFor="fw-man-skilled-wage">Skilled Wage (PHP)</label>
                                        <FormInput type="number" id="fw-man-skilled-wage" onChange={e => setSkilledWage(e.target.value)} value={skilledWage} placeholder="Enter amount in PHP" />
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

export default Manpower;