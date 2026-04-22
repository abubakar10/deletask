import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'deletask-saved-task-ids'

function readIds() {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    const parsed = JSON.parse(raw || '[]')
    return Array.isArray(parsed) ? parsed.filter((id) => typeof id === 'string') : []
  } catch {
    return []
  }
}

export function useSavedTaskIds() {
  const [ids, setIds] = useState(readIds)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
    } catch {
      /* ignore quota */
    }
  }, [ids])

  const toggle = useCallback((id) => {
    setIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }, [])

  const isSaved = useCallback((id) => ids.includes(id), [ids])

  return { savedIds: ids, toggle, isSaved, savedCount: ids.length }
}
