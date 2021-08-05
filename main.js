const { app, BrowserWindow } = require('electron');

let dbconn1_call_cnt = 0;

function createWindow () {  // 브라우저 창을 생성
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true  //require같은 기능 사용 가능하도록
    }
  });

  //브라우저창이 읽어 올 파일 위치
  win.loadFile('./html/index.html')
}

app.on('ready', createWindow);

const dbConn = require('./conn.js');  //데이터베이스 접속과 관련된 라이브러리 위치.
const function1_script = require('./group_function/test_function1.js');
const { ipcMain } = require('electron')  //이벤트 송/수신 관련 라이브러리

ipcMain.on('dbconn1', (event, arg) => {  //dbconn요청이 들어오면,
  dbconn1_call_cnt++;

  console.log(`call dbconn1 start[${dbconn1_call_cnt}] : ${arg}`); // html로 받은 파라미터 
  dbConn.connector();
  event.reply('reply', 'db-con-ok');  //결과 완료 후 보낸다.

  dbConn.console();
  function1_script.testFunction1("??aaa");
  function1_script.testFunction2("??bbb");
  function1_script.testFunction3(1,2,3,"??bbb");
 
  console.log(`call dbconn1 end[${dbconn1_call_cnt}].`); // html로 받은 파라미터 

  
});





