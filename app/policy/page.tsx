"use client";

import React, { useState } from "react";
import axios from "axios";
import InsuranceFormFields, {
  InsuranceFormData,
} from "@/components/InsuranceFormFields";
import InsuranceOutput from "@/components/InsuranceOutput";
import { InsuranceYear } from "@/utils/types";

const InsuranceForm: React.FC = () => {
  const BASE_URL = "http://127.0.0.1:8000";
  const [data, setData] = useState<InsuranceYear[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (formData: InsuranceFormData) => {
    console.log("Validated Data:", formData);
    try {
      setIsLoading(true);
      const res = await axios.post(`${BASE_URL}/api/policy`, formData);
      setData(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div className="flex justify-center items-center">Loading ...</div>;
  }

  return (
    <div className="bg-white p-6">
      {data.length === 0 ? (
        <InsuranceFormFields onSubmit={onSubmit} />
      ) : (
        <InsuranceOutput data={data} />
      )}
    </div>
  );
};

export default InsuranceForm;
