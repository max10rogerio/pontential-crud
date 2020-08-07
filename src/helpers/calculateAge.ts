export const calculateAge = (birthday: string | Date): number => {
  const bd =
    typeof birthday === "string" ? Date.parse(birthday) : birthday.getTime();
  const millis = Date.now() - bd;
  const age = new Date(millis).getFullYear() - 1970;

  if (isNaN(age)) {
    throw new Error("Invalid date");
  }

  return age;
};
