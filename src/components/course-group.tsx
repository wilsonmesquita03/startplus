"use client"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { useRouter } from 'next/navigation';
import { useCourse } from '@/app/course/[slug]/learn/course-provider';
import Link from 'next/link';

type Data = {
  id: number;
  title: string;
  lessons: {
    id: number;
    type: "Lecture" | "Quizz" | "Text"
    title: string;
  }[];
}

const CourseGroup = ({ data }: { data: Data }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const { slug } = useCourse()
  const router = useRouter()

  return (
    <div>
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex justify-between bg-[#f6f7f9] p-4 border-b-[#d1d2e0] border-b cursor-pointer"
      >
        <div>
          <h3 className="font-bold">{data.title}</h3>
          <div><span className="text-xs" aria-hidden="true">0 / {data.lessons.length} | 3hr</span></div>
        </div>
        <button>
          {
            isExpanded
              ? <ExpandLessIcon />
              : <ExpandMoreIcon />
          }
        </button>
      </div>
      {
        isExpanded
        && (
          <ul>
            {
              data.lessons.map((lesson) => (
                <li key={lesson.id}>
                  <Link href={`/course/${slug}/learn/${lesson.type.toLowerCase()}/${lesson.id}`}>
                    <div className="flex gap-4 cursor-pointer hover:bg-[#d1d2e0] p-4">
                      <div>
                        <Checkbox />
                      </div>
                      <div>
                        <div>
                          <p className="text-sm">{lesson.title}</p>
                        </div>
                        <div className="flex items-end gap-1.5 pt-2">
                          <OndemandVideoIcon fontSize="small" />
                          <p className="text-xs">14 min</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              ))
            }
          </ul>
        )
      }
    </div>
  )
}

export default CourseGroup