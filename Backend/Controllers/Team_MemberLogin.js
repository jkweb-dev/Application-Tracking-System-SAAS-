import TeamMember from "../Models/Team_Member.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const teamMemberLogin = async(req,res)=>{


    try{


        const{

            email,

            password

        } = req.body;





        if(

            !email ||

            !password

        ){


            return res.status(400).json({

                message:"Email and password are required"

            });


        }






        const member = await TeamMember.findOne({

            email

        });






        if(!member){


            return res.status(401).json({

                message:"Invalid email or password"

            });


        }







        const isPasswordCorrect = await bcrypt.compare(

            password,

            member.password

        );






        if(!isPasswordCorrect){


            return res.status(401).json({

                message:"Invalid email or password"

            });


        }







        const token = jwt.sign(

            {

                id:member._id,

                employerId:member.EmployerId,

                role:member.role

            },

            process.env.JWT_SECRET,

            {

                expiresIn:"1h"

            }

        );








        return res.status(200).json({


            message:"Login successful",


            token,


            role:member.role


        });




    }



    catch(error){


        console.log(error);



        return res.status(500).json({

            message:"Server error"

        });


    }


};