<template>
  <div class="chatpdf">
    <div class="pannel">
      <el-icon class="intro" :size="104" color="#FFFFFF"><Cpu /></el-icon>
      <span style="text-align: left;color: #FFFFFF;font-size: 34px">
        ChatGPT
      </span>
      <br>
      <span style="margin-left: 125px;text-align: left;color: #FFFFFF;font-size: 34px">
        With Voice
      </span>
      <div class="fileList">
        <div class="fileTitle">
          <h4 style="margin-top: 12px;text-align: left;margin-left: 23px;font-size: 22px">
            Chat
          </h4>
          <p style="margin-left: 23px;text-align: left;margin-top: 15px">
            Voice model1
            <span style="margin-left: 100px;">
              2023/5/6
            </span>
          </p>
        </div>
      </div>
      <el-button class="set">
        <el-icon class="el-icon" @click="Login">
          <Setting style="width: 50px;height: 50px;color: #9E9E9E" />
        </el-icon>
      </el-button>
      <el-button class="add1">
        <p>
          创建新聊天
        </p>
      </el-button>
    </div>
    <div class="chatpdfBox">
      <div class="chatpdfLine">

        <el-dropdown style="position: absolute;width: 151px;height: 49px;left: 25px;top: 15px;" trigger="click">
          <el-button type="success" @click="Model" :disabled="confirm_disabled" class="Model">
            Model
            <el-icon class="el-icon--right">
              <arrow-down style="width: 50px; height: 24px;color: #FFFFFF" />
            </el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu class="dropdown">
              <el-dropdown-item class="dropdown1">Chat3.5</el-dropdown-item>
              <el-dropdown-item class="dropdown1" disabled>Chat4.0</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-button style="left: 190px;position: absolute;width: 128px;height: 49px;top: 15px;" type="success" @click="dialogVisible = true" :disabled="confirm_disabled" class="Model">
          Voice
        </el-button>
        <el-dialog v-model="dialogVisible" width="804px" class="custom-dialog"
                   :before-close="handleClose">
          <template #header="{titleId, titleClass}">
            <div class="voice-header">
              <h4 :id="titleId" :class="titleClass" style="margin-top: 30px;margin-left: 64px;font-size: 35px;">
                Voice Model
                <Plus style="width: 1em; height: 1em; margin-left: 5px" @click="dialogVisible2 = true"/>
              </h4>
            </div>
          </template>
          <div>
            <span style="margin-left: 82px;text-align: left;color: #FFFFFF;font-size: 22px">Model Name</span>
            <span style="margin-left: 43px;color: #FFFFFF;font-size: 22px">Upload Time</span>
            <el-checkbox class="custom-checkbox" style="margin-left: 215px">

            </el-checkbox>
          </div>
          <div>
            <span style="margin-left: 82px;text-align: left;color: #FFFFFF;font-size: 22px">Model Name</span>
            <span style="margin-left:43px;color: #FFFFFF;font-size: 22px">Upload Time</span>
            <el-checkbox class="custom-checkbox" style="margin-left: 215px">

            </el-checkbox></div>

          <template #footer>
      <span class="dialog-footer">

      </span>
          </template>
        </el-dialog>

        <el-dialog v-model="dialogVisible2" width="804px" class="custom-dialog"
                   :before-close="handleClose">
          <template #header="{titleId, titleClass}">
            <div class="voice-header">
              <h4 :id="titleId" :class="titleClass" style="margin-top: 30px;margin-left: 64px;font-size: 35px;">
                New voice

              </h4>
            </div>
          </template>
          <div style="margin-top: 50px">
          <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList">
            <input class="input" type="text" v-model="newMessage1" placeholder="选择你要上传的文件" />
            <el-button size="large" type="primary" class="sure1" >选择文件</el-button>

          </el-upload>
          </div>
          <div>
            <el-button size="large" type="primary" class="sure2" @click="upload1" >上 传</el-button>
          </div>

          <template #footer>
      <span class="dialog-footer">

      </span>
          </template>
        </el-dialog>


        <el-button style="left: 333px;position: absolute;width: 128px;height: 49px;top: 15px;" type="success" @click="dialogVisible1 = true" :disabled="confirm_disabled" class="Model">
          Prompt
        </el-button>
        <el-dialog v-model="dialogVisible1" width="804px" class="custom-dialog"
                   :before-close="handleClose">

          <template #header="{titleId, titleClass}">
            <div class="prompt-header">
              <h4 :id="titleId" :class="titleClass" style="margin-top: 30px;margin-left: 64px;font-size: 35px;">
                Your Prompt

                <Plus style="width: 1em; height: 1em; margin-left: 5px" @click="dialogVisible3 = true"/>

              </h4>

            </div>
          </template>
          <div><span style="margin-left: 82px;text-align: left;color: #FFFFFF;font-size: 22px">Prompt name </span>
            <span style="margin-left: 36px;color: #FFFFFF;font-size: 22px">Upload Time</span>
            <span style="color: #FFFFFF;font-size: 22px">description</span>
            <el-checkbox class="custom-checkbox" style="margin-left: 76px">

            </el-checkbox></div>
          <div><span style="margin-left: 82px;text-align: left;color: #FFFFFF;font-size: 22px">Prompt name </span>
            <span style="margin-left: 36px;color: #FFFFFF;font-size: 22px">Upload Time</span>
            <span style="color: #FFFFFF;font-size: 22px">description</span>
            <el-checkbox class="custom-checkbox" style="margin-left: 76px">

            </el-checkbox></div>

          <template #footer>
      <span class="dialog-footer">

      </span>
          </template>
        </el-dialog>
        <el-dialog v-model="dialogVisible3" width="804px" class="custom-dialog"
                   :before-close="handleClose">
          <template #header="{titleId, titleClass}">
            <div class="voice-header">
              <h4 :id="titleId" :class="titleClass" style="margin-top: 30px;margin-left: 64px;font-size: 35px;">
                New prompt

              </h4>
            </div>
          </template>
          <div style="margin-top: 30px">
            <p style="font-size: 20px">description (option):</p>
              <input style="font-size: 20px" class="input1" type="text" v-model="newMessage2"  />
          </div>
          <div style="margin-top: 20px">
            <p style="font-size: 20px">prompt content:</p>
            <input style="font-size: 20px;height: 107px;" class="input1" type="text" v-model="newMessage3"  />
          </div>
          <div>
            <el-button size="large" type="primary" class="sure2" @click="upload">上 传</el-button>
          </div>

          <template #footer>
      <span class="dialog-footer">

      </span>
          </template>
        </el-dialog>

        <!--for message-->
        <!--<span v-if="user.no!='null' " style="color: aliceblue;margin-left: 800px;font-size: 10px">{{user.no}}<UserFilled style="width: 2em; height: 2em; margin-left: 5px" /></span>-->
        <div class="chat-window">
          <div class="message-line" v-for="(message, index) in messages" :key="index">
            <div v-if="message.sender === 'user'" class="user-message">
              {{ message.content }}
              <svg style="margin-right:100px " class="avatar" v-html="message.avatar"></svg>
              <el-button @click="speak(message.content)" style="background-color: #333333;width: 50px;height: 50px;margin-top: -18px;margin-right: 300px;" >
                <el-icon color="#FFFFFF" size="30"><Microphone /></el-icon>
              </el-button>
            </div>
            <div v-else-if="message.sender === 'assistant'" class="assistant-message">
              <svg class="avatar1">
                <circle cx="30.5" cy="30.5" r="30.5" fill="#9EA200"/>
              </svg>
              {{ message.content }}
              <br>
              <el-button @click="speak(message.content)" style="background-color: #333333;width: 50px;height: 50px;margin-top: -18px;margin-left: 295px" >
                <el-icon color="#FFFFFF" size="30"><Microphone /></el-icon>
              </el-button>
            </div>
          </div>
        </div>

      </div>
      <div class="chatpdfArea">
        <input class="chat-input" type="text" v-model="newMessage" placeholder="Type your message..." />
        <button @click="sendMessage">
          <svg t="1682141916531" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1271" width="16" height="16"><path d="M0 1024l106.496-474.112 588.8-36.864-588.8-39.936L0 0l1024 512z" fill="#ffffff" p-id="1272"></path></svg>
        </button>
        <button style="top: 10px" @click="toggleListening">Start/Stop Listening</button>
      </div>


    </div>

  </div>

</template>

<script>

import { ElMessage, ElMessageBox } from 'element-plus'
export default {
  name: "chat",
  data() {
    return {

      input: '',
      dialogVisible: false,
      dialogVisible1:false,
      dialogVisible2:false,
      dialogVisible3:false,
      fileList:[],
      newMessage1:'',
      newMessage2:'',
      newMessage3:'',
      user:JSON.parse(sessionStorage.getItem('CurUser')),
      newMessage: '',
      recognition: null,
      speechSynthesis: window.speechSynthesis,
      listening: false,
      messages: [
        {
          sender: 'assistant',
          content: 'Hello! How can I assist you today?'
        }
      ]
    }
  },
  methods:{
    toggleListening() {
      if (this.listening) {
        this.recognition.stop();
        this.listening = false;
      } else {
        this.startListening();
      }
    },
    startListening() {
      if (!('webkitSpeechRecognition' in window)) {
        alert('Web Speech API is not supported in this browser. Try Chrome.');
        return;
      }

      this.recognition = new webkitSpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;

      this.recognition.onresult = (event) => {
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          }
        }
        this.newMessage = finalTranscript;
        if(finalTranscript !== '') {
          this.sendMessage();
        }
      };

      this.recognition.start();
      this.listening = true;
    },
    speak(message) {
      let utterance = new SpeechSynthesisUtterance(message);
      this.speechSynthesis.speak(utterance);
    },
    handleClose(done) {
      this.$confirm('want to close？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    },
    upload1(){
      this.$confirm('want to upload？')
          .then(_ => {
            //done();
            this.$message({
              type: "success",
              message: "upload sucessfully"
            })
            this.dialogVisible=false
            this.dialogVisible2=false
          })
          .catch(_ => {});
    },
    upload(){
      this.$confirm('want to upload？')
          .then(_ => {
            //done();
            this.$message({
              type: "success",
              message: "upload sucessfully"
            })
            this.dialogVisible1=false
            this.dialogVisible3=false
          })
          .catch(_ => {});
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    },
    Login(){
      this.$router.replace('/Login');
    },
    sendMessage() {
      this.messages.push({
        sender: 'user',
        content: this.newMessage,
        avatar: "<svg width=\"61\" height=\"61\" viewBox=\"0 0 61 61\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "<circle cx=\"30.5\" cy=\"30.5\" r=\"30.5\" fill=\"#400BB1\"/>\n" +
            "</svg>\n",
        avatar1: "<svg width=\"61\" height=\"61\" viewBox=\"0 0 61 61\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "<circle cx=\"30.5\" cy=\"30.5\" r=\"30.5\" fill=\"#9EA200\"/>\n" +
            "</svg>\n"

      });
      this.newMessage = '';
// Here you would typically make a request to your AI model and push its response to the messages array.
    },
  }
}
</script>


<style scoped>
.intro {
  width: 104px;
  height: 104px;
  left: -20px;
  top: 52px;
}
.sure1{
  background-color: #1D6447;
  border-color: #1D6447;
  margin-left: 20px;

}
.sure2{
  background-color: #1D6447;
  border-color: #1D6447;
  margin-left: 472px;
  margin-top: 50px;
  height: 40px;
  width: 93px;
  left: 445px;
  top: 135px;


}
.sure2:hover{
  background-color: #144632;
}
.sure1:hover{
  background-color: #144632;
}
.chat-window {
  flex: 1;
  overflow-y: auto;
  margin-top: 80px;
}
/* Ellipse 1 */



.avatar {
  right: -20px;
  margin-top: -10px;
  position: absolute;
  width: 61px;
  height: 61px;
}
.avatar1 {
  position: absolute;
  margin-top: -8px;
  width: 61px;
  height: 61px;
  margin-left: -90px;
}
.chat-window {
  flex: 1;
  overflow-y: auto;
  margin-top: 123px;
  margin-left: 39px;
  height: 680px;
}
.user-message {
  text-align: right;
  background-color: #333333;
  padding: 0.5em;
  margin-bottom: 0.5em;
  border-radius: 5px;
  color: #FFFFFF;
  width: 344.5px;
  height: 49px;
  right: 213.5px;
  top: 292px;
  margin-left: 800px;
}

.assistant-message {
  text-align: left;
  background-color: #333333;
  padding: 0.5em;
  margin-bottom: 0.5em;
  border-radius: 5px;
  width: 344.5px;
  height: 49px;
  color: #FFFFFF;
  margin-left: 116px;
}
.dropdown{
  background-color: #333333;
}
.input{
  flex: 1;
  border-color: #333333;
  resize: none;
  outline: none;
  padding: 0 5px;
  line-height: 50px;
  color: #ffffff;
  border-radius: 10px 10px 10px 10px;
  transition: all 0.3s,height 0s;
  background-color: #333333;
  height: 33px;
  width: 338px;
  margin-left: 100px;

  border-radius: 7.5833330154418945px;

  left: 501px;
  top: 762px;
  font-size: 24px;
}
.input1{
  flex: 1;
  border-color: #333333;
  margin-top: 15px;
  resize: none;
  outline: none;
  padding: 0 5px;
  line-height: 50px;
  color: #ffffff;
  border-radius: 10px 10px 10px 10px;
  transition: all 0.3s,height 0s;
  background-color: #333333;
  height: 51px;
  width: 479px;


  border-radius: 7.5833330154418945px;

  left: 501px;
  top: 762px;
  font-size: 24px;
}
.chat-input {
  flex: 1;
  border: none;
  resize: none;
  outline: none;
  padding: 0 5px;
  line-height: 50px;
  color: #ffffff;
  border-radius: 10px 10px 10px 10px;
  transition: all 0.3s,height 0s;
  background-color: #333333;
  width: 1209px;
  height: 108px;
  left: 501px;
  top: 762px;
  font-size: 24px;
}

:global(.el-dropdown-menu__item) {
  line-height: 36px;
  padding: 6px 22px;
  color: #ffffff;

}
.el-input{
  background-color: #333333;
}
:global(.el-dropdown-menu__item:not(.is-disabled):hover) {
  line-height: 36px;
  padding: 6px 22px;
  background-color: #333333;
  color: rgba(255, 255, 255, 0.25);

}

.chatpdf{
  display: flex;
  height: 100vh;
  flex-direction: row;
  background: #000000;

}
.chatpdf .pannel{
  /* Rectangle 1 */
  position: absolute;
  width: 406px;
  height: 1010px;
  left: 29px;
  top: 29px;

  background: #151515;
  border-radius: 10px;
}
.chatpdfBox{
  /* Desktop - 1 */
  position: relative;
  width: 100%;
  height: 100%;
}
.chatpdfLine{
  /* Rectangle 2 */


  position: absolute;
  width: 1357px;
  height: 1010px;
  left: 476px;
  top: 29px;

  background: #151515;
  border-radius: 10px;

}
.chatpdfRow{
  margin: 20px 10px;
  display: flex;
}
.chatpdfAsk{
  justify-content: flex-end;
}
.chatpdfContent{
  display: inline-block;
  border-radius: 8px;
  padding: 6px 12px;
  max-width: 500px;
  background: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  box-shadow:  0px 0.3px 0.9px rgba(0, 0, 0, 0.12), 0px 1.6px 3.6px rgba(0, 0, 0, 0.16);
}
.chat-messages {
  overflow-y: auto;
}

.chat-message {
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.chatpdfAsk .chatpdfContent{
  background: linear-gradient(90deg, #2870EA 10.79%, #1B4AEF 87.08%);;
  color: #fff;
}
.chatpdfArea{
  flex: 1;
  border-color: #333333;
  resize: none;
  outline: none;
  padding: 0 5px;
  line-height: 50px;
  color: #ffffff;
  border-radius: 10px 10px 10px 10px;
  transition: all 0.3s,height 0s;
  background-color: #333333;
  font-size: 24px;

  position: absolute;
  width: 1209px;
  height: 108px;
  left: 501px;
  top: 897px;
}
.chatpdfArea textarea{
  flex: 1;
  border-color: #333333;
  resize: none;
  outline: none;
  padding: 0 5px;
  line-height: 50px;
  color: #ffffff;
  border-radius: 10px 10px 10px 10px;
  transition: all 0.3s,height 0s;
  background-color: #333333;
  width: 1209px;
  height: 108px;
  left: 501px;
  top: 762px;
  font-size: 24px;
}
.chatpdfArea textarea:hover{
  border-color: #333333;
}
.chatpdfArea button{
  width: 91px;
  height: 37px;
  color: #fff;
  box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);
  border: none;
  padding: 0 20px;
  cursor: pointer;

  /* Rectangle 13 */


  position: absolute;
  left: 91.65%;
  right: 0.83%;
  top: 56.48%;
  bottom: 9.11%;

  background: #4A4A4A;
  border-radius: 7.58333px;
}
.chatpdfArea button:hover{
  background-color: #999a9b;
}
.chatpdf .fileTitle{
  color: #fff;
  position: absolute;
  width: 324px;
  height: 92px;
  left: 41px;
  top: 221px;

  background: #333333;
  border-radius: 10px;

}
@media (max-width: 768px) {
  .pannel{
    display: none;
  }
}
.add1 {
  left: 112px;
  bottom: 34px;
  background: #333333;
  border-radius: 10px;
  width: 254px;
  height: 49px;
  position: absolute;
}
.set {
  position: absolute;
  width: 49px;
  height: 49px;
  left: 31px;
  bottom: 34px;

  background: #333333;
  border-radius: 10px;
}
.Model {
  left: 0;
  right: 10%;
  background: #333333;
  position: absolute;
  border-radius: 10px;
  border-color: #333333;
  color: #FFFFFF;
  width: 151px;
  height: 50px;
  font-size: 24px;

}
.Model:hover,.Model:active,.Model:visited,.Model:link{
  -webkit-tap-highlight-color:rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;
  color: #f1f1f3;
  outline:none;
  background: none;
  text-decoration: none;
}
.el-dialog__headerbtn {
  /* 自定义关闭按钮的样式 */
  color: #ff0000;}
</style>

<style>
.el-dialog{
  position: relative;
  width: 804px;
  height: 548px;

  background: #151515;
  border-radius: 10px;
}
.el-dialog__title{
  color: #FFFFFF;
  text-align: left;
  font-size: 20px;
}
.el-dialog__header{
  text-align: left;
}
.el-dialog__body{
  text-align: left;
}
.el-checkbox__input{
  margin-left: 80px;

}
.el-checkbox__input.el-checkbox__original{
  background-color: #333333;

}
.custom-checkbox .el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #333333; /* 自定义选中时的背景色 */
  border-color: #1E1E1E; /* 自定义选中时的边框颜色 */
  color: #1D6447;
}
.user-message {
  align-self: flex-end;
  background-color: #f0f0f0;
  padding: 0.5em;
  margin-bottom: 0.5em;
  border-radius: 5px;
}

.assistant-message {
  align-self: flex-start;
  background-color: #e0e0e0;
  padding: 0.5em;
  margin-bottom: 0.5em;
  border-radius: 5px;
}

</style>