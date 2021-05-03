import React, {useState} from 'react';

import { Container, Row, Col, Button } from "shards-react";
import PageTitle from "../../components/common/PageTitle";

import Walls from '../../components/masonry-estimation/Walls';
import SepticWalls from '../../components/masonry-estimation/SepticWalls';
import Manpower from '../../components/masonry-estimation/Manpower';
import MaterialCosts from '../../components/masonry-estimation/MaterialCosts';
import Summary from '../../components/masonry-estimation/Summary';

function Masonry(props) {
    const [summaryView, setSummaryView] = useState(false);

    const [wallFormCount, setWallFormCount] = useState(1);

    const [masonryValues, setMasonryValues] = useState({
        wallsValues: [],
        septicWallValues: {},
        manpowerValues: {},
        materialCostsValues: {}
    });

    const [solutionValues, setSolutionValues] = useState({
        total_wall_area: {
            walls: [],
            septic: '',
            total: ''
        },
        total_number_of_chb: {
            walls: [],
            septic: '',
            total: ''
        },
        number_of_chb_per_type: {
            '4 x 8 x 16': {
                walls: [],
                septic: '',
                total: ''
            },
            '6 x 8 x 16': {
                walls: [],
                septic: '',
                total: ''
            },
            '8 x 8 x 16': {
                walls: [],
                septic: '',
                total: ''
            }
        },
        quantity_of_cement_and_sand_for_CHB_mortar_per_sqm: {
            '10 x 20 x 40' : {
                number_of_CHB_per_sqm: '12.5',
                bags_of_cement: {
                    'A': '0.792',
                    'B': '0.522',
                    'C': '0.394',
                    'D': '0.328'
                },
                sand: '0.0435'
            },
            '15 x 20 x 40': {
                number_of_CHB_per_sqm: '12.5',
                bags_of_cement: {
                    'A': '1.526',
                    'B': '1.018',
                    'C': '0.763',
                    'D': '0.633'
                },
                sand: '0.0844'
            },
            '20 x 20 x 40': {
                number_of_CHB_per_sqm: '12.5',
                bags_of_cement: {
                    'A': '2.26',
                    'B': '1.5',
                    'C': '1.125',
                    'D': '0.938'
                },
                sand: '0.125'
            }
        },
        quantity_of_cement_and_sand_for_plastering_per_sqm: {
            'A': {
                thickness_of_plastering: {
                    '8': '0.144',
                    '12': '0.216',
                    '16': '0.288',
                    '20': '0.36',
                    '25': '0.45'
                }
            },
            'B': {
                thickness_of_plastering: {
                    '8': '0.096',
                    '12': '0.144',
                    '16': '0.192',
                    '20': '0.24',
                    '25': '0.3'
                }
            },
            'C': {
                thickness_of_plastering: {
                    '8': '0.072',
                    '12': '0.108',
                    '16': '0.144',
                    '20': '0.18',
                    '25': '0.225'
                }
            },
            'D': {
                thickness_of_plastering: {
                    '8': '0.06',
                    '12': '0.09',
                    '16': '0.12',
                    '20': '0.15',
                    '25': '0.188'
                }
            },
            'Sand': {
                thickness_of_plastering: {
                    '8': '0.008',
                    '12': '0.012',
                    '16': '0.016',
                    '20': '0.02',
                    '25': '0.025'
                }
            }   
        },
        length_of_reinforcing_bars_for_CHB: {
            vertical_reinforcement: {
                '40': {
                    length_of_bars: {
                        per_block: '0.235',
                        per_sqm: '2.93'
                    }
                },
                '60': {
                    length_of_bars: {
                        per_block: '0.171',
                        per_sqm: '2.12'
                    }
                },
                '80': {
                    length_of_bars: {
                        per_block: '0.128',
                        per_sqm: '1.6'
                    }
                }
            },
            horizontal_reinforcement: {
                '2': {
                    length_of_bars: {
                        per_block: '0.264',
                        per_sqm: '3.3'
                    }
                },
                '3': {
                    length_of_bars: {
                        per_block: '0.172',
                        per_sqm: '2.15'
                    }
                },
                '4': {
                    length_of_bars: {
                        per_block: '0.138',
                        per_sqm: '1.72'
                    }
                }
            }
        },
        tie_wire_for_CHB: {
            '40': {
                '2': {
                    '25': 0.054,
                    '30': 0.065,
                    '40': 0.086
                },
                '3': {
                    '25': 0.039,
                    '30': 0.047,
                    '40': 0.063
                },
                '4': {
                    '25': 0.024,
                    '30': 0.029,
                    '40': 0.039
                }
            },
            '60': {
                '2': {
                    '25': 0.036,
                    '30': 0.044,
                    '40': 0.057
                },
                '3': {
                    '25': 0.026,
                    '30': 0.032,
                    '40': 0.042
                },
                '4': {
                    '25': 0.020,
                    '30': 0.024,
                    '40': 0.032
                }
            },
            '80': {
                '2': {
                    '25': 0.027,
                    '30': 0.033,
                    '40': 0.044
                },
                '3': {
                    '25': 0.020,
                    '30': 0.024,
                    '40': 0.032
                },
                '4': {
                    '25': 0.015,
                    '30': 0.018,
                    '40': 0.024
                }
            }
        },
        parameters: {
            CHB_cement_multiplier: {
                walls: [],
                septic: ''
            },
            CHB_sand_multiplier: {
                walls: [],
                septic: ''
            },
            plaster_multiplier: {
                walls: []
            },
            sand_plaster_multiplier: {
                walls: []
            },
            rebar_diameter: {
                walls: [],
                septic: ''
            },
            double_sided_plaster: {
                walls: []
            }
        },
        reinforcing_bars_multiplier: {
            vertical: {
                walls: [],
                septic: ''
            },
            horizontal: {
                walls: [],
                septic: ''
            },
            tie_wire: {
                walls: [],
                septic: ''
            }
        },
        CHB_mortar: {
            cement: {
                walls: [],
                septic: ''
            },
            sand: {
                walls: [],
                septic: ''
            }
        },
        for_plaster: {
            cement: {
                walls: [],
                septic: ''
            },
            sand: {
                walls: [],
                septic: ''
            }
        },
        reinforcement: {
            vertical_reinforcement: {
                length: {
                    walls: [],
                    septic: ''
                },
                number_of_rebars: {
                    walls: [],
                    septic: ''
                }
            },
            horizontal_reinforcement: {
                length: {
                    walls: [],
                    septic: ''
                },
                number_of_rebars: {
                    walls: [],
                    septic: ''
                }
            },
            tie_wire_kgs: {
                walls: [],
                septic: ''
            } 
        },
        manpower: {
            layering: {
                duration: '',
                labor_cost: ''
            },
            plastering: {
                duration: '',
                labor_cost: ''
            }
        },
        material_summary: {
            cement_bags: {
                amount: '',
                price: ''
            },
            sand: {
                amount: '',
                price: ''
            },
            CHB: {
                '4 x 8 x 16': {
                    amount: '',
                    price: ''
                },
                '6 x 8 x 16': {
                    amount: '',
                    price: ''
                },
                '8 x 8 x 16': {
                    amount: '',
                    price: ''
                }
            },
            rebar: {
                amount: '',
                price: ''
            },
            tie_wire: {
                amount: '',
                price: ''
            }
        },
        summary: {
            reinforcement: {
                vertical_rebars: '',
                horizontal_rebars: '',
                tie_wire: ''
            }
        }
    });

    const incrementWallFormCount = () => {
        setWallFormCount(count => count + 1);
    }

    const calculate = () => {
        setSolutionValues(values => {
            // Establish variables
            const wall = masonryValues.wallsValues;
            const septic = masonryValues.septicWallValues;
            const manpower = masonryValues.manpowerValues;
            const material = masonryValues.materialCostsValues;

            // Total Wall Area
            values.total_wall_area.total = 0;
            values.total_number_of_chb.total = 0;
            values.number_of_chb_per_type['4 x 8 x 16'].total = 0;
            values.number_of_chb_per_type['6 x 8 x 16'].total = 0;
            values.number_of_chb_per_type['8 x 8 x 16'].total = 0;

            wall.forEach((e, index) => {
                let wall_area = +wall[index].wallHeight * +wall[index].wallPerimeter;
                let door_window_area = 0;

                wall[index].door_window_gross_area.doors.forEach((ee, ii) => {
                    let area = +wall[index].door_window_gross_area.doors[ii].area * +wall[index].door_window_gross_area.doors[ii].count;

                    door_window_area += area;
                });

                values.total_wall_area.walls[index] = wall_area - door_window_area;
                values.total_number_of_chb.walls[index] = Math.ceil(values.total_wall_area.walls[index] * 12.5);
                values.total_wall_area.total += values.total_wall_area.walls[index];
                values.total_number_of_chb.total += Math.ceil(values.total_number_of_chb.walls[index] * 1.05);

                values.number_of_chb_per_type[wall[index].size_of_CHB.inches].walls[index] = Math.ceil(values.total_number_of_chb.walls[index] * 1.05);
                values.number_of_chb_per_type[wall[index].size_of_CHB.inches].total += values.number_of_chb_per_type[wall[index].size_of_CHB.inches].walls[index];
            
                values.parameters.CHB_cement_multiplier.walls[index] = values.quantity_of_cement_and_sand_for_CHB_mortar_per_sqm[wall[index].size_of_CHB.cm].bags_of_cement[wall[index].classMixture];
                values.parameters.CHB_sand_multiplier.walls[index] = values.quantity_of_cement_and_sand_for_CHB_mortar_per_sqm[wall[index].size_of_CHB.cm].sand;
                values.parameters.plaster_multiplier.walls[index] = values.quantity_of_cement_and_sand_for_plastering_per_sqm[wall[index].classMixture].thickness_of_plastering[wall[index].plasterThickness];
                values.parameters.sand_plaster_multiplier.walls[index] = values.quantity_of_cement_and_sand_for_plastering_per_sqm['Sand'].thickness_of_plastering[wall[index].plasterThickness];
                values.parameters.rebar_diameter.walls[index] = +wall[index].reinforcing_bars.rebar_diameter;
                
                if (wall[index].doubleSided === 'Yes') values.parameters.double_sided_plaster.walls[index] = 2;
                else if (wall[index].doubleSided === 'No') values.parameters.double_sided_plaster.walls[index] = 1;

                values.reinforcing_bars_multiplier.vertical.walls[index] = values.length_of_reinforcing_bars_for_CHB.vertical_reinforcement[wall[index].reinforcing_bars.vertical_spacing].length_of_bars.per_sqm;
                values.reinforcing_bars_multiplier.horizontal.walls[index] = values.length_of_reinforcing_bars_for_CHB.horizontal_reinforcement[wall[index].reinforcing_bars.horizontal_spacing].length_of_bars.per_sqm;
                values.reinforcing_bars_multiplier.tie_wire.walls[index] = values.tie_wire_for_CHB[wall[index].reinforcing_bars.vertical_spacing][wall[index].reinforcing_bars.horizontal_spacing][wall[index].reinforcing_bars.tie_wire_length];

                values.CHB_mortar.cement.walls[index] = Math.ceil(+values.total_wall_area.walls[index] * +values.parameters.CHB_cement_multiplier.walls[index]);
                values.CHB_mortar.sand.walls[index] = +values.total_wall_area.walls[index] * +values.parameters.CHB_sand_multiplier.walls[index];

                values.for_plaster.cement.walls[index] = Math.ceil(+values.total_wall_area.walls[index] * +values.parameters.plaster_multiplier.walls[index] * +values.parameters.double_sided_plaster.walls[index]);
                values.for_plaster.sand.walls[index] = +values.total_wall_area.walls[index] * +values.parameters.sand_plaster_multiplier.walls[index] * +values.parameters.double_sided_plaster.walls[index];
            
                values.reinforcement.vertical_reinforcement.length.walls[index] = +values.total_wall_area.walls[index] * +values.reinforcing_bars_multiplier.vertical.walls[index];
                values.reinforcement.vertical_reinforcement.number_of_rebars.walls[index] = Math.ceil(values.reinforcement.vertical_reinforcement.length.walls[index]/+wall[index].reinforcing_bars.rebar_length);

                values.reinforcement.horizontal_reinforcement.length.walls[index] = +values.total_wall_area.walls[index] * +values.reinforcing_bars_multiplier.horizontal.walls[index];
                values.reinforcement.horizontal_reinforcement.number_of_rebars.walls[index] = Math.ceil(values.reinforcement.horizontal_reinforcement.length.walls[index]/+wall[index].reinforcing_bars.rebar_length);

                values.reinforcement.tie_wire_kgs.walls[index] = +values.total_wall_area.walls[index] * values.reinforcing_bars_multiplier.tie_wire.walls[index];
            });

            values.total_wall_area.septic = ((+septic.septicLength * 2) + (+septic.septicWidth * 2)) * +septic.septicDepth + (+septic.septicWidth * +septic.septicDepth) * (+septic.numberOfChambers - 1);
            values.total_wall_area.total += values.total_wall_area.septic;
            values.total_number_of_chb.septic = values.total_wall_area.septic * 12.5;
            values.total_number_of_chb.total += Math.ceil(values.total_number_of_chb.septic * 1.05);

            values.number_of_chb_per_type[septic.size_of_CHB.inches].septic = Math.ceil(values.total_number_of_chb.septic * 1.05);
            values.number_of_chb_per_type[septic.size_of_CHB.inches].total += values.number_of_chb_per_type[septic.size_of_CHB.inches].septic;

            values.parameters.CHB_cement_multiplier.septic = values.quantity_of_cement_and_sand_for_CHB_mortar_per_sqm[septic.size_of_CHB.cm].bags_of_cement[septic.classMixture];
            values.parameters.CHB_sand_multiplier.septic = values.quantity_of_cement_and_sand_for_CHB_mortar_per_sqm[septic.size_of_CHB.cm].sand;
            values.parameters.rebar_diameter.septic = +septic.reinforcing_bars.rebar_diameter;

            values.reinforcing_bars_multiplier.vertical.septic = values.length_of_reinforcing_bars_for_CHB.vertical_reinforcement[septic.reinforcing_bars.vertical_spacing].length_of_bars.per_sqm;
            values.reinforcing_bars_multiplier.horizontal.septic = values.length_of_reinforcing_bars_for_CHB.horizontal_reinforcement[septic.reinforcing_bars.horizontal_spacing].length_of_bars.per_sqm;
            values.reinforcing_bars_multiplier.tie_wire.septic = values.tie_wire_for_CHB[septic.reinforcing_bars.vertical_spacing][septic.reinforcing_bars.horizontal_spacing][septic.reinforcing_bars.tie_wire_length];
            
            values.CHB_mortar.cement.septic = Math.ceil(+values.total_wall_area.septic * +values.parameters.CHB_cement_multiplier.septic);
            values.CHB_mortar.sand.septic = +values.total_wall_area.septic * +values.parameters.CHB_sand_multiplier.septic;

            values.reinforcement.vertical_reinforcement.length.septic = +values.total_wall_area.septic * +values.reinforcing_bars_multiplier.vertical.septic;
            values.reinforcement.vertical_reinforcement.number_of_rebars.septic = Math.ceil(values.reinforcement.vertical_reinforcement.length.septic/+septic.reinforcing_bars.rebar_length);

            values.reinforcement.horizontal_reinforcement.length.septic = +values.total_wall_area.septic * +values.reinforcing_bars_multiplier.horizontal.septic;
            values.reinforcement.horizontal_reinforcement.number_of_rebars.septic = Math.ceil(values.reinforcement.horizontal_reinforcement.length.septic/+septic.reinforcing_bars.rebar_length);

            values.reinforcement.tie_wire_kgs.septic = +values.total_wall_area.septic * values.reinforcing_bars_multiplier.tie_wire.septic;

            values.manpower.layering.duration = Math.ceil((values.total_number_of_chb.total) * (2/100) * (1/(+manpower.numberLaborer + +manpower.numberForeman + +manpower.numberSkilled)));
            values.manpower.plastering.duration = Math.ceil((values.total_wall_area.total) * (2/8) * (1/(+manpower.numberLaborer + +manpower.numberForeman + +manpower.numberSkilled)));

            values.manpower.layering.labor_cost = (values.manpower.layering.duration * +manpower.numberLaborer * +manpower.laborerWage) + (values.manpower.layering.duration * +manpower.numberForeman * +manpower.foremanWage) + (values.manpower.layering.duration * +manpower.numberSkilled * +manpower.skilledWage);
            values.manpower.plastering.labor_cost = (values.manpower.plastering.duration * +manpower.numberLaborer * +manpower.laborerWage) + (values.manpower.plastering.duration * +manpower.numberForeman * +manpower.foremanWage) + (values.manpower.plastering.duration * +manpower.numberSkilled * +manpower.skilledWage);

            values.material_summary.cement_bags.amount = 0;
            values.material_summary.sand.amount = 0;
            values.CHB_mortar.cement.walls.forEach((e, index) => {
                values.material_summary.cement_bags.amount += values.CHB_mortar.cement.walls[index];
                values.material_summary.sand.amount += values.CHB_mortar.sand.walls[index];
            });
            values.material_summary.cement_bags.amount += values.CHB_mortar.cement.septic;
            values.material_summary.sand.amount += values.CHB_mortar.sand.septic;
            values.for_plaster.cement.walls.forEach((e, index) => {
                values.material_summary.cement_bags.amount += values.for_plaster.cement.walls[index];
                values.material_summary.sand.amount += values.for_plaster.sand.walls[index];
            });

            values.material_summary.CHB['4 x 8 x 16'].amount = values.number_of_chb_per_type['4 x 8 x 16'].total;
            values.material_summary.CHB['6 x 8 x 16'].amount = values.number_of_chb_per_type['6 x 8 x 16'].total;
            values.material_summary.CHB['8 x 8 x 16'].amount = values.number_of_chb_per_type['8 x 8 x 16'].total;

            values.summary.reinforcement.vertical_rebars = 0;
            values.summary.reinforcement.horizontal_rebars = 0;
            values.reinforcement.vertical_reinforcement.number_of_rebars.walls.forEach((e, index) => {
                values.summary.reinforcement.vertical_rebars += values.reinforcement.vertical_reinforcement.number_of_rebars.walls[index];
                values.summary.reinforcement.horizontal_rebars += values.reinforcement.horizontal_reinforcement.number_of_rebars.walls[index];
            });
            values.summary.reinforcement.vertical_rebars += values.reinforcement.vertical_reinforcement.number_of_rebars.septic;
            values.summary.reinforcement.horizontal_rebars += values.reinforcement.horizontal_reinforcement.number_of_rebars.septic;

            values.material_summary.rebar.amount = values.summary.reinforcement.vertical_rebars + values.summary.reinforcement.horizontal_rebars;
            values.material_summary.tie_wire.amount = 0;

            values.reinforcement.tie_wire_kgs.walls.forEach((e, index) => {
                values.material_summary.tie_wire.amount += values.reinforcement.tie_wire_kgs.walls[index];
            });
            values.material_summary.tie_wire.amount += values.reinforcement.tie_wire_kgs.septic;

            // Price
            values.material_summary.cement_bags.price = values.material_summary.cement_bags.amount * +material.cement_bags;
            values.material_summary.sand.price = values.material_summary.sand.amount * +material.sand;
            values.material_summary.CHB['4 x 8 x 16'].price = values.material_summary.CHB['4 x 8 x 16'].amount * +material.CHB['4 x 8 x 16'];
            values.material_summary.CHB['6 x 8 x 16'].price = values.material_summary.CHB['6 x 8 x 16'].amount * +material.CHB['6 x 8 x 16'];
            values.material_summary.CHB['8 x 8 x 16'].price = values.material_summary.CHB['8 x 8 x 16'].amount * +material.CHB['8 x 8 x 16'];
            values.material_summary.rebar.price = values.material_summary.rebar.amount * +material.rebar;
            values.material_summary.tie_wire.price = values.material_summary.tie_wire.amount * +material.tie_wire;

            console.log(masonryValues, values);
            // Go to Summary View
            setSummaryView(true);
            return values;
        });
    }

    return (
        <Container fluid className="main-content-container px-4 pb-4">
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
                <PageTitle sm="4" title="Masonry" subtitle="Estimation" className="text-sm-left" />
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
                        {[...Array(wallFormCount)].map((e, i) => <Walls key={i} index={i} masonryValues={masonryValues} setMasonryValues={setMasonryValues} incrementWallFormCount={incrementWallFormCount} />)}
                        <SepticWalls masonryValues={masonryValues} setMasonryValues={setMasonryValues} />
                        <Manpower masonryValues={masonryValues} setMasonryValues={setMasonryValues} />
                        <MaterialCosts masonryValues={masonryValues} setMasonryValues={setMasonryValues} />
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

export default Masonry;