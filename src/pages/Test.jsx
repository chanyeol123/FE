// import React, { useEffect } from "react";
// import styled from "styled-components";

// const Test = () => {
//   useEffect(() => {
//     console.clear();

//     const loginBtn = document.getElementById("login");
//     const signupBtn = document.getElementById("signup");

//     loginBtn.addEventListener("click", (e) => {
//       let parent = e.target.parentNode.parentNode;
//       Array.from(e.target.parentNode.parentNode.classList).find((element) => {
//         if (element !== "slide-up") {
//           parent.classList.add("slide-up");
//         } else {
//           signupBtn.parentNode.classList.add("slide-up");
//           parent.classList.remove("slide-up");
//         }
//       });
//     });

//     signupBtn.addEventListener("click", (e) => {
//       let parent = e.target.parentNode;
//       Array.from(e.target.parentNode.classList).find((element) => {
//         if (element !== "slide-up") {
//           parent.classList.add("slide-up");
//         } else {
//           loginBtn.parentNode.parentNode.classList.add("slide-up");
//           parent.classList.remove("slide-up");
//         }
//       });
//     });
//   }, []);
//   return (
//     <FormStyle>
//       <div className="form-structor">
//         <div className="signup">
//           <h2 className="form-title" id="signup">
//             <span>or</span>회원가입
//           </h2>
//           <div className="form-holder">
//             <input type="text" className="input" placeholder="닉네임" />
//             <input type="text" className="input" placeholder="아이디" />
//             <input type="password" className="input" placeholder="비밀번호" />
//           </div>
//           <button className="submit-btn">회원가입</button>
//         </div>
//         <div className="login slide-up">
//           <div className="center">
//             <h2 className="form-title" id="login">
//               <span>or</span>로그인
//             </h2>
//             <div className="form-holder">
//               <input type="text" className="input" placeholder="아이디" />
//               <input type="password" className="input" placeholder="비밀번호" />
//             </div>
//             <button className="submit-btn">로그인</button>
//           </div>
//         </div>
//       </div>
//     </FormStyle>
//   );
// };

// export default Test;

// const FormStyle = styled.div`
//   @import url("https://fonts.googleapis.com/css?family=Fira+Sans");

//   position: relative;
//   min-height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-family: "Fira Sans", Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;

//   .form-structor {
//     background-color: #222;
//     border-radius: 15px;
//     height: 550px;
//     width: 350px;
//     position: relative;
//     overflow: hidden;

//     &::after {
//       content: "";
//       opacity: 0.8;
//       position: absolute;
//       top: 0;
//       right: 0;
//       bottom: 0;
//       left: 0;
//       background-color: #c0c0c0;
//     }

//     .signup {
//       position: absolute;
//       top: 50%;
//       left: 50%;
//       -webkit-transform: translate(-50%, -50%);
//       width: 65%;
//       z-index: 5;
//       -webkit-transition: all 0.3s ease;

//       &.slide-up {
//         top: 5%;
//         -webkit-transform: translate(-50%, 0%);
//         -webkit-transition: all 0.3s ease;
//       }

//       &.slide-up .form-holder,
//       &.slide-up .submit-btn {
//         opacity: 0;
//         visibility: hidden;
//       }

//       &.slide-up .form-title {
//         font-size: 1em;
//         cursor: pointer;
//       }

//       &.slide-up .form-title span {
//         margin-right: 5px;
//         opacity: 1;
//         visibility: visible;
//         -webkit-transition: all 0.3s ease;
//       }

//       .form-title {
//         color: #fff;
//         font-size: 1.7em;
//         text-align: center;

//         span {
//           color: rgba(0, 0, 0, 0.4);
//           opacity: 0;
//           visibility: hidden;
//           -webkit-transition: all 0.3s ease;
//         }
//       }

//       .form-holder {
//         border-radius: 15px;
//         background-color: #fff;
//         overflow: hidden;
//         margin-top: 50px;
//         opacity: 1;
//         visibility: visible;
//         -webkit-transition: all 0.3s ease;

//         .input {
//           border: 0;
//           outline: none;
//           box-shadow: none;
//           display: block;
//           height: 30px;
//           line-height: 30px;
//           padding: 8px 15px;
//           border-bottom: 1px solid #eee;
//           width: 100%;
//           font-size: 12px;

//           &:last-child {
//             border-bottom: 0;
//           }
//           &::-webkit-input-placeholder {
//             color: rgba(0, 0, 0, 0.4);
//           }
//         }
//       }

//       .submit-btn {
//         background-color: rgba(0, 0, 0, 0.4);
//         color: rgba(256, 256, 256, 0.7);
//         border: 0;
//         border-radius: 15px;
//         display: block;
//         margin: 15px auto;
//         padding: 15px 45px;
//         width: 100%;
//         font-size: 13px;
//         font-weight: bold;
//         cursor: pointer;
//         opacity: 1;
//         visibility: visible;
//         -webkit-transition: all 0.3s ease;

//         &:hover {
//           transition: all 0.3s ease;
//           background-color: rgba(0, 0, 0, 0.8);
//         }
//       }
//     }

//     .login {
//       position: absolute;
//       top: 20%;
//       left: 0;
//       right: 0;
//       bottom: 0;
//       background-color: black;
//       z-index: 5;
//       -webkit-transition: all 0.3s ease;

//       &::before {
//         content: "";
//         position: absolute;
//         left: 50%;
//         top: -20px;
//         -webkit-transform: translate(-50%, 0);
//         background-color: black;
//         width: 200%;
//         height: 250px;
//         border-radius: 50%;
//         z-index: 4;
//         -webkit-transition: all 0.3s ease;
//       }

//       .center {
//         position: absolute;
//         top: calc(50% - 10%);
//         left: 50%;
//         -webkit-transform: translate(-50%, -50%);
//         width: 65%;
//         z-index: 5;
//         -webkit-transition: all 0.3s ease;

//         .form-title {
//           color: #fff;
//           font-size: 1.7em;
//           text-align: center;

//           span {
//             color: rgba(0, 0, 0, 0.4);
//             opacity: 0;
//             visibility: hidden;
//             -webkit-transition: all 0.3s ease;
//           }
//         }

//         .form-holder {
//           border-radius: 15px;
//           background-color: #fff;
//           border: 1px solid #eee;
//           overflow: hidden;
//           margin-top: 50px;
//           opacity: 1;
//           visibility: visible;
//           -webkit-transition: all 0.3s ease;

//           .input {
//             border: 0;
//             outline: none;
//             box-shadow: none;
//             display: block;
//             height: 30px;
//             line-height: 30px;
//             padding: 8px 15px;
//             border-bottom: 1px solid #eee;
//             width: 100%;
//             font-size: 12px;

//             &:last-child {
//               border-bottom: 0;
//             }
//             &::-webkit-input-placeholder {
//               color: rgba(0, 0, 0, 0.4);
//             }
//           }
//         }

//         .submit-btn {
//           background-color: #949494;
//           color: rgba(256, 256, 256, 0.7);
//           border: 0;
//           border-radius: 15px;
//           display: block;
//           margin: 15px auto;
//           padding: 15px 45px;
//           width: 100%;
//           font-size: 13px;
//           font-weight: bold;
//           cursor: pointer;
//           opacity: 1;
//           visibility: visible;
//           -webkit-transition: all 0.3s ease;

//           &:hover {
//             transition: all 0.3s ease;
//             background-color: rgba(0, 0, 0, 0.8);
//           }
//         }
//       }

//       &.slide-up {
//         top: 90%;
//         -webkit-transition: all 0.3s ease;
//       }

//       &.slide-up .center {
//         top: 10%;
//         -webkit-transform: translate(-50%, 0%);
//         -webkit-transition: all 0.3s ease;
//       }

//       &.slide-up .form-holder,
//       &.slide-up .submit-btn {
//         opacity: 0;
//         visibility: hidden;
//         -webkit-transition: all 0.3s ease;
//       }

//       &.slide-up .form-title {
//         font-size: 1em;
//         margin: 0;
//         padding: 0;
//         cursor: pointer;
//         -webkit-transition: all 0.3s ease;
//       }

//       &.slide-up .form-title span {
//         margin-right: 5px;
//         opacity: 1;
//         visibility: visible;
//         -webkit-transition: all 0.3s ease;
//       }
//     }
//   }
// `;
