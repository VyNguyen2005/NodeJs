// os - provide info about system
// and env your work at Node js

// provide (method) to interact with platform
const os = require(`os`);

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
// thoi gian hoat dong cua he thong 
console.log(`the system uptime is ${os.uptime()} seconds`);
// he dieu hanh 
console.log(`operating system is ${os.platform()}`); 
// kien truc CPU
console.log(`arch CPU is ${os.arch()}`);

const currewntOS = {
  name: os.type(),
  release: os.release(),
  totalMen: os.totalmem(), // tong dung luong bo nho
  freeMen: os.freemem(), // dung luong trong
}

console.log(currewntOS);