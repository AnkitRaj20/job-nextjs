
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // Getting the pathname from the url
     const path = request.nextUrl.pathname;

     const isPathPublic = path === '/login' || path==="/signup"
      || path === "/verifyemail"
      || path === "/employerLogin"
      || path === "/employerSignup"

      const isEmployeeDashboard = path === '/dashboard/profile' || path=='/dashboard/postJob' || path=='/dashboard/postedJob'
      
      const isUserDashboard = path === '/user/jobs' || path=='/user/profile' 

     const token = request.cookies.get('token') ?.value || "";
    
     const isUser = request.cookies.get('isUser') ?.value || "";
     
     const isEmployer = request.cookies.get('isEmployer') ?.value || "";

    //  LOGGED IN AS USER
     if(isPathPublic && token && isUser) {
        return NextResponse.redirect(new URL(
            "/user/profile", request.nextUrl
        ))
    }
     if(isEmployeeDashboard && token && isUser) {
        return NextResponse.redirect(new URL(
            "/user/profile", request.nextUrl
        ))
    }
    

    // LOGGED IN AS EMPLOYER
    if(isPathPublic && token && isEmployer) {
        return NextResponse.redirect(new URL(
            "/dashboard/profile", request.nextUrl
        ))
    }
     if(isUserDashboard && token && isEmployer) {
        return NextResponse.redirect(new URL(
            "/dashboard/profile", request.nextUrl
        ))
    }


    // Not Logged in
     if(!isPathPublic && !token){
        return NextResponse.redirect(new URL(
            "/login",
            request.nextUrl
        ))
     }
} 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    
    "/dashboard",
    "/dashboard/:path*",
    "/user",
    "/user/:path*",
    "/login",
    "/employerLogin",
    "/signup",
    "/employerSignup",
    "/verifyemail"
  ],
}