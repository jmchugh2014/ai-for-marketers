import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'PLACEHOLDER_URL'
const SUPABASE_ANON_KEY = 'PLACEHOLDER_KEY'

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

function getUserId() {
  let id = localStorage.getItem('ai_user_id')
  if (!id) {
    id = crypto.randomUUID()
    localStorage.setItem('ai_user_id', id)
  }
  return id
}

async function saveProgress(lessonIndex, xp, answers) {
  await supabase.from('user_progress').upsert({
    user_id: getUserId(),
    lesson_index: lessonIndex,
    xp,
    answers,
    updated_at: new Date().toISOString()
  }, { onConflict: 'user_id,lesson_index' })
}

async function loadProgress() {
  const { data } = await supabase
    .from('user_progress')
    .select('*')
    .eq('user_id', getUserId())
  return data
}

export { saveProgress, loadProgress, getUserId }
