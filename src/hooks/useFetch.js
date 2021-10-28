import { useState, useEffect } from "react";
import axios from "axios";
import parser from "papaparse";
import CSVFILE from "../data/data.csv";

export default function useFetch() {
  const [CsvData, setCsvData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(CSVFILE);
      const rows = parser.parse(response.data, {
        header: true,
      }); // object with { data, errors, meta }
      setCsvData(rows.data);
    }
    getData();
  }, []);

  return CsvData;
}
