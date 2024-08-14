'use client'

import { useRouter } from 'next/navigation'
 
export default function Page() {
  const router = useRouter()
 
  return (
    <div className="flex flex-col items-center space-y-4">
  <div className="text-center">
    <h2 className="text-2xl font-semibold text-gray-800">Our Team</h2>
    <p className="text-gray-600 mt-2">
      Meet the dedicated team behind our success.
    </p>
  </div>
  
  <button 
    type="button" 
    onClick={() => router.push('/about')}
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    Go to About Page
  </button>
</div>

  )
}


