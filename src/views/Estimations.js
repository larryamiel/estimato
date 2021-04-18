import React from 'react';
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import AddNewEstimation from "../components/add-new-estimation/AddNewEstimationForm";

function Estimations(props) {
    return (
        <Container fluid className="main-content-container px-4 pb-4">
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
                <PageTitle sm="4" title="Estimations" subtitle="All Estimation" className="text-sm-left" />
            </Row>

            {/* Default Dark Table */}
            <Row>
                <Col>
                    <AddNewEstimation/>
                </Col>
            </Row>
        </Container>
    );
}

export default Estimations;