import { SessionView } from '../features/study/SessionView'
import { TodayDashboard } from '../features/study/TodayDashboard'
import { useStudySession } from '../features/study/useStudySession'

export function TodayPage() {
  const { session, start, show, grade, quit } = useStudySession()

  if (session) {
    return <SessionView session={session} onShow={show} onGrade={grade} onQuit={quit} />
  }

  return <TodayDashboard onStart={start} />
}
