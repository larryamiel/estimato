import React, {useState} from 'react';

import { Container, Row, Col, Button } from "shards-react";
import PageTitle from "../../components/common/PageTitle";

import ColumnDetails from '../../components/formworks-estimation/ColumnDetails';
import BeamDetails from '../../components/formworks-estimation/BeamDetails';
import SlabDetails from '../../components/formworks-estimation/SlabDetails';
import Manpower from '../../components/formworks-estimation/Manpower';
import PlywoodAndLumber from '../../components/formworks-estimation/PlywoodAndLumber';
import MaterialCosts from '../../components/formworks-estimation/MaterialCosts';

function Formworks(props) {
    const [columnFormCount, setColumnFormCount] = useState(1);
    const [beamFormCount, setBeamFormCount] = useState(1);
    const [slabFormCount, setSlabFormCount] = useState(1);

    const [solutionValues, setSolutionValues] = useState({
        frame_size: 0.05,
        column: {
            rectangular: {
                formworksArea: '',
                total_number_of_plywood: '',
                wood_frame: ''
            },
            circular: {
                formworksArea: '',
                total_number_of_sheet: '',
                vertical_support: '',
                circumferential_ties: ''
            }
        },
        wood_frame_multiplier: {
            column: {
                size: '',
                thickness: '',
                multiplier: ''
            },
            beam: {
                size: '',
                thickness: '',
                multiplier: ''
            }
        },
        column_scaffolding: {
            length: 0,
            vertical: 0,
            horizontal: 0,
            diagonal: 0
        },
        column_scaffolding_multipliers: {
            '2"x2"': {
                vertical: 4.7,
                horizontal: 21.0,
                diagonal: 11.7
            },
            '2"x3"': {
                vertical: 7.0,
                horizontal: 31.67,
                diagonal: 17.5
            },
            '2"x4"': {
                vertical: 9.35,
                horizontal: 42.25,
                diagonal: 23.35
            }
        },
        beam: {
            total_length: 0,
            area_needed: 0,
            total_number_of_plywood: 0,
            wood_frame: 0
        },
        beam_scaffolding: {
            length: 0,
            vertical: 0,
            horizontal: 0
        },
        beam_scaffolding_multipliers: {
            '2"x2"': {
                vertical: 4.0,
                horizontal: 4.7
            },
            '2"x3"': {
                vertical: 6.0,
                horizontal: 7.0
            },
            '2"x4"': {
                vertical: 8.0,
                horizontal: 9.35
            }
        },
        slab: {
            formworksArea: 0,
            total_number_of_plywood: 0,
            wood_frame: 0
        },
        slab_scaffolding: {
            area: 0,
            vertical: 0
        },
        slab_scaffolding_multipliers: {
            '2"x2"': {
                vertical: 6.1
            },
            '2"x3"': {
                vertical: 9.1
            },
            '2"x4"': {
                vertical: 12.1
            }
        },
        manpower: {
            duration: {
                formworks: 0
            },
            labor_cost: {
                formworks: 0
            }
        },
        material_summary: {
            plywood: '',
            wood_frames: '',
            lumber: {
                vertical: 0,
                diagonal: 0
            }
        },
        quantity_of_lumber_scaffolding: {
            '2"x2"': {
                column: {
                    vertical: 4.7,
                    horizontal: 21.0,
                    diagonal: 11.7
                },
                beam: {
                    vertical: 4.0,
                    horizontal: 4.7
                },
                flooring_slab: {
                    vertical: 6.1
                }
            },
            '2"x3"': {
                column: {
                    vertical: 7.0,
                    horizontal: 31.67,
                    diagonal: 17.5
                },
                beam: {
                    vertical: 6.0,
                    horizontal: 7.0
                },
                flooring_slab: {
                    vertical: 9.1
                }
            },
            '2"x4"': {
                column: {
                    vertical: 9.35,
                    horizontal: 42.25,
                    diagonal: 23.35
                },
                beam: {
                    vertical: 8.0,
                    horizontal: 9.35
                },
                flooring_slab: {
                    vertical: 12.1
                }
            }
        },
        boardfoot_of_wood_for_column :{
            '2"x2"': {
                column: {
                    '6mm (1/4")': 29.67,
                    '12mm (1/2")': 21.0
                },
                beam: {
                    vertical: 4.0,
                    horizontal: 4.7
                }
            },
            '2"x3"': {
                column: {
                    vertical: 7.0,
                    horizontal: 31.67,
                    diagonal: 17.5
                },
                beam: {
                    vertical: 6.0,
                    horizontal: 7.0
                }
            },
        }
    });

    const [formworkValues, setFormWorkValues] = useState({
        columnDetailsValues: [],
        beamDetailsValues: [],
        slabDetailsValues: [],
        plywoodAndLumberValues: {},
        manpowerValues: {},
        materialCostsValues: {}
    });

    const incrementColumnFormCount = () => {
        setColumnFormCount(count => count + 1);
    }

    const incrementBeamFormCount = () => {
        setBeamFormCount(count => count + 1);
    }

    const incrementSlabFormCount = () => {
        setSlabFormCount(count => count + 1);
    }

    return (
        <Container fluid className="main-content-container px-4 pb-4">
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
                <PageTitle sm="4" title="Formworks" subtitle="Estimation" className="text-sm-left" />
            </Row>

            {/* Default Dark Table */}
            <Row>
                <Col>
                    {[...Array(columnFormCount)].map((e, i) => <ColumnDetails key={i} index={i} formworkValues={formworkValues} setFormWorkValues={setFormWorkValues} incrementColumnFormCount={incrementColumnFormCount} />)}
                    {[...Array(beamFormCount)].map((e, i) => <BeamDetails key={i} index={i} formworkValues={formworkValues} setFormWorkValues={setFormWorkValues} incrementBeamFormCount={incrementBeamFormCount} />)}
                    {[...Array(slabFormCount)].map((e, i) => <SlabDetails key={i} index={i} formworkValues={formworkValues} setFormWorkValues={setFormWorkValues} incrementSlabFormCount={incrementSlabFormCount} />)}
                    <PlywoodAndLumber formworkValues={formworkValues} setFormWorkValues={setFormWorkValues} />
                    <Manpower formworkValues={formworkValues} setFormWorkValues={setFormWorkValues} />
                    <MaterialCosts formworkValues={formworkValues} setFormWorkValues={setFormWorkValues} />
                </Col>
                <Col md="12">
                    <Button type="submit" icon="check" onClick={e => {
                        console.log(formworkValues);
                    }}>Summarize</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Formworks;