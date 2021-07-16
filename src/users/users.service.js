const { User } = require('./users.entity');

// const users=[
// { 
//   username:'dolo',
//   fullname:'Dolores Suarez',
//   email: 'dsuarez@claro.com.ar',
//   password:'123'
// },
// { 
//     username:'dolo2',
//     fullname:'Dolores Suarez',
//     email: 'dsuarez@claro.com.ar',
//     password:'12366'
//   }

// ]

const getUsers = async () => {
  return await User.findAll();
  // return users;

}

const getUserById = async (id) => {
  const usuario = await User.findByPk(id);
  return usuario;
  //console.log(usuario instanceof User);
  // return await User.findByPK(username);
  // element => element.username === username
}

const createUser = async (id, username, fullname, email, password) => {
  //console.log("1.s");
  const user = await User.create({
    id,
    username,
    fullname,
    email,
    password
  });
  //console.log("2.s");

  return user;
  
}

const deleteUser = async (id) => {
  return await User.destroy({
    where: {
      id: id
    }
  });

}

const updateUser = async (id, username, fullname, email, password) => {
  // const usuario= User.findByPk(username);
  // console.log(usuario);
  // const found = users.find(element => element.username === username);
  // console.log(found);
  // const pos=users.indexOf(found);
  // console.log(pos);
  const user = await User.update({
    username:username,
    fullname:fullname,
    email:email,
    password:password
  }, {
    where: {
      id: id
    }
  });
  return user;

  // users.splice(pos,1, userNew);
  // console.log(users);
  // return userNew;
}

module.exports = { getUsers, getUserById, createUser, deleteUser, updateUser };