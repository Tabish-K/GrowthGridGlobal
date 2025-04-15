// import { notFound } from "next/navigation"
// import CaseStudyDetail from "./details"
// import { getCaseStudyById } from "../data"

// interface CaseStudyParams {
//   params: {
//     id: string
//   }
// }

// export default async function CaseStudyDetailPage({ params }: CaseStudyParams) {
//   // Make sure to await the params object
//   const id = await params.id
//   const caseStudy = getCaseStudyById(id)

//   // Check if the case study exists
//   if (!caseStudy) {
//     notFound()
//   }

//   // Pass the case study data to the detail component
//   return <CaseStudyDetail caseStudy={caseStudy} />
// }