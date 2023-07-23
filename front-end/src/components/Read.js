import React from 'react';
import { Button, Card, CardBody, CardHeader, CardTitle, Table } from 'reactstrap';

const Read = () => {
  const heades = [];
  return (
    <Card>
      <CardHeader className="d-flex justify-content-md-between align-items-center">
        Simple Table
        <Button color="success" outline>
          Add
        </Button>
      </CardHeader>
      <CardTitle></CardTitle>
      <CardBody>
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Username</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default Read;
