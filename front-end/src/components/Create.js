import React, { useEffect, useState } from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col, Card, CardBody, CardHeader } from "reactstrap";
import { getUser, submitDataUser } from "../api";

const Create = (props) => {
  const { type, loading, setLoading, refresh, setRefresh, params, closeCard } = props;
  const [isActive, setIsActive] = useState(false);
  const [data, setData] = useState({});
  const [detail, setDetail] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const fetchDetail = async () => {
    setLoading(true);
    await getUser(params).then((res) => {
      setDetail(res?.data?.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    if (type === "detail") {
      fetchDetail();
    }
  }, [refresh]);
  const onSubmitData = async () => {
    try {
      const payload = {
        ...data,
        status: isActive ? "active" : "notactive",
      };
      await submitDataUser(payload).then((res) => {
        setRefresh(!refresh);
        closeCard(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <p>Loading...</p>;
  return (
    <Card>
      <CardHeader className="d-flex justify-content-end">
        <Button color="danger" onClick={() => closeCard(false)}>
          X
        </Button>
      </CardHeader>
      <CardBody>
        <Form onSubmit={onSubmitData}>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="namalengkap">Nama Lengkap</Label>
                <Input
                  id="namalengkap"
                  name="namalengkap"
                  placeholder="Your full name"
                  type="text"
                  onChange={handleChange}
                  defaultValue={type === "detail" ? detail?.namalengkap : ""}
                  readOnly={type === "detail"}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="username">User Name</Label>
                <Input
                  id="username"
                  name="username"
                  placeholder="Your username"
                  type="text"
                  onChange={handleChange}
                  defaultValue={type === "detail" ? detail?.username : ""}
                  readOnly={type === "detail"}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  placeholder="Your Password"
                  type="password"
                  onChange={handleChange}
                  defaultValue={type === "detail" ? detail?.password : ""}
                  readOnly={type === "detail"}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup switch>
                <Input
                  type="switch"
                  role="switch"
                  onChange={() => setIsActive(!isActive)}
                  checked={type === "detail" ? (detail?.status === "active" ? true : false) : isActive}
                  disabled={type === "detail"}
                  defaultValue={detail?.status === "active" ? true : false}
                />
                <Label check>Status</Label>
              </FormGroup>
            </Col>
          </Row>
          {type === "add" && (
            <FormGroup className="d-flex justify-content-md-end">
              <Button color="primary" onClick={onSubmitData}>
                Add Data
              </Button>
            </FormGroup>
          )}
        </Form>
      </CardBody>
    </Card>
  );
};

export default Create;
