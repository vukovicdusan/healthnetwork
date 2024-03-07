export const usernameChecker = (value: string) => {
  const usernamePattern = /^[a-zA-Z0-9]+$/;
  return usernamePattern.test(value)
    ? { usernameError: false, message: "" }
    : {
        usernameError: true,
        usernameErrorMessage: "Username should include only letters.",
      };
};
