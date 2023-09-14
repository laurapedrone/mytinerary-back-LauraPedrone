import joi from "joi";
import joiPwd from "joi-password-complexity";

const complexityOptions = {
    min: 4,
    max: 100,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 4,
  };

  export const signInSchema = joi.object({
    email: joi.string().email().required().messages({
      "any.required": "Email is a required field.",
      "string.empty": "Email cannot be an empty field.",
      "string.email": "Email must have @ and .com",
    }),
    password: joiPwd(complexityOptions).required().messages({
      "any.required": "Password is a required field.",
    }),
  });