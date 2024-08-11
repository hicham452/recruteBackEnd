const {prisma} = require('../config/db');
const bcrypt = require('bcrypt');
module.exports = {

    signup : async (req,res)=>{

        try{

            const {email, password} = req.body;

            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(password, salt);

            const user = await prisma.user.create({

                email,
                password : hashedPassword

            })

            res.status(201).json({message : 'user created'})
                
            


        }catch(err){

            console.log(err)
        }


    },

    signin : async(req,res)=> {

        try{

            const user = await prisma.user.create({



            })
                
            


        }catch(err){

            console.log(err)
        }

    }

}