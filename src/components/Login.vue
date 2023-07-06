<template>
  <div class="loginBody">
    <div class="loginDiv">
      <div class="login-content">
        <h1 class="login-title">Login</h1>
        <el-form :model="form"  label-width="100px"
                 :rules="rules" ref="loginForm">

          <el-form-item  prop="no">
            <div class="demo-input-no">
              E-mail
              <el-input style="width: 200px;margin-left: 20px" type="text"  v-model="form.no" />
            </div>
          </el-form-item>

          <el-form-item   prop="password">
            <div class="demo-input-pwd">
              password
            <el-input type="password" show-password autocomplete="off" style="width: 200px;"  v-model="form.password" class="input-pwd" />
            </div>
          </el-form-item>
          <el-form-item>
            <el-button style="margin-left: 150px" type="success" @click="confirm" :disabled="confirm_disabled" class="sure">登 录</el-button>
          </el-form-item>
        </el-form>


        <el-dialog v-model="dialogVisible1" width="543px" custom-class="custom-dialog-l">
          <template #header="{titleId, titleClass}">
            <div class="e-mail">
              <h4 :id="titleId" :class="titleClass" style="margin-top: 30px;margin-left: 64px;font-size: 35px;">
                {{form.no}}
              </h4>
            </div>
          </template>
          <div class="use">This model you can use</div>
          <div class="chat4"> <a style="align-content: center">GPT-4.0</a> <a style="margin-left: 50px">GPT-3.5</a></div>

          <div class="mycheck">
            <div class="Intel">Internet</div>
            <input type="checkbox" value="1" id="checkbox1" name="" />
            <label for="checkbox1"></label>
          </div>

          <el-button @click="submit" :disabled="confirm_disabled" class="submit_1">提 交</el-button>

        </el-dialog>

      </div>

    </div>
  </div>
</template>


<script>
import request from "@/utils/request";

export default {
  name: "Login",


  data()
  {

    return {
      confirm_disabled:false,
      dialogVisible1:false,
      checked:'true',
      form: {
        no: '',
        password:'',

      },
      rules:{
        no: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输密码', trigger: 'blur' }
        ],
      }
    }
  },
  methods:{

    submit(){
      request.post('user/Login',this.form)
          .then((res)=>{
            console.log(res)
            if(res.code===200)
            {
              //console.log(res);
              //存储
              sessionStorage.setItem("CurUser",JSON.stringify(res.data))

              console.log(res.data)
              //this.$store.commit("setMenu",res.data.menu)
              //跳转到主页
              this.$router.replace('/');
              this.$message({
                type: "success",
                message: "登录成功"
              })
            }
            else
            {
              this.$message({
                type: "error",
                message: res.msg
              })
            }
          })


    },
    confirm(){

      this.$refs.loginForm.validate((valid) =>
      {
        if (valid) {

          this.dialogVisible1 = true;

        }
        else {
          this.$message({
            type: "error",
            message: "请输入用户名或者密码"
          })
        }
      })
    }
  }

}
</script>

<style scoped>
.custom-dialog-l {
  margin-left: 61px;
  margin-right: 117px;
  height: 365px;
  width: 543px;
}
.loginBody {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color:#000000;
}
.loginDiv {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -200px;
  margin-left: -250px;
  width: 450px;
  height: 330px;
  background: #151515;
  border-radius: 5%;

}
.login-title {
  margin-top: 20px ;
  margin-bottom: 20px;
  margin-left: -185px;
  color: #fdfdfd;
}
.login-content {
  width: 400px;
  height: 250px;
  position: absolute;
  top: 25px;
  left: 25px;
}
.demo-input-no{
  color: #f6f8f7;
  margin-left: -40px;
}
.demo-input-pwd{
  color: #f6f8f7;
  margin-left: -40px;

}
.sure{
  background-color: #1D6447;
  border-color: #1D6447;
}
.input_1{
  width: 217.06px;
  height: 46px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 34.5px;
  line-height: 42px;
  margin-left: -20px;
  color: #FFFFFF;
}
.form_1{
  width: 400px;
  height: 300px;
  //visibility: hidden;

  background: #151515;
  border-radius: 7.53121px;

}
.use{
  position: absolute;
  width: 259px;
  height: 29px;
  margin-left: 61px;
  margin-top: -10px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;

  color: #FFFFFF;
}
.submit_1{
  left: 62.06%;
  right: 21.43%;
  margin-top: -10px;

  background: #333333;
  border-radius: 7.58333px;
}
.submit_1{
  position: absolute;


  background: #750000;
  border-radius: 7.58333px;
  color: #FFFFFF;
}
.submit_1:hover{
  background-color: #6f6f70;
}
.chat4{
  ont-family: 'Noto Sans Arabic';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 51px;
  margin-top: 20px;
  margin-left: 100px;
  color: rgba(255, 255, 255, 0.5);
}
a {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-user-select: none;
  -moz-user-select: none;
  margin-left: 30px;
}

a:hover,a:active,a:visited{
  -webkit-tap-highlight-color:rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;
  color: #f1f1f3;
  outline:none;
  background: none;
  text-decoration: none;
}

.Intel{
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  color: #FFFFFF;
  margin-left: -60px;
  width: 259px;
  height: 30px;
}
.check-box1{
  background: #333333;
  border-radius: 5px;
}

.mycheck {
  width: 25px;
  margin-left: 120px;
  position: relative;
}
.mycheck input[type=checkbox] {
  visibility: hidden;
}
.mycheck label {
  cursor: pointer;
  position: absolute;
  margin-left: 250px;
  width: 15px;
  margin-top: 5px;
  height: 15px;
  top: 0;
  left: 0;
  background: #333333;
  border:1.5px solid rgba(159, 157, 157, 0.8);
  -moz-border-radius: 3px;      /* Gecko browsers */
  -webkit-border-radius: 3px;   /* Webkit browsers */
  border-radius:3px;            /* W3C syntax */
}
.mycheck label:after {
  opacity: 0;
  content: '';
  position: absolute;
  width: 9px;
  height: 5px;
  background: transparent;
  top: 3px;
  left: 3px;
  border: 2px solid #1D6447;
  border-top: none;
  border-right: none;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.mycheck label:hover::after {
  opacity: 0.5;
}
.mycheck input[type=checkbox]:checked + label:after {
  opacity: 1;
}

</style>

<style>
.el-dialog{
  position: relative;
  width: 543px;
  height: 365px;

  background: #151515;
  border-radius: 10px;
}
.custom-dialog-l {
  position: relative;
  width: 543px !important;
  height: 365px !important;

  background: #151515;
  border-radius: 10px;
}
</style>