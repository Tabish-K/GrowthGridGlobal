import { notFound } from "next/navigation"
import { getCaseStudyById } from "../data"
import CaseStudyDetail from "./details"

interface CaseStudyParams {
  params: { id: string }
}

export default function CaseStudyDetailPage({ params }: CaseStudyParams) {
  const caseStudy = getCaseStudyById(params.id)

  // Check if the case study exists
  if (!caseStudy) {
    notFound()
  }

  // Pass the case study data to the detail component
  return <CaseStudyDetail caseStudy={caseStudy} />
}