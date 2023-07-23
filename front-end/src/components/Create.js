import React from 'react';
import { Form, FormGroup, Label, Input, Button, Row, Col, Card, CardBody } from 'reactstrap';

const Create = () => {
  return (
    <Card>
      <CardBody>
        <Form>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="fullName">Nama Lengkap</Label>
                <Input id="fullName" name="fullName" placeholder="Your full name" type="text" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="userName">User Name</Label>
                <Input id="userName" name="userName" placeholder="Your username" type="text" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input id="password" name="address" placeholder="Your Password" type="password" />
          </FormGroup>
          <FormGroup className="d-flex justify-content-md-end">
            <Button color="primary">Add Data</Button>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  );
};

export default Create;
