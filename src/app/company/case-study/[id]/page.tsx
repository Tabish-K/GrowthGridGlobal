import { notFound } from "next/navigation"
import { getCaseStudyById } from "../data"
import CaseStudyDetail from "../[id]/details"
import { type Metadata } from "next"

interface Params {
  id: string
}

interface CaseStudyPageProps {
  params: Params
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const caseStudy = await getCaseStudyById(params.id)

  if (!caseStudy) {
    notFound()
  }

  return <CaseStudyDetail caseStudy={caseStudy} />
}