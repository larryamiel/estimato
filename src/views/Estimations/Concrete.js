import React, {useState} from 'react';

import { Container, Row, Col, Button } from "shards-react";
import PageTitle from "../../components/common/PageTitle";

import ColumnDetails from '../../components/concrete-estimation/ColumnDetails';
import ColumnFootingDetails from '../../components/concrete-estimation/ColumnFootingDetails';
import WallFootingDetails from '../../components/concrete-estimation/WallFootingDetails';
import BeamDetails from '../../components/concrete-estimation/BeamDetails';
import SlabDetails from '../../components/concrete-estimation/SlabDetails';
import SepticTankDetails from '../../components/concrete-estimation/SepticTankDetails';
import ConcreteStairDetails from '../../components/concrete-estimation/ConcreteStairDetails';
import CementMix from '../../components/concrete-estimation/CementMix';
import Manpower from '../../components/concrete-estimation/Manpower';
import MaterialCosts from '../../components/concrete-estimation/MaterialCosts';
import Summary from '../../components/concrete-estimation/Summary';

function Concrete(props) {
    const [summaryView, setSummaryView] = useState(false);

    const [columnFormCount, setColumnFormCount] = useState(1);
    const [columnFootingCount, setColumnFootingCount] = useState(1);
    const [wallFootingCount, setWallFootingCount] = useState(1);
    const [beamFormCount, setBeamFormCount] = useState(1);
    const [slabFormCount, setSlabFormCount] = useState(1);
    const [concreteStairFormCount, setConcreteStairFormCount] = useState(1);

    const [concreteValues, setConcreteValues] = useState({
        columnDetailsValues: [],
        columnFootingValues: [],
        wallFootingValues: [],
        beamDetailsValues: [],
        slabDetailsValues: [],
        septicTankValues: {},
        concreteStairValues: [],
        cementMixValues: {},
        manpowerValues: {},
        materialCostsValues: {}
    });

    const [solutionValues, setSolutionValues] = useState({
        multipliers: {
            cement: 0,
            sand: 0.5,
            gravel: 1
        },
        column: {
            total_volume: 0,
            required: {
                cement: 0,
                sand: 0,
                gravel: 0
            }
        },
        column_footing: {
            total_volume: 0,
            required: {
                cement: 0,
                sand: 0,
                gravel: 0
            }
        },
        wall_footing: {
            total_volume: 0,
            required: {
                cement: 0,
                sand: 0,
                gravel: 0
            }
        },
        beam: {
            total_volume: 0,
            required: {
                cement: 0,
                sand: 0,
                gravel: 0
            }
        },
        slab: {
            total_volume: 0,
            required: {
                cement: 0,
                sand: 0,
                gravel: 0
            }
        },
        septic_tank: {
            total_volume: 0,
            required: {
                cement: 0,
                sand: 0,
                gravel: 0
            }
        },
        concrete_stairs: {
            volume_of_landing: 0,
            volume_of_first_block: 0,
            volume_of_second_block: 0,
            length_of_waist: 0,
            volume_of_waist: 0,
            number_of_steps: 0,
            volume_of_1_step: 0,
            volume_of_n_steps: 0,
            total_pcc_volume: 0,
            required: {
                cement: 0,
                sand: 0,
                gravel: 0
            }
        },
        volumetric_method: {
            class_mixture: {
                "AA": {
                    proportions: "1 :1.5 : 3",
                    cement_bag: {
                        "40kg": 12.0,
                        "50kg": 9.5
                    },
                    sand: 0.5,
                    gravel: 1.0
                },
                "A": {
                    proportions: "1 :2 : 4",
                    cement_bag: {
                        "40kg": 9.0,
                        "50kg": 7.0
                    },
                    sand: 0.5,
                    gravel: 1.0
                },
                "B": {
                    proportions: "1 :2.5 : 5",
                    cement_bag: {
                        "40kg": 7.5,
                        "50kg": 6.0
                    },
                    sand: 0.5,
                    gravel: 1.0
                },
                "C": {
                    proportions: "1 :3 : 6",
                    cement_bag: {
                        "40kg": 6.0,
                        "50kg": 5.0
                    },
                    sand: 0.5,
                    gravel: 1.0
                }
            }
        },
        manpower: {
            concreting: {
                duration: 0,
                labor_cost: 0
            }
        },
        material_summary: {
            cement_bags: {
                amount: 0,
                price: 0
            },
            sand: {
                amount: 0,
                price: 0
            },
            gravel: {
                amount: 0,
                price: 0
            }
        }
    });

    const incrementColumnFormCount = () => {
        setColumnFormCount(count => count + 1);
    }

    const incrementColumnFootingCount = () => {
        setColumnFootingCount(count => count + 1);
    }

    const incrementWallFootingCount = () => {
        setWallFootingCount(count => count + 1);
    }

    const incrementBeamFormCount = () => {
        setBeamFormCount(count => count + 1);
    }

    const incrementSlabFormCount = () => {
        setSlabFormCount(count => count + 1);
    }

    const incrementConcreteStairFormCount = () => {
        setConcreteStairFormCount(count => count + 1);
    }

    const calculate = () => {
        setSolutionValues(values => {
            // Establish variables
            const column = concreteValues.columnDetailsValues;
            const column_footing = concreteValues.columnFootingValues;
            const wall_footing = concreteValues.wallFootingValues;
            const beam = concreteValues.beamDetailsValues;
            const slab = concreteValues.slabDetailsValues;
            const septic_tank = concreteValues.septicTankValues;
            const concrete_stair = concreteValues.concreteStairValues;
            const cement_mix = concreteValues.cementMixValues;
            const manpower = concreteValues.manpowerValues;
            const material = concreteValues.materialCostsValues;

            // Set Multipliers
            values.multipliers.cement = values.volumetric_method.class_mixture[cement_mix.classMixture].cement_bag[cement_mix.cementBag];

            // Set Column Total Volume
            values.column.total_volume = 0;
            column.forEach((e, index) => {
                let result = +column[index].columnRectangular.x * +column[index].columnRectangular.y * (+column[index].columnRectangular.z + +column[index].columnHeight) * +column[index].columnCount;
                result += (+column[index].columnCircular.d ? +column[index].columnCircular.d : 0) * ((+column[index].columnCircular.z ? +column[index].columnCircular.z : 0) + +column[index].columnHeight) * +column[index].columnCount;

                values.column.total_volume += result;
            });

            // Set Column Required
            values.column.required.cement = Math.ceil(values.column.total_volume * values.multipliers.cement);
            values.column.required.sand = values.column.total_volume * values.multipliers.sand;
            values.column.required.gravel = values.column.total_volume * values.multipliers.gravel;

            // Set Column Footing Total Volume
            values.column_footing.total_volume = 0;
            column_footing.forEach((e, index) => {
                let result = +column_footing[index].columnRectangular.x * +column_footing[index].columnRectangular.y * +column_footing[index].columnRectangular.z * +column_footing[index].columnCount;
                result += (+column_footing[index].columnCircular.d ? +column_footing[index].columnCircular.d : 0) * (+column_footing[index].columnCircular.z ? +column_footing[index].columnCircular.z : 0) * +column_footing[index].columnCount;

                values.column_footing.total_volume += result;
            });

            // Set Column Footing Required
            values.column_footing.required.cement = Math.ceil(values.column_footing.total_volume * values.multipliers.cement);
            values.column_footing.required.sand = values.column_footing.total_volume * values.multipliers.sand;
            values.column_footing.required.gravel = values.column_footing.total_volume * values.multipliers.gravel;

            // Set Wall Footing Total Volume
            values.wall_footing.total_volume = 0;
            wall_footing.forEach((e, index) => {
                let result = +wall_footing[index].wallFootingDepth * +wall_footing[index].wallFootingWidth * +wall_footing[index].wallPerimeter;

                values.wall_footing.total_volume += result;
            });

            // Set Wall Footing Required
            values.wall_footing.required.cement = Math.ceil(values.wall_footing.total_volume * values.multipliers.cement);
            values.wall_footing.required.sand = values.wall_footing.total_volume * values.multipliers.sand;
            values.wall_footing.required.gravel = values.wall_footing.total_volume * values.multipliers.gravel;

            // Set Beam Total Volume
            values.beam.total_volume = 0;
            beam.forEach((e, index) => {
                let total = 0;

                beam[index].beamValues.forEach((ee, ii) => {
                    let result = +beam[index].beamValues[ii].length * +beam[index].beamValues[ii].amount;
                    total += result;
                });

                let res = total * +beam[index].beamsDimensions.y * +beam[index].beamsDimensions.x;
                values.beam.total_volume += res;
            });

            // Set Beam Required
            values.beam.required.cement = Math.ceil(values.beam.total_volume * values.multipliers.cement);
            values.beam.required.sand = values.beam.total_volume * values.multipliers.sand;
            values.beam.required.gravel = values.beam.total_volume * values.multipliers.gravel;

            // Set Slab Total Volume
            values.slab.total_volume = 0;
            slab.forEach((e, index) => {
                let total = 0;

                slab[index].slabValues.forEach((ee, ii) => {
                    let result = +slab[index].slabValues[ii].horizontal * +slab[index].slabValues[ii].vertical;
                    total += result;
                });

                console.log(total);

                let res = total * (+slab[index].slabThickness / 100);

                console.log(slab[index]);

                values.slab.total_volume += res;
            });

            // Set Slab Required
            values.slab.required.cement = Math.ceil(values.slab.total_volume * values.multipliers.cement);
            values.slab.required.sand = values.slab.total_volume * values.multipliers.sand;
            values.slab.required.gravel = values.slab.total_volume * values.multipliers.gravel;

            // Set Septic Tank Total Volume
            values.septic_tank.total_volume = +septic_tank.topSlabDetails.length * +septic_tank.topSlabDetails.width * +septic_tank.topSlabDetails.thickness;
            values.septic_tank.total_volume += +septic_tank.bottomSlabDetails.length * +septic_tank.bottomSlabDetails.width * +septic_tank.bottomSlabDetails.thickness;

            // Set Septic Tank Required
            values.septic_tank.required.cement = Math.ceil(values.septic_tank.total_volume * values.multipliers.cement);
            values.septic_tank.required.sand = values.septic_tank.total_volume * values.multipliers.sand;
            values.septic_tank.required.gravel = values.septic_tank.total_volume * values.multipliers.gravel;

            // Set Concrete Stairs Values
            values.concrete_stairs.volume_of_landing = 0;
            values.concrete_stairs.volume_of_first_block = 0;
            values.concrete_stairs.volume_of_second_block = 0;
            values.concrete_stairs.length_of_waist = 0;
            values.concrete_stairs.volume_of_waist = 0;
            values.concrete_stairs.volume_of_n_steps = 0;
            values.concrete_stairs.total_pcc_volume = 0;
            concrete_stair.forEach((e, index) => {
                let total = 0;

                concrete_stair[index].concreteStairValues.landing.forEach((ee, ii) => {
                    let result = (+concrete_stair[index].concreteStairValues.landing[ii].landing_length - +concrete_stair[index].concreteStairValues.run_length) * +concrete_stair[index].concreteStairValues.landing[ii].landing_width * +concrete_stair[index].concreteStairValues.landing[ii].thickness_of_landing;
                    total += result;
                });

                values.concrete_stairs.volume_of_landing = total;
                values.concrete_stairs.volume_of_first_block = (2 * +concrete_stair[index].concreteStairValues.run_length) * +concrete_stair[index].concreteStairValues.width_of_stair * +concrete_stair[index].concreteStairValues.landing[0].thickness_of_landing;
                values.concrete_stairs.volume_of_second_block = +concrete_stair[index].concreteStairValues.run_length * (+concrete_stair[index].concreteStairValues.landing[0].landing_length - +concrete_stair[index].concreteStairValues.run_length) * +concrete_stair[index].concreteStairValues.landing[0].thickness_of_landing;

                values.concrete_stairs.length_of_waist = Math.sqrt(Math.pow(+concrete_stair[index].concreteStairValues.length_of_stair - (2 * +concrete_stair[index].concreteStairValues.run_length) - (+concrete_stair[index].concreteStairValues.run_length - +concrete_stair[index].concreteStairValues.landing[0].landing_length), 2) + Math.pow((+concrete_stair[index].concreteStairValues.height_of_stair - +concrete_stair[index].concreteStairValues.landing[0].thickness_of_landing), 2));
                values.concrete_stairs.volume_of_waist = values.concrete_stairs.length_of_waist * +concrete_stair[index].concreteStairValues.landing[0].landing_length * +concrete_stair[index].concreteStairValues.landing[0].landing_width;
                
                values.concrete_stairs.number_of_steps = Math.ceil((+concrete_stair[index].concreteStairValues.height_of_stair/+concrete_stair[index].concreteStairValues.rise_length) - 1);
                values.volume_of_1_step = 0.5 * +concrete_stair[index].concreteStairValues.rise_length * +concrete_stair[index].concreteStairValues.run_length;
                values.volume_of_n_steps = values.concrete_stairs.number_of_steps * values.volume_of_1_step;

                values.concrete_stairs.total_pcc_volume += (values.concrete_stairs.volume_of_landing + values.concrete_stairs.volume_of_first_block + values.concrete_stairs.volume_of_second_block + values.concrete_stairs.volume_of_waist + values.volume_of_n_steps);
            });

            // Set Concrete Stairs Required
            values.concrete_stairs.required.cement = Math.ceil(values.concrete_stairs.total_pcc_volume * values.multipliers.cement);
            values.concrete_stairs.required.sand = values.concrete_stairs.total_pcc_volume * values.multipliers.sand;
            values.concrete_stairs.required.gravel = values.concrete_stairs.total_pcc_volume * values.multipliers.gravel;

            // Set Manpower Duration
            values.manpower.concreting.duration = Math.ceil((values.column.total_volume + values.column_footing.total_volume + values.wall_footing.total_volume + values.beam.total_volume + values.slab.total_volume + values.concrete_stairs.total_pcc_volume) * (1/0.6) * (1/(+manpower.numberLaborer + +manpower.numberForeman + +manpower.numberSkilled)));

            // Set Manpower Labor Cost
            values.manpower.concreting.labor_cost = (+manpower.numberLaborer * +manpower.laborerWage * values.manpower.concreting.duration) + (+manpower.numberForeman * +manpower.foremanWage * values.manpower.concreting.duration) + (+manpower.numberSkilled * +manpower.skilledWage * values.manpower.concreting.duration);

            // Set Material Summary Amount
            values.material_summary.cement_bags.amount = values.column.required.cement + values.column_footing.required.cement + values.wall_footing.required.cement + values.beam.required.cement + values.slab.required.cement + values.septic_tank.required.cement + values.concrete_stairs.required.cement;
            values.material_summary.sand.amount = values.column.required.sand + values.column_footing.required.sand + values.wall_footing.required.sand + values.beam.required.sand + values.slab.required.sand + values.septic_tank.required.sand + values.concrete_stairs.required.sand;
            values.material_summary.gravel.amount = values.column.required.gravel + values.column_footing.required.gravel + values.wall_footing.required.gravel + values.beam.required.gravel + values.slab.required.gravel + values.septic_tank.required.gravel + values.concrete_stairs.required.gravel;

            // Set Material Summary Price
            values.material_summary.cement_bags.price = values.material_summary.cement_bags.amount * +material.costValues.cement_bags;
            values.material_summary.sand.price = values.material_summary.sand.amount * +material.costValues.sand;
            values.material_summary.gravel.price = values.material_summary.gravel.amount * +material.costValues.gravel;

            console.log(concreteValues, values);
            // Go to Summary View
            setSummaryView(true);
            return values;
        });
    }

    return (
        <Container fluid className="main-content-container px-4 pb-4">
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
                <PageTitle sm="4" title="Concrete" subtitle="Estimation" className="text-sm-left" />
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
                        {[...Array(columnFormCount)].map((e, i) => <ColumnDetails key={i} index={i} concreteValues={concreteValues} setConcreteValues={setConcreteValues} incrementColumnFormCount={incrementColumnFormCount} />)}
                        {[...Array(columnFootingCount)].map((e, i) => <ColumnFootingDetails key={i} index={i} concreteValues={concreteValues} setConcreteValues={setConcreteValues} incrementColumnFormCount={incrementColumnFootingCount} />)}
                        {[...Array(wallFootingCount)].map((e, i) => <WallFootingDetails key={i} index={i} concreteValues={concreteValues} setConcreteValues={setConcreteValues} incrementColumnFormCount={incrementWallFootingCount} />)}
                        {[...Array(beamFormCount)].map((e, i) => <BeamDetails key={i} index={i} concreteValues={concreteValues} setConcreteValues={setConcreteValues} incrementBeamFormCount={incrementBeamFormCount} />)}
                        {[...Array(slabFormCount)].map((e, i) => <SlabDetails key={i} index={i} concreteValues={concreteValues} setConcreteValues={setConcreteValues} incrementSlabFormCount={incrementSlabFormCount} />)}
                        <SepticTankDetails concreteValues={concreteValues} setConcreteValues={setConcreteValues} />
                        {[...Array(concreteStairFormCount)].map((e, i) => <ConcreteStairDetails key={i} index={i} concreteValues={concreteValues} setConcreteValues={setConcreteValues} incrementConcreteStairFormCount={incrementConcreteStairFormCount} />)}
                        <CementMix concreteValues={concreteValues} setConcreteValues={setConcreteValues} ></CementMix>
                        <Manpower concreteValues={concreteValues} setConcreteValues={setConcreteValues} />
                        <MaterialCosts concreteValues={concreteValues} setConcreteValues={setConcreteValues} />
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

export default Concrete;