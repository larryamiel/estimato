import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import AddNewEstimationForm from '../components/add-new-estimation/AddNewEstimationForm';

const AddNewEstimation = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Add New Estimation" subtitle="Estimations" className="text-sm-left" />
    </Row>

    <Row>
      {/* Editor */}
      <Col lg="12" md="12">
        <AddNewEstimationForm />
      </Col>
    </Row>
  </Container>
);

export default AddNewEstimation;
