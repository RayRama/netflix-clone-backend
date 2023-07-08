import React from "react";
import { useParams } from "react-router-dom";

export default function DetailUser() {
  const params = useParams();
  return <div>{params.userId}</div>;
}
