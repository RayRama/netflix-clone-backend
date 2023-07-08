import React from "react";
import { useParams } from "react-router-dom";

export default function DetailMovie() {
  const params = useParams();
  return <div>{params.movieId}</div>;
}
