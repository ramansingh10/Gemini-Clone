import express from "express";
import { formDetails } from "../schema/schema.js";
import bcrypt from "bcrypt"

export const loginInfo = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await formDetails.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server error" });
  }
};
