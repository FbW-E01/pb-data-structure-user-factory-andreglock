const userDataDump = [
  "1,Joel Peltonen,1921,Users|Admin|Sudo",
  "2,Joeltest Peltonentest,1921,Users",
  "3,Joeltest Peltonentest,,Users",
  "4,Leoj Nenotlep,,Users|Admin",
  "5,root,,Sudo|System",
  "6,Ryukahr,1901,Users|Admin",
  "7,Adamantium Claws,1332,Users",
  "8,The benevolent malevolence,,Users",
  "9,Jim Carrey,1961,Users|Admin",
  "A,Bela Lugosi,1666,Users",
  "B,Robert Smith,,Users|Admin|Sudo",
  "C,Fsh,,Users",
  "D,Racher Carson,,Users",
  "D,Cheesedude51,1951,Users",
  "E,cron,,System",
];

const makeUserObject = (userInput) => {
  let userDataArray = [];
  const userObject = [];
  for (let i = 0; i < userInput.length; i++) {
    userDataArray[i] = userInput[i].split(',');
  }
  for (let i = 0; i < userDataArray.length; i++) {
    userObject.push( {
      id: userDataArray[i][0],
      fullName: userDataArray[i][1],
      initials: userDataArray[i][1].slice(0,1),
      birthYear: userDataArray[i][2],
      departments: userDataArray[i][3].split('|'),
    });
  }

  for (let i = 0; i < userObject.length; i++) {
    if (userObject[i].id === '') {
      userObject[i].id = 'Unknown';
    } if (userObject[i].fullName === '') {
      userObject[i].fullName = 'Unknown';
    } if (userObject[i].initials === '') {
      userObject[i].initials = 'Unknown';
    } if (userObject[i].birthYear === '') {
      userObject[i].birthYear = 'Unknown';
    } if (userObject[i].departments === '') {
      userObject[i].departments = 'Unknown';
    }
  }
  
  return userObject;
};

console.log(makeUserObject(userDataDump));