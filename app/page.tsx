"use client"

import { useState, useEffect, memo } from "react";
import { useQuery } from '@apollo/client';
import { FETCH_MEMO_TESTS } from "@/app/apollo/queries";
import { MemoTest } from "@/types/MemoTest";
import MemoTestList from "./MemoTestList";
import Box from "@/components/Box";
import LoadingIndicator from "@/components/LoadingIndicator";

export default function Home() {
  const { data, loading } = useQuery(FETCH_MEMO_TESTS);
  const [memoTests, setMemoTests] = useState<MemoTest[]>([]);

  useEffect(() => {
    if (data) {
      setMemoTests(data.memoTests);
    }
  }, [data]);

  return (
    loading && !memoTests.length ? (
      <LoadingIndicator />
    ) : (
      <Box>
        <MemoTestList memoTests={memoTests} />
      </Box>
    )
  );
}