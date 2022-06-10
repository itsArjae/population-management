
const db = require("../../models");
const {user} = db;
const Op = db.Sequelize.Op;

exports.create = async(req, res) => {
try{
  const {fname, mname, sname,age,contact,voter} = req.body;

  // duplication
  const foundNumber = await user.findOne({ where: {contact}});
  console.log(foundNumber);
    if(foundNumber)
{
  return res.status(400).send({
    message: "Number Duplicate",
  });
}

//parameter null checker
if(!fname || !mname || !sname || !age || !contact || !voter){
  return res.status(400).send({
    message: "Details Incomplete",
  });
}


    await user.create({
    fname,
    mname,
    sname,
    age,
    contact,
    voter
    });
   return res.status(200).send({
      message: "success",
    });
}catch(err){

 return res.status(400).send({
    message: "cannot create data",
  });
}
};

exports.update = async(req, res) => {};
exports.findOne = async(req, res) => {};
exports.findAll = async(req, res) => {
try{
  let userdata = await user.findAll();

  return res.status(200).send({
    data: userdata,
  });

}catch(err){}

};
