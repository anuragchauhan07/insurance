import {
  GenderLabels,
  InsurancePlan,
  PremiumFrequencyLabels,
} from "@/utils/types";
import React from "react";

interface InsuranceOutputProps {
  plan: InsurancePlan;
}

const InsuranceOutput: React.FC<InsuranceOutputProps> = ({ plan }) => {
  return (
    <div className="max-w-xl mx-auto mt-6 p-4 bg-white rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center text-green-700">
        Insurance Plan Details
      </h2>
      <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
        <tbody>
          <tr className="bg-gray-50">
            <td className="p-3 font-medium border">Date of Birth</td>
            {/* <td className="p-3 border">{plan.dob}</td> */}
          </tr>
          <tr>
            <td className="p-3 font-medium border">Gender</td>
            {/* <td className="p-3 border">{GenderLabels[plan.gender]}</td> */}
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 font-medium border">Sum Assured</td>
            {/* <td className="p-3 border">₹{plan.sumAssured.toLocaleString()}</td> */}
          </tr>
          <tr>
            <td className="p-3 font-medium border">Modal Premium</td>
            <td className="p-3 border">
              {/* ₹{plan.modalPremium.toLocaleString()} */}
            </td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 font-medium border">Premium Frequency</td>
            <td className="p-3 border">
              {/* {PremiumFrequencyLabels[plan.premiumFrequency]} */}
            </td>
          </tr>
          <tr>
            <td className="p-3 font-medium border">Policy Term (PT)</td>
            {/* <td className="p-3 border">{plan.pt} years</td> */}
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 font-medium border">
              Premium Payment Term (PPT)
            </td>
            {/* <td className="p-3 border">{plan.ppt} years</td> */}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InsuranceOutput;
