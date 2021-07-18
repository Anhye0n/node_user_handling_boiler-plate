# Node Regitser, Login boiler-plate

Description:	Ubuntu 20.04.2 LTS<br>
Release:	20.04<br>
Codename:	focal<br>

last-update 2021-07-11

# 만든 목적
express와 passport를 이용해 기본적인 회원가입, 로그인 구현 후 다른 프로젝트 진행 시에 사용하기 위함.

# DB info
- Using Mysql
- DB name : db_test
  - table
    - sessions : mysql에 session 정보를 저장
    - user_info : 회원 정보
## user_info 구조

|NAME|DATA TYPE|LENGTH|ETC|
|:---:|:---:|:---:|:---:|
|num|INT|11|AUTO_INCREMENT|
|name|VARCHAR|100|유저 이름|
|email|VARCHAR|100|유저 이메일|
|id|VARCHAR|100|유저 아이디|
|password|VARCHAR|100|유저 비밀번호|
|user_salt|LONGTEXT||유저 비밀번호 salt키|

```javascript
//user_salt는 crypto 모듈 사용
const crypto = require('crypto')
```
# 사용 기술
1. mysql
2. passport
3. crypto
4. ejs
5. connect-flash
