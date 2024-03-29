// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/ekdlRJKF38H
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"

// export default function Component() {
//   return (
//     <Card className="w-full max-w-lg mx-auto">
//       <CardHeader className="p-4">
//         <CardTitle>Deluxe King Room</CardTitle>
//         <CardDescription>Mountain view</CardDescription>
//       </CardHeader>
//       <CardContent className="grid gap-4 p-4">
//         <div className="text-4xl font-semibold">$299</div>
//         <div className="text-sm grid sm:grid-cols-2 gap-4">
//           <div className="flex items-center gap-2">
//             <UsersIcon className="w-4 h-4" />
//             2 guests
//           </div>
//           <div className="flex items-center gap-2">
//             <BedIcon className="w-4 h-4" />
//             1 king bed
//           </div>
//           <div className="flex items-center gap-2">
//             <WifiIcon className="w-4 h-4" />
//             Free wifi
//           </div>
//           <div className="flex items-center gap-2">
//             <CoffeeIcon className="w-4 h-4" />
//             Coffee maker
//           </div>
//         </div>
//         <form className="grid gap-4">
//           <div className="grid gap-1">
//             <Label className="text-sm" htmlFor="check-in">
//               Check-in
//             </Label>
//             <Input id="check-in" type="date" />
//           </div>
//           <div className="grid gap-1">
//             <Label className="text-sm" htmlFor="check-out">
//               Check-out
//             </Label>
//             <Input id="check-out" type="date" />
//           </div>
//           <Button size="lg">Book now</Button>
//         </form>
//       </CardContent>
//     </Card>
//   )
// }

// function BedIcon(props) {
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
//       <path d="M2 4v16" />
//       <path d="M2 8h18a2 2 0 0 1 2 2v10" />
//       <path d="M2 17h20" />
//       <path d="M6 8v9" />
//     </svg>
//   )
// }

// function CoffeeIcon(props) {
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
//       <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
//       <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
//       <line x1="6" x2="6" y1="2" y2="4" />
//       <line x1="10" x2="10" y1="2" y2="4" />
//       <line x1="14" x2="14" y1="2" y2="4" />
//     </svg>
//   )
// }

// function UsersIcon(props) {
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
//       <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//       <circle cx="9" cy="7" r="4" />
//       <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
//       <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//     </svg>
//   )
// }

// function WifiIcon(props) {
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
//       <path d="M5 13a10 10 0 0 1 14 0" />
//       <path d="M8.5 16.5a5 5 0 0 1 7 0" />
//       <path d="M2 8.82a15 15 0 0 1 20 0" />
//       <line x1="12" x2="12.01" y1="20" y2="20" />
//     </svg>
//   )
// }
