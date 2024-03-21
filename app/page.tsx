"use client"

import { useState, useEffect } from "react";
import { useQuery } from '@apollo/client';
import { FETCH_MEMO_TESTS } from "@/app/apollo/queries";
import { MemoTest } from "@/types/MemoTest";
import MemoTestList from "./MemoTestList";
import Header from "./Header";
import Box from "@/components/Box";

export default function Home() {
  const { data } = useQuery(FETCH_MEMO_TESTS);
  const [memoTests, setMemoTests] = useState<MemoTest[]>([]);

  useEffect(() => {
    if (data) {
      setMemoTests(data.memoTests);
    }
  }, [data]);

  return (
    <Box>
      <Header title="Memo Test" subtitle="How high can you score?" />
      <MemoTestList memoTests={memoTests} />
    </Box>
  );
}