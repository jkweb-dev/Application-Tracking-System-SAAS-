import jwt from "jsonwebtoken";


const protect = (req,res,next)=>{


    try{


        const authHeader = req.headers.authorization;



        if(!authHeader){

            return res.status(401).json({

                message:"No token provided"

            });

        }



        const token = authHeader.split(" ")[1];



        const decoded = jwt.verify(

            token,

            process.env.JWT_SECRET

        );


if(decoded.role === "employer"){
        req.user = decoded;
}else if(decoded.role === "hiring_manager" || decoded.role ===  "recruiter"){
    req.user = {
        _id : decoded.id ,
        id : decoded.employerId ,
        role : decoded.role
    }
}else if (decoded.role === "jobseeker") {
    req.user = decoded
}



        next();



    }

    catch(error){


        return res.status(401).json({

            message:"Invalid or expired token"

        });


    }


};



export default protect;