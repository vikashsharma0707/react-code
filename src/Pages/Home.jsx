
// // // import { useEffect, useState } from "react";
// // // import { useNavigate } from "react-router-dom";

// // // const Home = () => {
// // //   const [user, setUser] = useState("");
// // //   const [email, setEmail] = useState("");
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     const uname = window.localStorage.getItem("user");
// // //     const uemail = window.localStorage.getItem("email");

// // //     if (!uname) {
// // //       navigate("/login");
// // //     }

// // //     setUser(uname);
// // //     setEmail(uemail);
// // //   }, [navigate]);

// // //   return (
// // //     <div style={styles.container}>
// // //       <header style={styles.header}>
// // //         <h1 style={styles.title}>Welcome to Your Dashboard</h1>
// // //         <p style={styles.subtitle}>
// // //           Hi, <strong>{user}</strong>! Your email: <strong>{email}</strong>
// // //         </p>
// // //       </header>

// // //       <div style={styles.content}>
// // //         <p>Explore your account settings, view your profile, or check your notifications below:</p>

// // //         <div style={styles.buttonContainer}>
// // //           <h4>Method 1: Using API</h4>
// // //           <p>Functions for adding, displaying, and searching products.</p>
// // //           <button style={styles.button} >Add Product Form</button>
// // //           <button style={styles.button} >Display Products</button>
// // //           <button style={styles.button} >Search Bar</button>
// // //         </div>

// // //         <div style={styles.buttonContainer}>
// // //           <h4>Method 2: Using Simple JavaScript Functions</h4>
// // //           <p>Functions for adding, displaying, and searching products.</p>
// // //           <button style={styles.button} >ProductAll</button>
// // //         </div>

// // //         <div style={styles.buttonContainer}>
// // //           <h4>Method 3: Using Redux Toolkit</h4>
// // //           <p>Functions for adding, displaying, and searching products.</p>
// // //           <button style={styles.button} >ReduxAdd</button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const styles = {
// // //   container: {
// // //     fontFamily: "'Arial', sans-serif",
// // //     textAlign: "center",
// // //     margin: "0 auto",
// // //     maxWidth: "600px",
// // //     padding: "20px",
// // //     backgroundColor: "#f9f9f9",
// // //     borderRadius: "10px",
// // //     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
// // //   },
// // //   header: {
// // //     marginBottom: "20px",
// // //     borderBottom: "2px solid #4CAF50",
// // //     paddingBottom: "10px",
// // //   },
// // //   title: {
// // //     fontSize: "2rem",
// // //     color: "#333",
// // //   },
// // //   subtitle: {
// // //     fontSize: "1rem",
// // //     color: "#555",
// // //   },
// // //   content: {
// // //     marginTop: "20px",
// // //     color: "#666",
// // //   },
// // //   buttonContainer: {
// // //     marginTop: "20px",
// // //     display: "flex",
// // //     flexDirection: "column", 
// // //     alignItems: "center", 
// // //   },
// // //   button: {
// // //     padding: "10px 20px",
// // //     fontSize: "1rem",
// // //     backgroundColor: "#4CAF50",
// // //     color: "#fff",
// // //     border: "none",
// // //     borderRadius: "5px",
// // //     cursor: "pointer",
// // //     transition: "background-color 0.3s ease",
// // //     marginBottom: "10px", 
// // //   },
// // // };

// // // export default Home;

// // import { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // const Home = () => {
// //   const [user, setUser] = useState("");
// //   const [email, setEmail] = useState("");
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const uname = window.localStorage.getItem("user");
// //     const uemail = window.localStorage.getItem("email");

// //     if (!uname || !uemail) {
// //       navigate("/login");
// //     } else {
// //       setUser(uname);
// //       setEmail(uemail);
// //     }
// //   });

// //   return (
// //     <div style={styles.container}>
// //       <header style={styles.header}>
// //         <h1 style={styles.title}>Welcome to Your Dashboard</h1>
// //         {user && email ? (
// //           <p style={styles.subtitle}>
// //             Hi, <strong>{user}</strong>! Your email: <strong>{email}</strong>
// //           </p>
// //         ) : (
// //           <p style={styles.subtitle}>Loading user information...</p>
// //         )}
// //       </header>

// //       <div style={styles.content}>
// //         <p>Explore your account settings, view your profile, or check your notifications below:</p>

// //         <div style={styles.buttonContainer}>
// //           <h4>Method 1: Using API</h4>
// //           <p>Functions for adding, displaying, and searching products.</p>
// //           <button style={styles.button}>Add Product Form</button>
// //           <button style={styles.button}>Display Products</button>
// //           <button style={styles.button}>Search Bar</button>
// //         </div>

// //         <div style={styles.buttonContainer}>
// //           <h4>Method 2: Using Simple JavaScript Functions</h4>
// //           <p>Functions for adding, displaying, and searching products.</p>
// //           <button style={styles.button}>ProductAll</button>
// //         </div>

// //         <div style={styles.buttonContainer}>
// //           <h4>Method 3: Using Redux Toolkit</h4>
// //           <p>Functions for adding, displaying, and searching products.</p>
// //           <button style={styles.button}>ReduxAdd</button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const styles = {
// //   container: {
// //     fontFamily: "'Arial', sans-serif",
// //     textAlign: "center",
// //     margin: "20px auto",
// //     maxWidth: "700px",
// //     padding: "20px",
// //     backgroundColor: "#f9f9f9",
// //     borderRadius: "10px",
// //     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
// //   },
// //   header: {
// //     marginBottom: "20px",
// //     borderBottom: "2px solid #4CAF50",
// //     paddingBottom: "10px",
// //   },
// //   title: {
// //     fontSize: "2rem",
// //     color: "#333",
// //   },
// //   subtitle: {
// //     fontSize: "1rem",
// //     color: "#555",
// //   },
// //   content: {
// //     marginTop: "20px",
// //     color: "#666",
// //   },
// //   buttonContainer: {
// //     marginTop: "20px",
// //     display: "flex",
// //     flexDirection: "column",
// //     alignItems: "center",
// //     gap: "10px", // Consistent spacing between buttons
// //   },
// //   button: {
// //     padding: "10px 20px",
// //     fontSize: "1rem",
// //     backgroundColor: "#4CAF50",
// //     color: "#fff",
// //     border: "none",
// //     borderRadius: "5px",
// //     cursor: "pointer",
// //     transition: "background-color 0.3s ease",
// //   },
// // };

// // export default Home;

// import { useEffect, useState } from "react";

// const Home = () => {
//   const [user, setUser] = useState("");
//   const [email, setEmail] = useState("");

//   useEffect(() => {
//     const uname = window.localStorage.getItem("user");
//     const uemail = window.localStorage.getItem("email");

//     if (!uname || !uemail) {
//       window.location.href = "/login"; // Redirect to login page
//     } else {
//       setUser(uname);
//       setEmail(uemail);
//     }
//   }); // Dependency array ensures this runs only once

//   return (
//     <div style={styles.container}>
//       <header style={styles.header}>
//         <h1 style={styles.title}>Welcome to Your Dashboard</h1>
//         {user && email ? (
//           <p style={styles.subtitle}>
//             Hi, <strong>{user}</strong>! Your email: <strong>{email}</strong>
//           </p>
//         ) : (
//           <p style={styles.subtitle}>Loading user information...</p>
//         )}
//       </header>

//       <div style={styles.content}>
//         <p>Explore your account settings, view your profile, or check your notifications below:</p>

//         <div style={styles.buttonContainer}>
//           <h4>Method 1: Using API</h4>
//           <p>Functions for adding, displaying, and searching products.</p>
//           <button style={styles.button}>Add Product Form</button>
//           <button style={styles.button}>Display Products</button>
//           <button style={styles.button}>Search Bar</button>
//         </div>

//         <div style={styles.buttonContainer}>
//           <h4>Method 2: Using Simple JavaScript Functions</h4>
//           <p>Functions for adding, displaying, and searching products.</p>
//           <button style={styles.button}>ProductAll</button>
//         </div>

//         <div style={styles.buttonContainer}>
//           <h4>Method 3: Using Redux Toolkit</h4>
//           <p>Functions for adding, displaying, and searching products.</p>
//           <button style={styles.button}>ReduxAdd</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     fontFamily: "'Arial', sans-serif",
//     textAlign: "center",
//     margin: "20px auto",
//     maxWidth: "700px",
//     padding: "20px",
//     backgroundColor: "#f9f9f9",
//     borderRadius: "10px",
//     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//   },
//   header: {
//     marginBottom: "20px",
//     borderBottom: "2px solid #4CAF50",
//     paddingBottom: "10px",
//   },
//   title: {
//     fontSize: "2rem",
//     color: "#333",
//   },
//   subtitle: {
//     fontSize: "1rem",
//     color: "#555",
//   },
//   content: {
//     marginTop: "20px",
//     color: "#666",
//   },
//   buttonContainer: {
//     marginTop: "20px",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     gap: "10px", // Consistent spacing between buttons
//   },
//   button: {
//     padding: "10px 20px",
//     fontSize: "1rem",
//     backgroundColor: "#4CAF50",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     transition: "background-color 0.3s ease",
//   },
// };

// export default Home;

import { useEffect, useState } from "react";

const Home = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const userEmail = window.localStorage.getItem("user");

    if (!userEmail) {
      window.location.href = "/login"; // Redirect to login page if email is missing
    } else {
      setEmail(userEmail);
    }
  }); // Empty dependency array ensures this runs only once on mount

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Welcome to Your Dashboard</h1>
        {email ? (
          <p style={styles.subtitle}>
            Your email: <strong>{email}</strong>
          </p>
        ) : (
          <p style={styles.subtitle}>Loading user information...</p>
        )}
      </header>

      <div style={styles.content}>
        <p>Explore your account settings, view your profile, or check your notifications below:</p>

        <div style={styles.buttonContainer}>
          <h4>Method 1: Using API</h4>
          <p>Functions for adding, displaying, and searching products.</p>
          <button style={styles.button}>Add Product Form</button>
          <button style={styles.button}>Display Products</button>
          <button style={styles.button}>Search Bar</button>
        </div>

        <div style={styles.buttonContainer}>
          <h4>Method 2: Using Simple JavaScript Functions</h4>
          <p>Functions for adding, displaying, and searching products.</p>
          <button style={styles.button}>ProductAll</button>
        </div>

        <div style={styles.buttonContainer}>
          <h4>Method 3: Using Redux Toolkit</h4>
          <p>Functions for adding, displaying, and searching products.</p>
          <button style={styles.button}>ReduxAdd</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    textAlign: "center",
    margin: "20px auto",
    maxWidth: "700px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  header: {
    marginBottom: "20px",
    borderBottom: "2px solid #4CAF50",
    paddingBottom: "10px",
  },
  title: {
    fontSize: "2rem",
    color: "#333",
  },
  subtitle: {
    fontSize: "1rem",
    color: "#555",
  },
  content: {
    marginTop: "20px",
    color: "#666",
  },
  buttonContainer: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px", // Consistent spacing between buttons
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default Home;
