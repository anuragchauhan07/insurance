export enum Gender {
  Male = 1,
  Female = 2,
  Other = 3,
}

export enum PremiumFrequency {
  Yearly = 1,
  HalfYearly = 2,
  Quarterly = 3,
  Monthly = 4,
}

export const GenderLabels: Record<Gender, string> = {
  [Gender.Male]: "Male",
  [Gender.Female]: "Female",
  [Gender.Other]: "Other",
};

export const PremiumFrequencyLabels: Record<PremiumFrequency, string> = {
  [PremiumFrequency.Yearly]: "Yearly",
  [PremiumFrequency.HalfYearly]: "Half-Yearly",
  [PremiumFrequency.Quarterly]: "Quarterly",
  [PremiumFrequency.Monthly]: "Monthly",
};

export interface InsurancePlan {
  dob: string;
  gender: Gender;
  sumAssured: number;
  modalPremium: number;
  premiumFrequency: PremiumFrequency;
  pt: number;
  ppt: number;
}
