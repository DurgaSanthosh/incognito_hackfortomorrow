// import React from 'react'
// import { useState ,useContext } from 'react';
// import { useNavigate } from 'react-router';
// import { firebseContext } from '../../store/firebasecontext';
// import { useAuth } from '../../store/firebasecontext';
// function Signup() {

//     const navigate = useNavigate();
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [cpassword, setCpassword] = useState("");
//     const {Firebase} = useContext(firebseContext);
//     const {signup} = useAuth()
//     const [error,setError] = useState('')
//     const [loading,setLoading] = useState(false)
    
//     async function handleSubmit(e){
//         e.preventDefault();
        

//         if(cpassword.value !== password.value){
//           return setError('Passwords do not match')
//           setLoading(true)
//         }
//         try{

//          await signup(email,password).then(()=>{

//            navigate('/login')
//          })
//          setLoading(false)
//         }catch{
//           setError('failed to create account')
          
//         }



//         // Firebase.auth()
//         //   .createUserWithEmailAndPassword(email, password)
//         //   .then((result) => {
//         //     result.user.updateProfile({ displayName: username }).then(() => {
//         //       Firebase.firestore()
//         //         .collection("users")
//         //         .add({
//         //           id: result.user.uid,
//         //           username: username,
                  
//         //         })
//         //         .then(() => {
//         //          navigate("/login"); // redirects to login
//         //         });
//         //     });
//         //   });
//     }
    
//     return (
//         <div className="signup">
//         <div className="signup__box">

       
//             <form action="">



//             <label htmlFor="fname">Username</label>
//           <br />
//           <input
//             className="input"
//             type="text"
//             id="fname"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             name="name"
//             defaultValue=""
//           />




// <label htmlFor="fname">Email</label>
//           <br />
//           <input
//             className="input"
//             type="email"
//             id="fname"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             name="email"
//             defaultValue="John"
//           />



// <label htmlFor="lname">Password</label>
//           <br />
//           <input
//             className="input"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             id="lname"
//             name="password"
//             defaultValue="Doe"
//           />



// <label htmlFor="lname">Confirm Password</label>
//           <br />
//           <input
//             className="input"
//             type="password"
//             value={cpassword}
//             onChange={(e) => setCpassword(e.target.value)}
//             id="lname"
//             name="cpassword"
//             defaultValue="Doe"
//           />


// <button type="submit" disabled={loading} onSubmit={handleSubmit}>Signup</button>
//             </form>
//         </div>
           
//         {error && <h2>{error}</h2>}

//         </div>
//     )
// }

// export default Signup;

import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { firebseContext } from "../../store/firebasecontext";


export default function Signup() {
  let nav = useNavigate();
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { Firebase } = useContext(firebseContext);
  const [error,setError] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Firebase);
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({ displayName: username }).then(() => {
          Firebase.firestore()
            .collection("users")
            .add({
              id: result.user.uid,
              username: username,
              phone: phone,
            })
            .then(() => {
              nav('/'); // redirects to login
            }).catch((error)=>{
              alert(error.message)
            })
        });
      });
  };
  return (
    <div>
      <div className="signup">
        
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          
          <input
            className="input"
            type="text"
            id="fname"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="name"
            defaultValue=""
          />
          
          <label htmlFor="fname">Email</label>
         
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            defaultValue=""
          />
          
          <label htmlFor="lname">Phone</label>
          
          <input
            className="input"
            type="number"
            id="lname"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
            defaultValue=""
          />
          
          <label htmlFor="lname">Password</label>
          
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue=""
          />
         
          
          <button onClick={handleSubmit}>Signup</button>
        </form>
        <Link to="/login"> <button >Login</button>  </Link>
        
      </div>
    </div>
  );
}






