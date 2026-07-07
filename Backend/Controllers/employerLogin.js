import Employer from "../Models/employer.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loginEmployer = async (req, res) => {

    try {

        const { email, password } = req.body;

        // Check employer exists

        const employer = await Employer.findOne({ email });

        if (!employer) {

            return res.status(400).json({

                message: "Invalid credentials"

            });

        }

        // Compare password

        const isMatch = await bcrypt.compare(

            password,

            employer.password

        );

        if (!isMatch) {

            return res.status(400).json({

                message: "Invalid credentials"

            });

        }

        // JWT

        const token = jwt.sign(

            {

                id: employer._id,

                role: employer.role

            },

            process.env.JWT_SECRET,

            {

                expiresIn: "1h"

            }

        );

        res.status(200).json({

            success: true,

            message: "Login Successful",

            token,

            employer: {

                id: employer._id,

                companyName: employer.companyName,

                email: employer.email,

                role: employer.role

            }

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

export default loginEmployer;