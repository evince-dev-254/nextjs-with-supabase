import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'

export default async function Page() {
  try {
    const cookieStore = await cookies()
    const supabase = await createClient(cookieStore)

    const { data: todos } = await supabase.from('todos').select()

    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <h1 className="text-2xl font-bold mb-4">Todos</h1>
        {todos && todos.length > 0 ? (
          <ul className="space-y-2">
            {todos.map((todo) => (
              <li key={todo.id} className="p-2 border rounded">
                {JSON.stringify(todo)}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No todos found. Create some in your Supabase database!</p>
        )}
      </div>
    )
  } catch (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <h1 className="text-2xl font-bold mb-4 text-red-600">Configuration Required</h1>
        <div className="max-w-md text-center space-y-4">
          <p className="text-gray-600">
            To use this app, you need to configure your Supabase credentials.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h2 className="font-semibold text-yellow-800 mb-2">Setup Instructions:</h2>
            <ol className="text-left text-sm text-yellow-700 space-y-1">
              <li>1. Go to <a href="https://app.supabase.com" target="_blank" rel="noopener noreferrer" className="underline">app.supabase.com</a></li>
              <li>2. Create a new project or select existing one</li>
              <li>3. Go to Settings → API</li>
              <li>4. Copy your Project URL and anon key</li>
              <li>5. Update your .env.local file with these values</li>
              <li>6. Restart the development server</li>
            </ol>
          </div>
          <p className="text-sm text-gray-500">
            Error: {error instanceof Error ? error.message : 'Unknown error'}
          </p>
        </div>
      </div>
    )
  }
}
