
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import { sendEmail } from "../../../../lib/email"; // Ensure you have this function implemented
import prisma from "../../../../lib/prisma";

export async function POST(request) {
  try {
    const body = await request.json();
    const { first_name, last_name, email, password, phone } = body;

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    // Check if user already exists
    const existingUser = await prisma.admin.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: 'Admin already exists' }, { status: 409 });
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);

    // 🔐 Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await prisma.admin.create({
      data: {
        first_name,
        last_name,
        email,
        password: hashedPassword,
        phone,
        OTP: otp,
      },
    });

    // 📧 Send OTP via email
    await sendEmail(
      email,
      "Your Verification Code",
      `
        <h2>Welcome, ${first_name}!</h2>
        <p>Your account has been created successfully.</p>
        <p><strong>Verification Code (OTP):</strong> ${otp}</p>
        <p>Please use this code to verify your account.</p>
      `
    );

    // Return user info (without password and OTP)
    const { password: _, OTP: __, ...userWithoutSensitive } = user;

    return NextResponse.json(
      { message: 'Admin registered successfully. OTP sent via email.', user: userWithoutSensitive },
      { status: 201 }
    );

  } catch (error) {
    console.error("User registration failed:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}



// export async function POST(request) {
//   try {
//     const body = await request.json();
//     const { first_name, last_name, email, password, phone } = body;

//     if (!email || !password) {
//       return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
//     }

//     // Check if user already exists
//     const existingUser = await prisma.admin.findUnique({ where: { email } });
//     if (existingUser) {
//       return NextResponse.json({ error: 'Admin already exists' }, { status: 409 });
//     }

//     // 🔐 Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

//     // Create new user with hashed password
//     const user = await prisma.admin.create({
//       data: {
//         first_name,
//         last_name,
//         email,
//         password: hashedPassword, // store the hashed password
//         phone,
//       },
//     });

//     // Return user info without password
//     const { password: _, ...userWithoutPassword } = user;

//     return NextResponse.json(
//       { message: 'Admin registered successfully', user: userWithoutPassword },
//       { status: 201 }
//     );

//   } catch (error) {
//     console.error("User registration failed:", error);
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//   }
// }



// const { prisma } = require("@/utils/prisma");
// const { sendEmail } =require("@/utils/email"); // ✅ Import email function
// import { hash } from "bcryptjs";
// import crypto from "crypto";

// import { uploadToCloudinary } from "@/utils/cloudinary"; // Adjust the import if needed
// export async function POST(req) {
//     try {
//       const formData = await req.formData(); // ✅ Use formData for file uploads
//       const staffID = formData.get("staffID");
//       const firstName = formData.get("firstName");
//       const middleName=formData.get("middleName");
//       const lastName = formData.get("lastName");
//       const phoneNumber = formData.get("phoneNumber");
//       const username = formData.get("username");
//       const email = formData.get("email");
//       const image = formData.get("image"); // File upload (optional)
  
//       // Validate required fields
//       if (!staffID || !firstName || !middleName || !lastName || !phoneNumber || !username || !email) {
//         return new Response(JSON.stringify({ error: "All required fields must be filled!" }), {
//           status: 400,
//           headers: { "Content-Type": "application/json" },
//         });
//       }
//       const staffId = await prisma.staff.findUnique({ 
//         where: { staffID: parseInt(staffID, 10) } // Convert to number
//       });
//       if (staffId) {
//         return new Response(JSON.stringify({ error: "Staff ID already exists!" }), {
//           status: 400
//         });
//       }
      
//       const existingStaff = await prisma.staff.findUnique({
//         where: { username }
//       });
  
//       if (existingStaff) {
//         return new Response(JSON.stringify({ error: "Username already exists!" }), { status: 400 });
//       }
      
//       const randomPassword = crypto.randomBytes(5).toString("hex");

//       // ✅ Hash the password before saving
//       const hashedPassword = await hash(randomPassword, 10);
  
//       if(image && image.size > 5 * 1024 * 1024) {
//         return new Response(JSON.stringify({ error: "Image size exceeds 5MB" }), {
//           status: 400,
//           headers: { "Content-Type": "application/json" },
//         });
//       }
//       if (image && !["image/jpeg", "image/png", "image/webp"].includes(image.type)) {
//         return new Response(JSON.stringify({ error: "Unsupported image format" }), {
//           status: 400,
//           headers: { "Content-Type": "application/json" },
//         });
//       }
//       // Upload image if provided
//       let imageUrl = null;
//       if (image && image instanceof File) {
//         imageUrl = await uploadToCloudinary(image);
//         if (!imageUrl) {
//           return new Response(JSON.stringify({ error: "Image upload failed" }), {
//             status: 500,
//             headers: { "Content-Type": "application/json" },
//           });
//         }
//         console.log("🖼️ Image uploaded successfully!")  ;
//       }
  
//       // Create staff in the database
//       const newStaff = await prisma.staff.create({
//         data: {
//           staffID: parseInt(staffID, 10), // Convert to number
//           firstName,
//           middleName,
//           lastName,
//           phoneNumber,
//           username,
//           email,
//           password: hashedPassword,
//           image: imageUrl,
//         },
//       });
      //  await sendEmail(email, "Your Staff Account Credentials", `
      //   <h2>Welcome, ${firstName}!</h2>
      //   <p>Your staff account has been created successfully.</p>
      //   <p><strong>Username:</strong> ${username}</p>
      //   <p><strong>Password:</strong> ${randomPassword}</p>
      //   <p>Please change your password after logging in.</p>
      // `);
  
//       return new Response(JSON.stringify({ message: "✅ Staff registered successfully!", staff: newStaff }), {
//         status: 201,
//         headers: { "Content-Type": "application/json" },
//       });
  
//     } catch (error) {
//       console.error("❌ Error registering staff:", error);
//       return new Response(JSON.stringify({ error: "Internal Server Error" }), {
//         status: 500,
//         headers: { "Content-Type": "application/json" },
//       });
//     }
//   }
  
