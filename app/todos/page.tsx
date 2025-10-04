import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'
import Link from 'next/link'

export default async function TodosPage() {
  try {
    const cookieStore = await cookies()
    const supabase = await createClient(cookieStore)

    const { data: todos } = await supabase.from('todos').select()

    return (
      <div className="min-h-screen flex flex-col items-center p-8">
        <div className="w-full max-w-4xl">
          <div className="mb-8">
            <Link 
              href="/" 
              className="text-blue-600 hover:text-blue-800 underline mb-4 inline-block"
            >
              ← Back to Home
            </Link>
            <h1 className="text-3xl font-bold mb-2">Todos</h1>
            <p className="text-gray-600">Manage your tasks and todos</p>
          </div>

          {todos && todos.length > 0 ? (
            <div className="grid gap-4">
              {todos.map((todo) => (
                <div key={todo.id} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <pre className="whitespace-pre-wrap text-sm">
                    {JSON.stringify(todo, null, 2)}
                  </pre>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No todos found</h3>
              <p className="text-gray-500 mb-4">
                Create some todos in your Supabase database to see them here.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md mx-auto">
                <h4 className="font-medium text-blue-900 mb-2">Quick Setup:</h4>
                <ol className="text-sm text-blue-800 text-left space-y-1">
                  <li>1. Go to your Supabase dashboard</li>
                  <li>2. Create a "todos" table</li>
                  <li>3. Add some sample data</li>
                  <li>4. Refresh this page</li>
                </ol>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  } catch (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <div className="max-w-md text-center space-y-4">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Configuration Required</h1>
          <p className="text-gray-600">
            To use the todos feature, you need to configure your Supabase credentials.
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
          <Link 
            href="/" 
            className="text-blue-600 hover:text-blue-800 underline"
          >
            ← Back to Home
          </Link>
          <p className="text-sm text-gray-500">
            Error: {error instanceof Error ? error.message : 'Unknown error'}
          </p>
        </div>
      </div>
    )
  }
}
