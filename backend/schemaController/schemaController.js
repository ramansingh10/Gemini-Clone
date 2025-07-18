import { formDetails } from "../schema/schema.js";
import bcrypt from 'bcrypt'

export const information = async (req, res, next) => {
  const { email, password, firstName, lastName } = req.body;

  //check existing email
  try {
    const existingEmail = await formDetails.findOne({ email });

    if (existingEmail) {
      return res.status(409).json({ message: "Email already exists" });
    }

    //hash the password

    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(password, saltRound)

    if (!email || !password || !firstName || !lastName) {
      return req.status(400).send("Error");
    }
    await formDetails.create({ email, password:hashedPassword, firstName, lastName });
    res.send("Deatailed send successfully");
  } catch (error) {
    res.send("Some error occured");
  }
};
