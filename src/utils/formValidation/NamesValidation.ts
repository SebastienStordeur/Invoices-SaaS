import { Dispatch, SetStateAction } from "react";

const nameRegex: RegExp = /^\p{L}+$/u;
const textRegex: RegExp = /^[\p{L}\p{N}\s]+$/u;

export async function validateName(
  name: string | undefined,
  setError: Dispatch<SetStateAction<boolean>>,
  setErrorMessage: Dispatch<SetStateAction<string>>
) {
  if (name == undefined) return;
  if (name!.trim() === "") {
    setError(true);
    setErrorMessage("Cannot be empty");
    return false;
  } else if (name!.trim() !== "" && !nameRegex.test(name!)) {
    setError(true);
    setErrorMessage("Wrong format");
    return false;
  } else {
    setError(false);
    setErrorMessage("");
    return true;
  }
}

export async function validateText(
  text: string | undefined,
  setError: Dispatch<SetStateAction<boolean>>,
  setErrorMessage: Dispatch<SetStateAction<string>>
) {
  if (text == undefined) return;
  if (text!.trim() === "") {
    setError(true);
    setErrorMessage("Cannot be empty");
    return false;
  } else if (text!.trim() !== "" && !textRegex.test(text!)) {
    setError(true);
    setErrorMessage("Caracters not allowed");
    return false;
  } else {
    setError(false);
    setErrorMessage("");
    return true;
  }
}
