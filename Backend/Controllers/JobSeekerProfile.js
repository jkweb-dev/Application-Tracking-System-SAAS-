import JobSeekerProfile from "../Models/JobSeekerProfile.js";
import fs from "fs"



export const createProfile = async (req, res) => {

    try {

        // Only Job Seekers

        if (req.user.role !== "jobseeker") {

            return res.status(403).json({

                success: false,

                message: "Access denied"

            });

        }



        // Profile already exists?

        const existingProfile = await JobSeekerProfile.findOne({

            userId: req.user.id

        });



        if (existingProfile) {

            return res.status(409).json({

                success: false,

                message: "Profile already exists"

            });

        }



        // Parse JSON

        const profile = JSON.parse(req.body.profile);



        // Resume Required

        if (!req.file) {

            return res.status(400).json({

                success: false,

                message: "Resume is required"

            });

        }



        // Create Profile

        const jobSeekerProfile = await JobSeekerProfile.create({

            userId: req.user.id,

            firstName: profile.firstName,

            lastName: profile.lastName,

            email: profile.email,

            phone: profile.phone,

            location: profile.location,



            headline: profile.headline,

            bio: profile.bio,

            experienceLevel: profile.experienceLevel,

            yearsOfExperience: profile.yearsOfExperience,



            skills: profile.skills,



            education: profile.education,



            experience: profile.experience,



            resume: {

                filename: req.file.filename,

                originalName: req.file.originalname,

                path : req.file.path,

                uploadedAt: new Date()

            },



            profileCompleted: true

        });



        return res.status(201).json({

            success: true,

            message: "Profile created successfully",

            profile: jobSeekerProfile

        });

    }

    catch (error) {

        console.log(error);



        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};









export const getProfile = async (req, res) => {

    try {


        if(req.user.role !== "jobseeker"){

            return res.status(403).json({

                success:false,

                message:"Access denied"

            });

        }



        const profile = await JobSeekerProfile.findOne({

            userId:req.user.id

        });



        if(!profile){

            return res.status(404).json({

                success:false,

                message:"Profile not found"

            });

        }



        return res.status(200).json({

            success:true,

            profile

        });


    }
    catch(error){


        console.log(error);



        return res.status(500).json({

            success:false,

            message:"Internal server error"

        });


    }

};



export const updateProfile = async (req,res)=>{

    try{


        if(req.user.role !== "jobseeker"){


            return res.status(403).json({

                success:false,

                message:"Access denied"

            });

        }





        const userId = req.user.id;





        const profileData = JSON.parse(

            req.body.profile

        );






        const profile = await JobSeekerProfile.findOne({

            userId

        });






        if(!profile){


            return res.status(404).json({

                success:false,

                message:"Profile not found"

            });


        }









        // Update normal fields

        Object.assign(

            profile,

            profileData

        );









        // If new resume uploaded

      if(req.file){



    // Delete old resume

    if(profile.resume?.path){


        fs.unlink(

            profile.resume.path,

            (error)=>{


                if(error){

                    console.log(
                        "Old resume deletion failed",
                        error.message
                    );

                }


            }

        );


    }






    // Save new resume


    profile.resume = {


        filename:req.file.filename,


        originalName:req.file.originalname,


        path:req.file.path,


        uploadedAt:new Date()


    };


}





        await profile.save();







        return res.status(200).json({

            success:true,

            message:"Profile updated successfully",

            profile

        });





    }

    catch(error){


        console.log(error);



        return res.status(500).json({

            success:false,

            message:"Internal server error"

        });


    }


};