import React, {useState} from 'react';

import { Container, Row, Col, Button } from "shards-react";
import PageTitle from "../../components/common/PageTitle";

import ColumnFootingDetails from "../../components/earthworks-estimation/ColumnFootingDetails";
import WallFootingDetails from "../../components/earthworks-estimation/WallFootingDetails";
import GravelBedding from "../../components/earthworks-estimation/GravelBedding";
import SepticTankDetails from "../../components/earthworks-estimation/SepticTankDetails";
import OnFill from "../../components/earthworks-estimation/OnFill";
import SlabDetail from '../../components/earthworks-estimation/SlabDetail';
import Manpower from '../../components/earthworks-estimation/Manpower';
import Summary from '../../components/earthworks-estimation/Summary';

function Earthworks(props) {
    const [summaryView, setSummaryView] = useState(false);

    const [columnFootingFormCount, setColumnFootingFormCount] = useState(1);
    const [wallFootingFormCount, setWallFootingFormCount] = useState(1);
    const [septicTankFormCount, setSpeticTankFormCount] = useState(1);
    const [onFillFormCount, setOnFillFormCount] = useState(1);

    const [earthworksValues, setEarthworkValues] = useState({
        columnFootingValues: [],
        wallFootingValues: [],
        gravelBeddingValues: {},
        septicTankValues: [],
        onFillValues: [],
        slabDetailValues: {},
        manPowerValues: {}
    });

    const [solutionValues, setSolutionValues] = useState({
        column_footing: {
            excavation: {
                rectangular: 0,
                circular: 0
            },
            backfill: {
                rectangular: 0,
                circular: 0
            },
            gravel_bedding: {
                rectangular: 0,
                circular: 0
            }
        },
        wall_footing: {
            excavation: 0,
            gravel_bedding: 0,
            backfill: 0
        },
        plumbing: {
            excavation: 0
        },
        on_fill: {
            total: 0
        },
        slab: {
            gravel_bedding: 0
        },
        manpower: {
            duration: {
                excavation: 0,
                backfill: 0,
                gravel_bedding: 0
            },
            labor_cost: {
                excavation: 0,
                backfill: 0,
                gravel_bedding: 0
            }
        },
        summary: {
            volume_for_excavation: 0,
            volume_for_backfill: 0,
            volume_for_gravel_bedding: 0
        }
    });

    const incrementColumnFootingFormCount = () => {
        setColumnFootingFormCount(count => count + 1);
    }

    const incrementWallFootingFormCount = () => {
        setWallFootingFormCount(count => count + 1);
    }

    const incrementSepticTankFormCount = () => {
        setSpeticTankFormCount(count => count + 1);
    }

    const incrementOnFillFormCOunt = () => {
        setOnFillFormCount(count => count + 1);
    }

    const calculate = () => {
        setSolutionValues(values => {
            // Establish variables
            const column_footing = earthworksValues.columnFootingValues;
            const wall_footing = earthworksValues.wallFootingValues;
            const gravel_bedding = earthworksValues.gravelBeddingValues;
            const septic_tank = earthworksValues.septicTankValues;
            const on_fill = earthworksValues.onFillValues;
            const slab_detail = earthworksValues.slabDetailValues;
            const manpower = earthworksValues.manPowerValues;

            // Column Footing Excavation Rectangular
            values.column_footing.excavation.rectangular = 0;
            column_footing.forEach((e, index) => {
                let result = +column_footing[index].footingRectangular.x * +column_footing[index].footingRectangular.y * (+column_footing[index].columnRectangular.z + +column_footing[index].footingRectangular.z + +gravel_bedding.gravelBeddingDepth) * +column_footing[index].columnCount;

                values.column_footing.excavation.rectangular += result;
            });

            // Column Footing Excavation Circular
            values.column_footing.excavation.circular = 0;
            column_footing.forEach((e, index) => {
                let result = +column_footing[index].footingCircular.d * (+column_footing[index].columnCircular.z + +column_footing[index].footingCircular.z + +gravel_bedding.gravelBeddingDepth) * +column_footing[index].columnCount;

                values.column_footing.excavation.circular += result;
            });

            // Column Footing Backfill Rectangular
            values.column_footing.backfill.rectangular = 0;
            column_footing.forEach((e, index) => {
                let result = ((+column_footing[index].footingRectangular.x * +column_footing[index].footingRectangular.y) - (+column_footing[index].columnRectangular.x * +column_footing[index].columnRectangular.y)) * +column_footing[index].footingRectangular.z * +column_footing[index].columnCount;

                values.column_footing.backfill.rectangular += result;
            });

            // Column Footing Backfill Circular
            values.column_footing.backfill.circular = 0;
            column_footing.forEach((e, index) => {
                let result = +column_footing[index].footingCircular.z * (+column_footing[index].footingCircular.d - +column_footing[index].columnCircular.d) * +column_footing[index].columnCount;

                values.column_footing.backfill.circular += result;
            });

            // Gravel Bedding Rectangular
            values.column_footing.gravel_bedding.rectangular = 0;
            column_footing.forEach((e, index) => {
                let result = +column_footing[index].footingRectangular.x * +column_footing[index].footingRectangular.y * +column_footing[index].columnCount * +gravel_bedding.gravelBeddingDepth;

                values.column_footing.gravel_bedding.rectangular += result;
            });

            // Gravel Bedding Circular
            values.column_footing.gravel_bedding.circular = 0;
            column_footing.forEach((e, index) => {
                let result = +column_footing[index].footingCircular.d * +column_footing[index].columnCount * +gravel_bedding.gravelBeddingDepth;

                values.column_footing.gravel_bedding.circular += result;
            });

            // Wall Footing Excavation
            values.wall_footing.excavation = 0;
            wall_footing.forEach((e, index) => {
                let result = +wall_footing[index].widthFooting * (+wall_footing[index].depthCHB + +wall_footing[index].depthWallFooting + +gravel_bedding.gravelBeddingDepth) * +wall_footing[index].wallPerimeter;

                values.wall_footing.excavation += result;
            });

            // Wall Footing Gravel Bedding
            values.wall_footing.gravel_bedding = 0;
            wall_footing.forEach((e, index) => {
                let result = +wall_footing[index].widthFooting * +gravel_bedding.gravelBeddingDepth * +wall_footing[index].wallPerimeter;

                values.wall_footing.gravel_bedding += result;
            });

            // Wall Footing Backfill
            values.wall_footing.backfill = 0;
            wall_footing.forEach((e, index) => {
                let result = (+wall_footing[index].widthFooting - +wall_footing[index].depthWallFooting) * +wall_footing[index].depthCHB * +wall_footing[index].wallPerimeter;

                values.wall_footing.backfill += result;
            });

            // Plumbing
            values.plumbing.excavation = 0;
            septic_tank.forEach((e, index) => {
                let result = +septic_tank[index].septicTank.x * +septic_tank[index].septicTank.y * +septic_tank[index].septicTank.z;

                values.plumbing.excavation += result;
            });

            // On Fill
            values.on_fill.total = 0;
            on_fill.forEach((e, index) => {
                let result = +on_fill[index].onFill.height * +on_fill[index].onFill.area;

                values.on_fill.total += result;
            });

            // Slab Detail
            values.slab.gravel_bedding = +slab_detail.slabDetailArea * +gravel_bedding.gravelBeddingDepth;

            // Presummary
            values.summary.volume_for_excavation = values.column_footing.excavation.rectangular + values.wall_footing.excavation + values.plumbing.excavation;
            values.summary.volume_for_backfill = values.column_footing.backfill.rectangular + values.wall_footing.backfill + values.on_fill.total;
            values.summary.volume_for_gravel_bedding = values.column_footing.gravel_bedding.rectangular + values.wall_footing.gravel_bedding + values.slab.gravel_bedding;

            // Manpower Duration
            values.manpower.duration.excavation = Math.ceil(values.summary.volume_for_excavation * (1/1.35) * (1/(+manpower.numberLaborer + +manpower.numberForeman)));
            values.manpower.duration.backfill = Math.ceil(values.summary.volume_for_backfill * (1/3.87) * (1/(+manpower.numberLaborer + +manpower.numberForeman)));
            values.manpower.duration.gravel_bedding = Math.ceil(values.summary.volume_for_gravel_bedding * (1/3.87) * (1/(+manpower.numberLaborer + +manpower.numberForeman)));

            // Manpower Labor Costs
            values.manpower.labor_cost.excavation = (+manpower.numberLaborer * +manpower.laborerWage * values.manpower.duration.excavation) + (+manpower.numberForeman * +manpower.foremanWage * values.manpower.duration.excavation);
            values.manpower.labor_cost.backfill = (+manpower.numberLaborer * +manpower.laborerWage * values.manpower.duration.backfill) + (+manpower.numberForeman * +manpower.foremanWage * values.manpower.duration.backfill);
            values.manpower.labor_cost.gravel_bedding = (+manpower.numberLaborer * +manpower.laborerWage * values.manpower.duration.gravel_bedding) + (+manpower.numberForeman * +manpower.foremanWage * values.manpower.duration.gravel_bedding);

            console.log(earthworksValues, values);
            // Go to Summary View
            setSummaryView(true);
            return values;
        });
    }

    return (
        <Container fluid className="main-content-container px-4 pb-4">
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
                <PageTitle sm="4" title="Earthworks" subtitle="Estimation" className="text-sm-left" />
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
                        {[...Array(columnFootingFormCount)].map((e, i) => <ColumnFootingDetails key={i} index={i} incrementColumnFootingFormCount={incrementColumnFootingFormCount} setEarthworkValues={setEarthworkValues} />)}
                        {[...Array(wallFootingFormCount)].map((e, i) => <WallFootingDetails key={i} index={i} incrementColumnFootingFormCount={incrementWallFootingFormCount} setEarthworkValues={setEarthworkValues} />)}
                        <GravelBedding setEarthworkValues={setEarthworkValues} />
                        {[...Array(septicTankFormCount)].map((e, i) => <SepticTankDetails key={i} index={i} incrementColumnFootingFormCount={incrementSepticTankFormCount} setEarthworkValues={setEarthworkValues} />)}
                        {[...Array(onFillFormCount)].map((e, i) => <OnFill key={i} index={i} incrementColumnFootingFormCount={incrementOnFillFormCOunt} setEarthworkValues={setEarthworkValues} />)}
                        <SlabDetail setEarthworkValues={setEarthworkValues} />
                        <Manpower setEarthworkValues={setEarthworkValues} />
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

export default Earthworks;