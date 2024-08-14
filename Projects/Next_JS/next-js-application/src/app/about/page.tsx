'use client'

import { useRouter } from 'next/navigation'
 
export default function Page() {
  const router = useRouter()
 
  return (
    <div className="flex flex-col items-center space-y-4">
  <div className="text-center">
    <h2 className="text-2xl font-semibold text-gray-800">About Our Organization</h2>
    <p className="text-gray-600 mt-2">
      
    </p>
  </div>
  
  <button 
    type="button" 
    onClick={() => router.push('/')}
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    Go to Home Page
  </button>
</div>

  )
}


//