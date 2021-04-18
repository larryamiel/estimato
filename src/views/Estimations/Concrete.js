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

function Concrete(props) {
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

    return (
        <Container fluid className="main-content-container px-4 pb-4">
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
                <PageTitle sm="4" title="Concrete" subtitle="Estimation" className="text-sm-left" />
            </Row>

            {/* Default Dark Table */}
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
                        console.log(concreteValues);
                    }}>Summarize</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Concrete;