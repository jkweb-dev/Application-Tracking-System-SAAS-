import Employer from "../Models/employer.js";

import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

export const registerEmployer = async (req,res) => {

try{

const {

companyName,

industry,

companySize,

location,

hrName,

email,

password

}

=

req.body;

const existingEmployer =

await Employer.findOne({

email

});

if(existingEmployer){

return res.status(400).json({

message:

"Employer already exists"

});

}

const hashedPassword =

await bcrypt.hash(

password,

10

);

const employer =

await Employer.create({

companyName,

industry,

companySize,

location,

hrName,

email,

password:

hashedPassword

});

const token = jwt.sign(

{

id:employer._id,

role:employer.role

},

process.env.JWT_SECRET,

{

expiresIn:"1h"

}

);

res.status(201).json({

success:true,

message:

"Employer registered",

token,

employer

});

}

catch(error){

res.status(500).json({

message:error.message

});

}

};