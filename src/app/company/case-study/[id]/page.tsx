import { notFound } from "next/navigation"
import CaseStudyDetail from "./details"
import { getCaseStudyById } from "../data"

interface CaseStudyParams {
  params: Promise<{
    id: string
  }>
}

export default async function CaseStudyDetailPage({ params }: CaseStudyParams) {
  // Await the params object before accessing the id property
  const { id } = await params
  const caseStudy = getCaseStudyById(id)

  // Check if the case study exists
  if (!caseStudy) {
    notFound()
  }

  // Pass the case study data to the detail component
  return <CaseStudyDetail caseStudy={caseStudy} />
}
