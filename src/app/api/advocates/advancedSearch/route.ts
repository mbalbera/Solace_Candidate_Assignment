import { advocateData } from "../../../../db/seed/advocates";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  console.log("Advanced Search Params:", Object.fromEntries(searchParams.entries()));
  const fields = {
    firstName: searchParams.get("firstName") || undefined,
    lastName: searchParams.get("lastName") || undefined,
    city: searchParams.get("city") || undefined,
    degree: searchParams.get("degree") || undefined,
    yearsOfExperience: searchParams.get("yearsOfExperience") || undefined,
    phoneNumber: searchParams.get("phoneNumber") || undefined,
    specialties: (searchParams.get("specialties")?.split(",").map(s => s.trim()).filter(Boolean)) || [],
  };
  console.log("Parsed Fields:", fields);

  const matchString = (field?: string, value?: string) =>(
    !value || field?.toLowerCase().includes(value.toLowerCase())
  )

  const matchYearsOfExperience = (
    field: number | string | undefined,
    value?: string
  ) => !value || field?.toString().includes(value);

  const matchSpecialties = (
    advocateSpecialties?: string[],
    searchSpecialties?: string[]
  ) =>
    !searchSpecialties || searchSpecialties.length === 0 ||
    searchSpecialties.every((specialty) =>
      advocateSpecialties
        ?.map((s) => s.toLowerCase())
        .includes(specialty.toLowerCase())
    );

  const data = advocateData.filter((advocate) => {
    return (
      matchString(advocate.firstName, fields.firstName) &&
      matchString(advocate.lastName, fields.lastName) &&
      matchString(advocate.city, fields.city) &&
      matchString(advocate.degree, fields.degree) &&
      matchYearsOfExperience(
        advocate.yearsOfExperience,
        fields.yearsOfExperience
      ) &&
      matchSpecialties(advocate.specialties, fields.specialties) &&
      matchString(
        advocate.phoneNumber?.toString(),
        fields.phoneNumber
      )
    );
  });
  console.log("Filtered Advocates:", data);
  return Response.json({ data });
}
