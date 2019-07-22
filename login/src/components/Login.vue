<template>
    <div class="login">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <h3>
          <i class="el-icon-sunny"></i>VUEX练习
        </h3>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          password: '',
          username: '',
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入用户密码', trigger: 'blur' },
            { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios.post("/api/login",{
              username:this.ruleForm.username,
              password:this.ruleForm.password
            }).then((res)=>{
                if(res.data.errno){
                  this.$message.error('该用户不存在，请注册');
                }else{
                  this.$message({
                    message: '恭喜你，登录成功',
                    type: 'success'
                  });
                  this.$router.push('/admin')
                  //this.$store.loginusername=this.ruleForm.username
                  //修改store仓库中的state数据。必须经过 mutations 中定义的方法
                  this.$store.commit('saveLoginusername',this.ruleForm.username)
                }
            })
            //alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios.post("/api/register",{
              username:this.ruleForm.username,
              password:this.ruleForm.password
            }).then((res)=>{
              if(res.data.errno){
                this.$message.error('该用户已存在，请重新注册');
              }else{
                this.$message({
                  message: '恭喜你，注册成功',
                  type: 'success'
                });
              }
            })
          }
        })
      }
    }
  }
</script>

<style scoped>
  .login{
    position:fixed;
    padding:20px;
    left:50%;
    top:50%;
    margin-top:-150px;
    margin-left:-200px;
    width:400px;
    height:300px;
    border:2px solid #ccc;
  }
  h3{
    font-size:28px;
    text-align: center;
    line-height:70px;
  }
</style>
