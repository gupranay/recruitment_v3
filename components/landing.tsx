// /* *
// * This code was generated by v0 by Vercel.
// * @see https://v0.dev/t/7WgiXFTKgG0
// * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
// */

// /** Add fonts into your Next.js project:

// import { Libre_Franklin } from 'next/font/google'
// import { Archivo } from 'next/font/google'

// libre_franklin({
//   subsets: ['latin'],
//   display: 'swap',
// })

// archivo({
//   subsets: ['latin'],
//   display: 'swap',
// })

// To read more about using these font, please visit the Next.js documentation:
// - App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
// - Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
// **/
// import Link from "next/link"
// import { JSX, SVGProps } from "react"

// export function Landing() {
//   return (
//     <div className="flex flex-col min-h-[100dvh]">
//       <header className="px-4 lg:px-6 h-14 flex items-center">
//         <Link href="#" className="flex items-center justify-center" prefetch={false}>
//           <MountainIcon className="h-6 w-6" />
//           <span className="sr-only">Recruit</span>
//         </Link>
//         <nav className="ml-auto flex gap-4 sm:gap-6">
//           <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
//             Features
//           </Link>
//           <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
//             Pricing
//           </Link>
//           <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
//             About
//           </Link>
//           <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
//             Contact
//           </Link>
//           <Link
//             href="#"
//             className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
//             prefetch={false}
//           >
//             Sign In
//           </Link>
//         </nav>
//       </header>
//       <main className="flex-1">
//         <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
//           <div className="container px-4 md:px-6">
//               <div className="flex flex-col justify-center space-y-4 mb-6">
//                 <div className="space-y-2">
//                   <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
//                     Recruit the Best Talent for Your Organization
//                   </h1>
//                   <p className="max-w-[600px] text-muted-foreground md:text-xl">
//                     Our recruiting platform helps college organizations and startups connect with the right candidates
//                     on a deeper level, beyond traditional job boards.
//                   </p>
//                 </div>
//                 <div className="flex flex-col gap-2 min-[400px]:flex-row">
//                   <Link
//                     href="#"
//                     className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
//                     prefetch={false}
//                   >
//                     Sign Up
//                   </Link>
//                   <Link
//                     href="#"
//                     className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
//                     prefetch={false}
//                   >
//                     Learn More
//                   </Link>
//                 </div>
//               </div>
//               <div className="flex flex-col justify-center space-y-4">
//                 <div className="space-y-2">
//                   <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose Recruit?</h2>
//                   <p className="text-muted-foreground md:text-xl">
//                     Discover the key benefits of our recruiting platform.
//                   </p>
//                 </div>
//                 <ul className="grid gap-6">
//                   <li>
//                     <div className="grid gap-1">
//                       <h3 className="text-xl font-bold">Comprehensive Profiles</h3>
//                       <p className="text-muted-foreground">
//                         Get a detailed view of each applicant's qualifications, experience, and interests.
//                       </p>
//                     </div>
//                   </li>
//                   <li>
//                     <div className="grid gap-1">
//                       <h3 className="text-xl font-bold">Streamlined Tracking</h3>
//                       <p className="text-muted-foreground">
//                         Easily manage the entire application process, from initial submission to final decision.
//                       </p>
//                     </div>
//                   </li>
//                   <li>
//                     <div className="grid gap-1">
//                       <h3 className="text-xl font-bold">Collaborative Hiring</h3>
//                       <p className="text-muted-foreground">
//                         Involve your team in the hiring process and make informed decisions together.
//                       </p>
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Applicant Management</div>
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Streamline Your Recruiting Process</h2>
//                 <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                   Our platform provides advanced tools to help you manage applications, track candidates, and make
//                   informed hiring decisions.
//                 </p>
//               </div>
//             </div>
//             <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
//               <div className="flex flex-col justify-center space-y-4">
//                 <ul className="grid gap-6">
//                   <li>
//                     <div className="grid gap-1">
//                       <h3 className="text-xl font-bold">Candidate Profiles</h3>
//                       <p className="text-muted-foreground">
//                         Get a comprehensive view of each applicant's qualifications, experience, and interests.
//                       </p>
//                     </div>
//                   </li>
//                   <li>
//                     <div className="grid gap-1">
//                       <h3 className="text-xl font-bold">Application Tracking</h3>
//                       <p className="text-muted-foreground">
//                         Easily manage the entire application process, from initial submission to final decision.
//                       </p>
//                     </div>
//                   </li>
//                   <li>
//                     <div className="grid gap-1">
//                       <h3 className="text-xl font-bold">Collaborative Hiring</h3>
//                       <p className="text-muted-foreground">
//                         Involve your team in the hiring process and make informed decisions together.
//                       </p>
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32 border-t">
//           <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
//             <div className="space-y-3">
//               <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Simplify your Org&apos;s Recruitment Today 👇</h2>
//               <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                 Sign up today and start connecting with the best talent for your organization.
//               </p>
//             </div>
//             <div className="mx-auto w-full max-w-sm flex flex-col gap-2">
//               <Link
//                 href="#"
//                 className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
//                 prefetch={false}
//               >
//                 Sign Up
//               </Link>
//               <Link
//                 href="#"
//                 className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
//                 prefetch={false}
//               >
//                 Sign In
//               </Link>
//             </div>
//           </div>
//         </section>
//       </main>
//       <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
//         <p className="text-xs text-muted-foreground">&copy; 2024 Recruit. All rights reserved.</p>
//         <nav className="sm:ml-auto flex gap-4 sm:gap-6">
//           <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
//             Terms of Service
//           </Link>
//           <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
//             Privacy
//           </Link>
//         </nav>
//       </footer>
//     </div>
//   )
// }

// export function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//     </svg>
//   )
// }

//components/landing.tsx
import Link from "next/link";
import { JSX, SVGProps } from "react";
import { Button } from "./ui/button";
import Profile from "./Profile";

export function Landing() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Recruit</span>
        </Link>
        <div className="flex gap-4">
          <Button variant="outline">Contact</Button>
          <Profile />
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col justify-center space-y-4 mb-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Recruit the Best Talent for Your Organization
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Our recruiting platform helps college organizations and
                  startups connect with the right candidates on a deeper level,
                  beyond traditional job boards.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="/dashboard"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Sign Up
                </Link>
                <Link
                  href="/auth?next=/dashboard"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Why Choose Recruit?
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Discover the key benefits of our recruiting platform.
                </p>
              </div>
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">
                      Comprehensive Profiles
                    </h3>
                    <p className="text-muted-foreground">
                      Get a detailed view of each applicant&aposs qualifications,
                      experience, and interests.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Streamlined Tracking</h3>
                    <p className="text-muted-foreground">
                      Easily manage the entire application process, from initial
                      submission to final decision.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Collaborative Hiring</h3>
                    <p className="text-muted-foreground">
                      Involve your team in the hiring process and make informed
                      decisions together.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Applicant Management
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Streamline Your Recruiting Process
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform provides advanced tools to help you manage
                  applications, track candidates, and make informed hiring
                  decisions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Candidate Profiles</h3>
                      <p className="text-muted-foreground">
                        Get a comprehensive view of each applicant&aposs
                        qualifications, experience, and interests.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Application Tracking
                      </h3>
                      <p className="text-muted-foreground">
                        Easily manage the entire application process, from
                        initial submission to final decision.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Collaborative Hiring
                      </h3>
                      <p className="text-muted-foreground">
                        Involve your team in the hiring process and make
                        informed decisions together.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Simplify your Org&apos;s Recruitment Today 👇
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sign up today and start connecting with the best talent for your
                organization.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm flex flex-col gap-2">
              <Link
                href="/auth?next=/dashboard"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Sign Up
              </Link>
              <Link
                href="/auth?next=/dashboard"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Sign In
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Recruit. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

export function MountainIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
