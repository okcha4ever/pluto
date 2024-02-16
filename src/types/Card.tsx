interface CompanyProps {
  id: number;
  name: string;
  description: string;
  type: "Founder" | "Inverstor" | "None";
  category: String;
  ceoId: String;
}

export type { CompanyProps };
