const User = require("../models/User");

exports.signin = async (req, resp) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    console.log(user)
    if(user) {
      return resp.send({ st: "okay",user });
     }
     throw  Error('can not find a user with those credentials')
  } catch (error) {
    return resp.send({ st: error.message });
  }
  
};
