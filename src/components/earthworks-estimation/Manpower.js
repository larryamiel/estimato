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

function Manpower(props) {
    const [numberLaborer, setNumberLaborer] = useState();
    const [numberForeman, setNumberForeman] = useState();
    const [laborerWage, setLaborerWage] = useState();
    const [foremanWage, setForemanWage] = useState();

    useEffect(() => {
        props.setEarthworkValues(values => {
            values.manPowerValues= {
                numberLaborer: numberLaborer,
                numberForeman: numberForeman,
                laborerWage: laborerWage,
                foremanWage: foremanWage
            }

            return values;
        });
    }, [numberLaborer, numberForeman, laborerWage, foremanWage]);

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
                                    <Col md="6" className="form-group">
                                        <label htmlFor="ew-man-laborer">Number of Laborers</label>
                                        <FormInput type="number" id="ew-man-laborer" onChange={e => setNumberLaborer(e.target.value)} placeholder="Enter number of Laborers" />
                                    </Col>
                                    <Col md="6" className="form-group">
                                        <label htmlFor="ew-man-foreman">Number of Foreman</label>
                                        <FormInput type="number" id="ew-man-foreman" onChange={e => setNumberForeman(e.target.value)} placeholder="Enter number of Foreman" />
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md="6" className="form-group">
                                        <label htmlFor="ew-man-laborer-wage">Laborer Wage (PHP)</label>
                                        <FormInput type="number" id="ew-man-laborer-wage" onChange={e => setLaborerWage(e.target.value)} placeholder="Enter amount in PHP" />
                                    </Col>
                                    <Col md="6" className="form-group">
                                        <label htmlFor="ew-man-foreman-wage">Foreman Wage (PHP)</label>
                                        <FormInput type="number" id="ew-man-foreman-wage" onChange={e => setForemanWage(e.target.value)} placeholder="Enter amount in PHP" />
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