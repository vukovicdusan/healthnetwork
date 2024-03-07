export const emailChecker = (value: string) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(value)
    ? { emailError: false, message: "" }
    : {
        emailError: true,
        emailErrorMessage: "Please enter a real mail.",
      };
};
