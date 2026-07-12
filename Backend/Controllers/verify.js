import jwt from "jsonwebtoken";

import Employer from "../Models/employer.js";
import JobSeeker from "../Models/jobseeker.js";



export const verifyUser = async (req, res) => {

    try {

        const authHeader = req.headers.authorization;


        if (!authHeader) {

            return res.status(401).json({

                success: false,

                message: "No token provided"

            });

        }


        const token = authHeader.split(" ")[1];


        const decoded = jwt.verify(

            token,

            process.env.JWT_SECRET

        );


        let user;


        if (decoded.role === "employer") {

            user = await Employer.findById(

                decoded.id

            ).select("-password");

        }


        else if ( decoded.role === "jobseeker" ) {

            user = await JobSeeker.findById(

                decoded.id

            ).select("-password");

        }

          else if ( decoded.role === "recruiter" ) {

            user = await Employer.findById(

                decoded. employerId

            ).select("-password");

        }

         else if ( decoded.role === "hiring_manager" ) {

            user = await Employer.findById(

                decoded. employerId

            ).select("-password");

        }


        else {

            return res.status(401).json({

                success: false,

                message: "Invalid role"

            });

        }


        if (!user) {

            return res.status(404).json({

                success: false,

                message: "User not found"

            });

        }


        return res.status(200).json({

            success: true,

            user

        });

    }

    catch (error) {

        return res.status(401).json({

            success: false,

            message: "Invalid or expired token"

        });

    }

};