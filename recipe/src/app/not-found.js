import { Skeleton } from "@/components/ui/skeleton"
import { Heading1 } from "lucide-react"
import Link from "next/link"

const notFound = () => {
  return (
    <div className >
        <h1>This page cannot be found </h1>
        <Link href="/"></Link>
        </div>
  )
}

export default notFound
