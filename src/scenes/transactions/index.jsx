import { Box, useTheme } from "@mui/material";
import React, { useState } from "react";
import { useGetTransactionsQuery } from "state/api";

const Transactions = () => {
  const theme = useTheme();

  // values to send to backend
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");

  const { data, isLoading } = useGetTransactionsQuery({
    page,
    pageSize,
    sort,
    search,
  });
  console.log("🚀 ~ file: index.jsx:20 ~ Transactions ~ data:", data);

  return <Box></Box>;
};

export default Transactions;
