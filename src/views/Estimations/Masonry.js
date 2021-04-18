import React, {useState} from 'react';

import { Container, Row, Col, Button } from "shards-react";
import PageTitle from "../../components/common/PageTitle";

import Walls from '../../components/masonry-estimation/Walls';
import Manpower from '../../components/masonry-estimation/Manpower';
import MaterialCosts from '../../components/masonry-estimation/MaterialCosts';

function Masonry(props) {
    const [wallFormCount, setWallFormCount] = useState(1);

    const [masonryValues, setMasonryValues] = useState({
        wallsValues: [],
        manpowerValues: {},
        materialCostsValues: {}
    });

    const incrementWallFormCount = () => {
        setWallFormCount(count => count + 1);
    }

    return (
        <Container fluid className="main-content-container px-4 pb-4">
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
                <PageTitle sm="4" title="Masonry" subtitle="Estimation" className="text-sm-left" />
            </Row>

            {/* Default Dark Table */}
            <Row>
                <Col>
                    {[...Array(wallFormCount)].map((e, i) => <Walls key={i} index={i} masonryValues={masonryValues} setMasonryValues={setMasonryValues} incrementWallFormCount={incrementWallFormCount} />)}
                    <Manpower masonryValues={masonryValues} setMasonryValues={setMasonryValues} />
                    <MaterialCosts masonryValues={masonryValues} setMasonryValues={setMasonryValues} />
                </Col>
                <Col md="12">
                    <Button type="submit" icon="check" onClick={e => {
                        console.log(masonryValues);
                    }}>Summarize</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Masonry;