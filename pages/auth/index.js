// import React from 'react'
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';

// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// export default function Authentication_Page() {
//   return (
//     <>
//     <div className="mt-24"></div>
//     <div className="text-center">
//     <Tabs
//       defaultActiveKey="login"
//       id="uncontrolled-tab-example"
//       className="mb-3  justify-center"
//     >
//       <Tab eventKey="login" title="Login">
//         <div className='bg-[#96ed82] mb-4'>
//         <h1 className='font-marker mb-4'>Login Page</h1>

//         <div className='sm:w-40 sm:ml-10 md:w-2/5 md:ml-80 border-emerald-700 border-2 p-2 bg-red-400'>
//         <Form action='api/register' method='post' className="mb-3 ">
//             <Form.Group className="mb-3" controlId="formBasicEmail" >
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control type="email" placeholder="Enter email" name="email" className='w-40'/>
//                 <Form.Text className="text-muted">
//                 We'll never share your email with anyone else.
//                 </Form.Text>
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control type="password"  name="password" placeholder="Password" />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicusername">
//                 <Form.Label>UserName</Form.Label>
//                 <Form.Control type="text"  name='username' placeholder="UserName" />
//             </Form.Group>
            
//             <Form.Group className="mb-3" controlId="formBasicnumber">
//                 <Form.Label>MobileNo</Form.Label>
//                 <Form.Control type="number" placeholder="Mobile No" name='mobileno' minLength={0} maxLength={9} />
//             </Form.Group>
            
//             <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                 <Form.Check type="checkbox" label="Privacy and Policy" />
//             </Form.Group>
//             <Button variant="primary" type="submit">
//                 Signup
//             </Button>
//     </Form>
//         </div>
//         </div>
//       </Tab>
//       <Tab eventKey="signup" title="Signup">
//         <h1 className='font-marker mb-4'>Signup Page</h1>
//         <div className='sm:w-40 sm:ml-10 md:w-2/5 md:ml-80 border-emerald-700 border-2 p-2'>
//         <Form action="api/login" method="post">
//             <Form.Group className="mb-3" controlId="formGroupEmail">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control type="email" name='email' placeholder="Enter email" />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formGroupPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control type="password" name='password' placeholder="Password" />
//             </Form.Group>
//             <Button variant="primary" type="submit">
//                 LogIn
//             </Button>
//         </Form>
//         </div>
//       </Tab>

//     </Tabs>
//     </div>
//     </>
//   )
// }

import { Button } from 'react-bootstrap'
import React from 'react'
import useAuth from "../../src/hooks/auth"

export default function Authentication_Page() {
    const {user,loginWithGoogle1,error} = useAuth();
  return (
    <>
    <div className="mt-24"></div>
    <div>Authentication_Page</div>
    <h1>{error}</h1>
    <div>
        <Button variant="primary" onClick={loginWithGoogle1} className="ml-5 mt-5">abc</Button>
    </div>
    <h3>Successfully retrived the username:{user}</h3>
    </>
  )
}

