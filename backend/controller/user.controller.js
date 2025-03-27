import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import createToken from "../jwt/generateToken.js";

export const signup = async (req, res) => {
  try {
    if(req.body){

        const { name, email, password, confirmPassword } = req.body;
        if (password !== confirmPassword) {
           return res.status(400).json({ message: "Passwords don't match" });
        }
    
        const user = await User.findOne({ email });
        if (user) {
          return res.status(400).json({ message: "Email already exists" });
        }
    
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        //data insert in database
        const newUser = await new User({
          name,
          email,
          password: hashedPassword,
        });
        await newUser.save();
          createToken(newUser._id, res);
          res.status(201).json({ message: "User created successfully", newUser: {
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
          }, }) 
    }
    else{
        res.status(400).json({ message: "Please fill all fields" });
    }
   

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });

  }
};


export const login = async (req, res)=>{
  const { email , password } = req.body;
  try {
    //email find in database
    const user = await User.findOne({email});
    //check password are match are not
    const isMatch = await bcrypt.compare(password, user.password);
    if(!user || !isMatch){
      return res.status(404).json({message: "invalid User or password"});
    }
    //when login successfully then token is created
    createToken(user._id, res);
    res.status(200).json({message: "User logged in successfully", user: {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
  })
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}



export const logout = async (req, res) =>{
  try {

    //cookie are clear from browser for logout
    res.clearCookie('jwt');
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}


export const getUserProfile = async (req, res) =>{
  try{
    // find all user from database but not showing password
    // const allUsers = await User.find().select("-password");

    const loggedInUser = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne : loggedInUser} //$ne mean not equal to
    }).select("-password");
    res.status(201).json(filteredUsers);
  }catch(error){
    console.log(" Error in allUsers Controller: "+ error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}