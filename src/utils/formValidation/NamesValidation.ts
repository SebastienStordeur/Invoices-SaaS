import { Dispatch, SetStateAction } from "react";

const nameRegex: RegExp = /^\p{L}+$/u;

export async function validateName(
  name: string,
  setError: Dispatch<SetStateAction<boolean>>,
  setErrorMessage: Dispatch<SetStateAction<string>>
) {
  if (name.trim() === "") {
    setError(true);
    setErrorMessage("Cannot be empty");
    return false;
  } else if (name.trim() !== "" && !nameRegex.test(name)) {
    setError(true);
    setErrorMessage("Wrong format");
    return false;
  } else {
    setError(false);
    setErrorMessage("");
    return true;
  }
}
