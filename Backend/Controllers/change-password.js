import Employer from "../Models/employer.js";
import bcrypt from "bcrypt";

export const changePassword = async(req,res)=>{


    try{


        const userId = req.user.id;



        const {

            currentPassword,

            newPassword

        } = req.body;





        if(!currentPassword || !newPassword){


            return res.status(400).json({

                message:"Current password and new password are required"

            });


        }






        const user = await Employer.findById(userId);




        if(!user){


            return res.status(404).json({

                message:"User not found"

            });


        }






        const isMatch = await bcrypt.compare(

            currentPassword,

            user.password

        );





        if(!isMatch){


            return res.status(400).json({

                message:"Current password is incorrect"

            });


        }






        const hashedPassword = await bcrypt.hash(

            newPassword,

            10

        );





        user.password = hashedPassword;



        await user.save();





        return res.status(200).json({

            message:"Password changed successfully"

        });



    }


    catch(error){


        console.log(error);



        return res.status(500).json({

            message:"Server error"

        });


    }


};