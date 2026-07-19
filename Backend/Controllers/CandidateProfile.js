import JobSeekerProfile from "../Models/JobSeekerProfile.js";



export const getCandidateProfile = async (req, res) => {

    try {


        // Only employer can view candidates

        if (req.user.role !== "employer") {

            return res.status(403).json({

                success: false,

                message: "Access denied"

            });

        }



        const { profileId } = req.params;



        const profile = await JobSeekerProfile.findById(

            profileId

        );



        if (!profile) {

            return res.status(404).json({

                success: false,

                message: "Candidate profile not found"

            });

        }



        return res.status(200).json({

            success: true,

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