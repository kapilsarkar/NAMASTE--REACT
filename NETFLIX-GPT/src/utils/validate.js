export const checkValidateData = (email, password, name, mobile, isSignUp = false) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email-Id is not valid";
  if (!isPasswordValid)
    return "Password must be at least 8 characters and include uppercase, lowercase, and a number";

  if (isSignUp) {
    const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    const isMobileValid = /^\+?[0-9]{10,15}$/.test(mobile);

    if (!isNameValid) return "Name is not valid";
    if (!isMobileValid) return "Mobile number is not valid";
  }

  return null;
};