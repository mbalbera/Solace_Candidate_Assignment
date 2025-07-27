import { advocateData } from "../../../../db/seed/advocates";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const term = searchParams.get("term") || "";
  const lowerTerm = term.toLowerCase();

  const data = advocateData.filter((advocate) => (
    advocate.firstName?.toLowerCase().includes(lowerTerm) ||
    advocate.lastName?.toLowerCase().includes(lowerTerm) ||
    advocate.city?.toLowerCase().includes(lowerTerm) ||
    advocate.degree?.toLowerCase().includes(lowerTerm) ||
    advocate.specialties?.some((s) => s.toLowerCase().includes(lowerTerm)) ||
    advocate.yearsOfExperience?.toString().includes(lowerTerm)
  ));
  return Response.json({ data });
}
