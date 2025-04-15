import { notFound } from "next/navigation"
import { getCaseStudyById } from "../data"
import CaseStudyDetail from "./details"
import { Metadata } from "next"

// Define proper params type for Next.js dynamic routes
type Props = {
  params: { id: string }
}

// Generate metadata for the page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const caseStudy = getCaseStudyById(params.id)
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found'
    }
  }
  
  return {
    title: caseStudy.title,
    description: caseStudy.description
  }
}

// This tells Next.js which routes are valid
export function generateStaticParams() {
  const caseStudies = ["global-tech-firm", "startup-feature"]
  return caseStudies.map(id => ({
    id
  }))
}

export default function CaseStudyDetailPage({ params }: Props) {
  const caseStudy = getCaseStudyById(params.id)
  
  // Check if the case study exists
  if (!caseStudy) {
    notFound()
  }
  
  // Pass the case study data to the detail component
  return <CaseStudyDetail caseStudy={caseStudy} />
}