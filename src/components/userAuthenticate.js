/**
 *  User Authentication () 
 */
const userAuthenticate = ((credentials, DataBase) => {
  console.log("in userAuthenticate()");

  console.log(typeof credentials);
  console.log(credentials);
  
  console.log(typeof DataBase);
  console.log(DataBase);

  // var match = {};
  const match = DataBase.find(item => {
    console.log("in match");
    console.log(item);
    console.log(JSON.stringify(item));
    console.log(credentials);
    console.log(JSON.stringify(credentials) === JSON.stringify(item));
    return (JSON.stringify(credentials) === JSON.stringify(item));
    // return (credentials===item);

  })

  console.log("mattched values");
  console.log(match ? match : "not matched");

  return (match);


})


export default userAuthenticate;