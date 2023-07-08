import React from "react";
import { useParams } from "react-router-dom";

export default function DetailList() {
  const params = useParams();
  return <div>{params.listId}</div>;
}
