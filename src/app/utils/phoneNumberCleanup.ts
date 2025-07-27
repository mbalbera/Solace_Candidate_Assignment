export default function phoneNumberCleanup(phoneNumber: string): string {
  // Ensure input is a string and remove all non-digit characters
  const cleaned = String(phoneNumber).replace(/\D/g, "");

  // Format the phone number as (XXX) XXX-XXXX
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }

  // If the format is not matched, return the cleaned number
  return cleaned;
}