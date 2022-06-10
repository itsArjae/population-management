

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    fname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    mname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    sname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    contact: {
      type: Sequelize.STRING,
      allowNull: false,
   
    },
    voter: {
      type: Sequelize.STRING,
      allowNull: false,
    }
   

  });

  return User;
};