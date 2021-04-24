import React, {useState} from 'react';

import { Container, Row, Col, Button } from "shards-react";
import PageTitle from "../../components/common/PageTitle";

import ColumnDetails from '../../components/formworks-estimation/ColumnDetails';
import BeamDetails from '../../components/formworks-estimation/BeamDetails';
import SlabDetails from '../../components/formworks-estimation/SlabDetails';
import Manpower from '../../components/formworks-estimation/Manpower';
import PlywoodAndLumber from '../../components/formworks-estimation/PlywoodAndLumber';
import MaterialCosts from '../../components/formworks-estimation/MaterialCosts';
import Summary from '../../components/formworks-estimation/Summary';

function Formworks(props) {
    const [summaryView, setSummaryView] = useState(false);

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
            plywood: {
                data: [0, '12"'],
                pieces: 0,
                cost: 0
            },
            wood_frames: {
                data: [0, 0],
                boardfoot: 0,
                cost: 0
            },
            lumber: {
                vertical: {
                    data: [0, '12"'],
                    boardfoot: 0,
                    cost: 0
                },
                horizontal: {
                    data: [0, '12"'],
                    boardfoot: 0,
                    cost: 0
                }
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
                    '1/4" (6mm)': 29.67,
                    '1/2" (12mm)': 20.33
                },
                beam: {
                    '1/4" (6mm)': 25.06,
                    '1/2" (12mm)': 18.66
                }
            },
            '2"x3"': {
                column: {
                    '1/4" (6mm)': 44.5,
                    '1/2" (12mm)': 30.55
                },
                beam: {
                    '1/4" (6mm)': 37.6,
                    '1/2" (12mm)': 28.0
                }
            },
        },
        quantity_of_metal_form_for_circular_column: {
            "0.90 x 2.40": {
                number_of_sheets: 0.462,
                length_of_vertical_ribs: {
                    '15 cm': 25,
                    '20 cm': 18
                },
                length_of_circumferential_ties: 9.52
            },
            "1.20 x 2.40": {
                number_of_sheets: 0.347,
                length_of_vertical_ribs: {
                    '15 cm': 25,
                    '20 cm': 18
                },
                length_of_circumferential_ties: 9.52
            }
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

    const calculate = () => {
        setSolutionValues(values => {
            // Establish variables
            const column = formworkValues.columnDetailsValues;
            const beam = formworkValues.beamDetailsValues;
            const slab = formworkValues.slabDetailsValues;
            const plywoodAndLumber = formworkValues.plywoodAndLumberValues;
            const manpower = formworkValues.manpowerValues;
            const materialCosts = formworkValues.materialCostsValues;

            // Woodframe Multiplier
            values.wood_frame_multiplier.column.size = values.wood_frame_multiplier.beam.size = plywoodAndLumber.palValues.wood_frame_size;
            values.wood_frame_multiplier.column.thickness = values.wood_frame_multiplier.beam.thickness = plywoodAndLumber.palValues.wood_frame_thickness;
            values.wood_frame_multiplier.column.multiplier = values.boardfoot_of_wood_for_column[plywoodAndLumber.palValues.wood_frame_size].column[plywoodAndLumber.palValues.wood_frame_thickness];
            values.wood_frame_multiplier.beam.multiplier = values.boardfoot_of_wood_for_column[plywoodAndLumber.palValues.wood_frame_size].beam[plywoodAndLumber.palValues.wood_frame_thickness];

            // Column Rectangular Form Works Area
            values.column.rectangular.formworksArea = 0;
            column.forEach((e, index) => {
                let result = (((2 * +column[index].columnRectangular.x) + (2 * +column[index].columnRectangular.y) + (4 * +values.frame_size)) * +column[index].columnCount * (+column[index].columnRectangular.z + +column[index].columnHeight));

                values.column.rectangular.formworksArea += +result.toFixed(2);
            });

            // Column Rectangular Total Number of Plywood
            values.column.rectangular.total_number_of_plywood = Math.ceil(values.column.rectangular.formworksArea / (plywoodAndLumber.palValues.size_of_plywood.x * plywoodAndLumber.palValues.size_of_plywood.y));
            values.column.rectangular.wood_frame = Math.ceil(values.column.rectangular.total_number_of_plywood * values.wood_frame_multiplier.column.multiplier);

            // Column Circular Form Works Area
            values.column.circular.formworksArea = 0;
            column.forEach((e, index) => {
                let result = +column[index].columnCircular.d * 3.1416 * +column[index].columnCount * +column[index].columnHeight;

                values.column.circular.formworksArea += +result.toFixed(2);
            });

            // Column Circular Total Number of Sheet
            values.column.circular.total_number_of_sheet = Math.ceil(values.column.circular.formworksArea * values.quantity_of_metal_form_for_circular_column[plywoodAndLumber.palValues.metal_sheets].number_of_sheets);
            // Column Circular Vertical Support
            values.column.circular.vertical_support = Math.ceil((values.column.circular.formworksArea * values.quantity_of_metal_form_for_circular_column[plywoodAndLumber.palValues.metal_sheets].length_of_vertical_ribs[plywoodAndLumber.palValues.spacing_for_vertical_ribs])/plywoodAndLumber.palValues.length_of_steel_bar);
            // Column Circular Circumferential Ties
            values.column.circular.circumferential_ties = Math.ceil((values.column.circular.formworksArea * values.quantity_of_metal_form_for_circular_column.length_of_circumferential_ties)/plywoodAndLumber.palValues.length_of_steel_bar);

            // Column Scaffolding Length
            values.column_scaffolding.length = 0;
            column.forEach((e, index) => {
                let result = +column[index].columnCount * +column[index].columnHeight;

                values.column_scaffolding.length += result;
            });

            // Column Scaffolding Vertical
            values.column_scaffolding.vertical = Math.ceil(values.column_scaffolding.length * values.column_scaffolding_multipliers[plywoodAndLumber.palValues.lumber_size.vertical].vertical);
            // Column Scaffolding Horizontal
            values.column_scaffolding.horizontal = Math.ceil(values.column_scaffolding.length * values.column_scaffolding_multipliers[plywoodAndLumber.palValues.lumber_size.horizontal].horizontal);
            // Column Scaffolding Diagonal
            values.column_scaffolding.diagonal = Math.ceil(values.column_scaffolding.length * values.column_scaffolding_multipliers[plywoodAndLumber.palValues.lumber_size.diagonal].diagonal);

            // Beam Total Length
            values.beam.total_length = 0;
            values.beam_scaffolding.length = 0;
            beam.forEach((e, index) => {
                beam[index].beamValues.forEach((ee, ii) => {
                    let result = +beam[index].beamValues[ii].length * +beam[index].beamValues[ii].amount;

                    values.beam.total_length += result;
                    values.beam_scaffolding.length += result;
                })
            });

            // Beam Area Needed
            values.beam.area_needed = 0;
            beam.forEach((e, index) => {
                let total = 0;

                beam[index].beamValues.forEach((ee, ii) => {
                    let result = +beam[index].beamValues[ii].length * +beam[index].beamValues[ii].amount;
                    total += result;
                });

                console.log(beam[index]);

                let res = total * ((2 * +beam[index].beamsDimensions.y) + (+beam[index].beamsDimensions.x) + (2 * values.frame_size));
                values.beam.area_needed += res;
            });

            values.beam.total_number_of_plywood = Math.ceil(values.beam.area_needed / (plywoodAndLumber.palValues.size_of_plywood.x * plywoodAndLumber.palValues.size_of_plywood.y));
            values.beam.wood_frame = Math.ceil(values.beam.total_number_of_plywood * values.wood_frame_multiplier.beam.multiplier);

            // Beam Scaffolding Vertical
            values.beam_scaffolding.vertical = Math.ceil(values.beam_scaffolding.length * values.beam_scaffolding_multipliers[plywoodAndLumber.palValues.lumber_size.vertical].vertical);
            values.beam_scaffolding.horizontal = Math.ceil(values.beam_scaffolding.length * values.beam_scaffolding_multipliers[plywoodAndLumber.palValues.lumber_size.horizontal].horizontal);

            // Slab Area for Formworks
            values.slab.formworksArea = 0;
            values.slab_scaffolding.area = 0;
            slab.forEach((e, index) => {
                let total = 0;

                console.log('slab values', slab[index].slabValues);

                slab[index].slabValues.forEach((ee, ii) => {
                    let result = +slab[index].slabValues[ii].horizontal * +slab[index].slabValues[ii].vertical;
                    total += result;
                });

                console.log(beam[index]);

                let res = total;
                values.slab.formworksArea += res;
                values.slab_scaffolding.area += res;
            });

            // Slab Total Number of Plywood
            values.slab.total_number_of_plywood = Math.ceil(values.slab.formworksArea / (plywoodAndLumber.palValues.size_of_plywood.x * plywoodAndLumber.palValues.size_of_plywood.y));
            values.slab.wood_frame = Math.ceil(values.slab.total_number_of_plywood * 39.77);

            // Slab Scaffolding Vertical
            values.slab_scaffolding.vertical = Math.ceil(values.slab_scaffolding.area * values.slab_scaffolding_multipliers[plywoodAndLumber.palValues.lumber_size.vertical].vertical);

            // Manpower Formworks Duration and Labor Cost
            values.manpower.duration.formworks = Math.ceil((values.column.rectangular.formworksArea + values.beam.area_needed + values.slab.formworksArea) * (1/2.5) * (1/(+manpower.numberLaborer + +manpower.numberSkilled)));
            values.manpower.labor_cost.formworks = (+manpower.numberLaborer * +manpower.laborerWage * values.manpower.duration.formworks) + (+manpower.numberForeman * +manpower.foremanWage * values.manpower.duration.formworks) + (+manpower.numberSkilled * +manpower.skilledWage * values.manpower.duration.formworks);

            // Material Costs
            if (plywoodAndLumber.palValues.size_of_plywood.x === "0.9") values.material_summary.plywood.data[0] = "0.9 x 2.40";
            else values.material_summary.plywood.data[0] = "1.2 x 2.40";

            values.material_summary.plywood.pieces = values.column.rectangular.total_number_of_plywood + values.beam.total_number_of_plywood + values.slab.total_number_of_plywood;

            if (plywoodAndLumber.palValues.wood_frame_size === '2"x2"') values.material_summary.wood_frames.data[0] = '2" x 2" x';
            else if (plywoodAndLumber.palValues.wood_frame_size === '2"x3"') values.material_summary.wood_frames.data[0] = '2" x 3" x';
            else values.material_summary.wood_frames.data[0] = '0';

            values.material_summary.wood_frames.boardfoot = values.column.rectangular.wood_frame + values.beam.wood_frame + values.slab.wood_frame;

            if (plywoodAndLumber.palValues.wood_frame_thickness === '1/4" (6mm)') values.material_summary.wood_frames.data[1] = '1/4"';
            else if (plywoodAndLumber.palValues.wood_frame_thickness === '1/2" (12mm)') values.material_summary.wood_frames.data[1] = '1/2"';
            else values.material_summary.wood_frames.data[1] = '0';
            
            // Cost of Plywood and Woodframes
            values.material_summary.plywood.cost = +materialCosts.costValues.plywood * values.material_summary.plywood.pieces;
            values.material_summary.wood_frames.cost = +materialCosts.costValues.wood_frame * values.material_summary.wood_frames.boardfoot;

            // Lumber
            if (plywoodAndLumber.palValues.lumber_size.vertical === '2"x2"') values.material_summary.lumber.vertical.data[0] = '2" x 2" x"';
            else if (plywoodAndLumber.palValues.lumber_size.vertical === '2"x3"') values.material_summary.lumber.vertical.data[0] = '2" x 3" x';
            else if (plywoodAndLumber.palValues.lumber_size.vertical === '2"x3"') values.material_summary.lumber.vertical.data[0] = '2" x 4" x';
            else values.material_summary.lumber.vertical.data[0] = '0';

            values.material_summary.lumber.vertical.boardfoot = values.column_scaffolding.vertical + values.column_scaffolding.diagonal + values.beam_scaffolding.vertical + values.slab_scaffolding.vertical;

            if (plywoodAndLumber.palValues.lumber_size.horizontal === '2"x2"') values.material_summary.lumber.horizontal.data[0] = '2" x 2" x"';
            else if (plywoodAndLumber.palValues.lumber_size.horizontal === '2"x3"') values.material_summary.lumber.horizontal.data[0] = '2" x 3" x';
            else if (plywoodAndLumber.palValues.lumber_size.horizontal === '2"x4"') values.material_summary.lumber.horizontal.data[0] = '2" x 4" x';
            else values.material_summary.lumber.horizontal.data[0] = '0';

            values.material_summary.lumber.horizontal.boardfoot = values.column_scaffolding.horizontal + values.beam_scaffolding.horizontal;

            // Cost of Lumber Horizontal and Vertical
            values.material_summary.lumber.vertical.cost = values.material_summary.lumber.vertical.boardfoot * +materialCosts.costValues.lumber[0];
            values.material_summary.lumber.horizontal.cost = values.material_summary.lumber.horizontal.boardfoot * +materialCosts.costValues.lumber[1];

            console.log(formworkValues, values);
            // Go to Summary View
            setSummaryView(true);
            return values;
        });
    }

    return (
        <Container fluid className="main-content-container px-4 pb-4">
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
                <PageTitle sm="4" title="Formworks" subtitle="Estimation" className="text-sm-left" />
            </Row>

            {/* Default Dark Table */}
            {
                summaryView ?
                <Row>
                    <Col>
                        <Summary values={solutionValues} />
                    </Col>
                    <Col md="12">
                        <Button type="submit" icon="close" onClick={e => {
                            setSummaryView(false);
                        }}>Back</Button>
                    </Col>
                </Row>
                :
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
                            calculate();
                        }}>Summarize</Button>
                    </Col>
                </Row>
            }
        </Container>
    );
}

export default Formworks;