import crypto from "crypto";
import JobSeeker from "../Models/jobseeker.js";
import bcrypt from "bcrypt";
import { sendEmail } from "../utils/sendEmail.js";

export const forgotPassword = async (req, res) => {
console.log("Route Hitted")
    try {

        const { email } = req.body;

        if (!email) {

            return res.status(400).json({

                success: false,

                message: "Email is required."

            });

        }

        const user = await JobSeeker.findOne({

            email

        });

        // Security:
        // Don't reveal whether the email exists.

        if (!user) {

            return res.status(200).json({

                success: true,

                message:
                    "If an account exists with this email, a password reset link has been sent."

            });

        }

        // Generate random token

        const resetToken = crypto

            .randomBytes(32)

            .toString("hex");



        // Hash token before storing

        const hashedToken = crypto

            .createHash("sha256")

            .update(resetToken)

            .digest("hex");



       user.resetPasswordToken = hashedToken;

       user.resetPasswordExpire =

            Date.now() + 15 * 60 * 1000;



        await user.save();




        // Frontend URL

        const resetUrl =

            `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;




       await sendEmail(

    user.email,

    "RecruitFlow Password Reset",

    `

    <div style="font-family:Arial;padding:20px;">

        <h2>Reset Your Password</h2>

        <p>

            We received a request to reset your RecruitFlow password.

        </p>

        <p>

            Click the button below to reset your password.

        </p>

        <a

            href="${resetUrl}"

            style="

                display:inline-block;

                margin-top:20px;

                padding:12px 24px;

                background:#4f46e5;

                color:white;

                text-decoration:none;

                border-radius:8px;

            "

        >

            Reset Password

        </a>

        <p style="margin-top:20px;">

            This link will expire in 15 minutes.

        </p>

        <p>

            If you didn't request this, you can safely ignore this email.

        </p>

    </div>

    `

);



        return res.status(200).json({

            success: true,

            message:
                "If an account exists with this email, a password reset link has been sent."

        });

    }

    catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal server error."

        });

    }

};







export const resetPassword = async (req, res) => {

    try {

        const { token } = req.params;

        const { password, confirmPassword } = req.body;



        if (!password || !confirmPassword) {

            return res.status(400).json({

                success:false,

                message:"Password and confirm password are required."

            });

        }



        if (password !== confirmPassword) {

            return res.status(400).json({

                success:false,

                message:"Passwords do not match."

            });

        }



        // Hash token from URL

        const hashedToken = crypto

            .createHash("sha256")

            .update(token)

            .digest("hex");



        const user = await JobSeeker.findOne({

            resetPasswordToken: hashedToken,

            resetPasswordExpire: {

                $gt: Date.now()

            }

        });



        if (!user) {

            return res.status(400).json({

                success:false,

                message:"Invalid or expired reset link."

            });

        }



        // Hash new password

        const salt = await bcrypt.genSalt(10);


user.password = await bcrypt.hash(

            password,

            salt

        );



        // Remove reset fields

       user.resetPasswordToken = null;

       user.resetPasswordExpire = null;



        await user.save();



        return res.status(200).json({

            success:true,

            message:"Password reset successfully."

        });


    }

    catch(error){

        console.log(error);


        return res.status(500).json({

            success:false,

            message:"Internal server error."

        });

    }

};