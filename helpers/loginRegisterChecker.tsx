export const loginRegisterChecker = (name: string, value: string) => {
  const usernamePattern = /^[a-zA-Z0-9]+$/;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  switch (name) {
    case "username":
      return usernamePattern.test(value)
        ? { error: false, message: "" }
        : {
            error: true,
            message: "Username should include only letters.",
          };
    case "email":
      return emailPattern.test(value)
        ? { error: false, message: "" }
        : {
            error: true,
            message: "Please enter a real mail.",
          };

    case "password":
      return { error: false, message: "" };

    case "passwordRepeat":
      return { error: false, message: "" };

    default:
      return { error: false, message: "" };
  }
};
