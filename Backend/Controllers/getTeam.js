import TeamMember from "../Models/Team_Member.js";
import Employer from "../Models/employer.js";

export const getTeamMembers = async(req,res)=>{


    try{


        const employerId = req.user.id;




        // Make sure logged in user is employer

        if(req.user.role !== "employer"){


            return res.status(403).json({

                message:"You are not allowed to view team members"

            });


        }





        const employer = await Employer.findById(employerId);



        if(!employer){


            return res.status(404).json({

                message:"Employer account not found"

            });


        }







        const members = await TeamMember.find({

            EmployerId: employerId

        })

        .select(

            "-password"

        )

        .sort({

            createdAt:-1

        });







        return res.status(200).json({


            members


        });





    }


    catch(error){


        console.log(error);



        return res.status(500).json({

            message:"Server error"

        });


    }


};




export const updateTeamMember = async(req,res)=>{


    try{


        const employerId = req.user.id;


        const memberId = req.params.id;




        if(req.user.role !== "employer"){


            return res.status(403).json({

                message:"Only employer can edit team members"

            });


        }






        const member = await TeamMember.findOne({

            _id:memberId,

            EmployerId:employerId

        });





        if(!member){


            return res.status(404).json({

                message:"Team member not found"

            });


        }







        const {

            firstName,

            lastName,

            email,

            role

        } = req.body;








        // If role is changed

        if(role && role !== member.role){



            const existingRole = await TeamMember.findOne({

                EmployerId:employerId,

                role:role

            });





            if(existingRole){


                return res.status(400).json({

                    message:
                    `A ${role.replace("_"," ")} already exists for this company`

                });


            }


        }








        // Email change check

        if(email && email !== member.email){



            const existingEmail = await TeamMember.findOne({

                email

            });



            if(existingEmail){


                return res.status(400).json({

                    message:"Email already exists"

                });


            }


        }








        member.firstName = firstName || member.firstName;

        member.lastName = lastName || member.lastName;

        member.email = email || member.email;

        member.role = role || member.role;





        await member.save();







        return res.status(200).json({


            message:"Team member updated successfully",

            member


        });






    }



    catch(error){


        console.log(error);



        return res.status(500).json({

            message:"Server error"

        });


    }


};



export const deleteTeamMember = async(req,res)=>{


    try{


        const employerId = req.user.id;


        const memberId = req.params.id;






        if(req.user.role !== "employer"){


            return res.status(403).json({

                message:"Only employer can delete team members"

            });


        }







        const member = await TeamMember.findOne({

            _id:memberId,

            EmployerId:employerId

        });






        if(!member){


            return res.status(404).json({

                message:"Team member not found"

            });


        }







        await TeamMember.findByIdAndDelete(memberId);







        return res.status(200).json({


            message:"Team member deleted successfully"


        });






    }



    catch(error){


        console.log(error);



        return res.status(500).json({

            message:"Server error"

        });


    }


};


export const getTeamMember = async(req,res)=>{


    try{


        const employerId = req.user.id;


        const memberId = req.params.id;





        if(req.user.role !== "employer"){


            return res.status(403).json({

                message:"You are not allowed to view this member"

            });


        }







        const member = await TeamMember.findOne({

            _id:memberId,

            EmployerId:employerId

        })

        .select("-password");






        if(!member){


            return res.status(404).json({

                message:"Team member not found"

            });


        }






        return res.status(200).json({

            member

        });





    }


    catch(error){


        console.log(error);



        return res.status(500).json({

            message:"Server error"

        });


    }


};