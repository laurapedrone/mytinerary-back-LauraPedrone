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

export const signUpSchema = joi.object({
  email: joi.string().email().required().messages({
    "any.required": "Email is a required field.",
  }),
  password: joiPwd(complexityOptions).required().messages({
    "any.required": "Password is a required field.",
  }),
  name: joi.string().alphanum().min(3).max(16).required().messages({
    "string.base": "Name should be a type of 'text'.",
    "string.empty": "Name cannot be an empty field.",
    "string.min": "Name should have a minimum length of 3.",
    "any.required": "Name is a required field.",
  }),
  surname: joi.string().alphanum().min(3).max(16).required().messages({
    "string.base": "Surname should be a type of 'text'.",
    "string.empty": "Surname cannot be an empty field.",
    "string.min": "Surname should have a minimum length of 3.",
    "any.required": "Surname is a required field.",
  }),
  photoURL: joi.string().uri(),
  country: joi.string().required().messages({
    "string.base": "Country should be a type of 'text'.",
    "any.required": "Country is a required field.",
  }),
  verified: joi.boolean(),
});

