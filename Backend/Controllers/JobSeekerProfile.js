import JobSeekerProfile from "../Models/JobSeekerProfile.js";



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