import React from "react";
import { Button, Card, CardBody, CardHeader, CardTitle, Table } from "reactstrap";
import { deleteData } from "../api";

const Read = (props) => {
  const { showDetail, data, loading, refresh, setRefresh, setParams } = props;
  const detailOnClick = (id) => {
    showDetail("detail");
    setParams(id);
    setRefresh(!refresh);
  };
  const deleteUser = async (id) => {
    const res = await deleteData(id);
    if (res) {
      setRefresh(!refresh);
    }
  };
  if (loading) return <p>Loading..</p>;
  return (
    <Card>
      <CardHeader className="d-flex justify-content-md-between align-items-center">
        Simple Table
        <Button color="success" onClick={() => showDetail("add")} outline>
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.length > 0 ? (
              data?.map((item) => (
                <tr key={item?.id} className="align-items-center h-auto">
                  <th scope="row">{item?.userid}</th>
                  <td>{item?.namalengkap}</td>
                  <td>{item?.username}</td>
                  <td>{item?.status}</td>
                  <td className="d-flex gap-2">
                    <Button color="info" outline onClick={() => detailOnClick(item?.userid)}>
                      Detail
                    </Button>{" "}
                    <Button color="danger" onClick={() => deleteUser(item?.userid)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} align="center">
                  No data
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default Read;
