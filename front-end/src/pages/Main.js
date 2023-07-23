import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Create from "../components/Create";
import Read from "../components/Read";
import { getUser } from "../api";

const Main = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [type, setType] = useState("add");
  const [params, setParams] = useState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    getUsers();
  }, [refresh]);

  const getUsers = async () => {
    setLoading(true);
    await getUser("all").then((res) => {
      setData(res?.data?.data);
      setLoading(false);
    });
  };

  const showDetail = (types) => {
    setType(types);
    setShow(true);
  };
  const onClose = () => {
    setShow(false);
  };
  return (
    <MainLayout>
      <h1>Simple CRUD</h1>
      {show && (
        <Create type={type} loading={loading} setLoading={setLoading} refresh={refresh} setRefresh={setRefresh} params={params} closeCard={onClose} />
      )}
      <Read
        setType={setType}
        showDetail={showDetail}
        data={data}
        setParams={setParams}
        refresh={refresh}
        setRefresh={setRefresh}
        closeCard={onClose}
      />
    </MainLayout>
  );
};

export default Main;
