import { Dispatch, SetStateAction } from "react";

const emailRegex: RegExp =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

export async function validationEmail(
  email: string,
  setError: Dispatch<SetStateAction<boolean>>,
  setMessageError: Dispatch<SetStateAction<string>>
) {
  if (email.trim() === "") {
    setError(true);
    setMessageError("Email cannot be empty");
    return false;
  } else if (email.trim() !== "" && !emailRegex.test(email)) {
    setError(true);
    setMessageError("Wrong email format");
    return false;
  } else {
    setError(false);
    setMessageError("");
    return true;
  }
}
