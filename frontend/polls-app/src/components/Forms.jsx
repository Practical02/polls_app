import React from 'react'

const Forms = () => {
  return (
      
      <div class="flex justify-center items-center min-h-screen">
                    <div class="w-96 p-6 bg-white rounded shadow-lg">
                        <h1 class="text-2xl font-semibold mb-6">Login</h1>
                        <form>
                            <div class="mb-4">
                                <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                <input type="email" id="email" name="email" class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-500" required></input>
                            </div>
                            <div class="mb-6">
                                <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                <input type="password" id="password" name="password" class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-500" required></input>
                            </div>
                            <div class="mb-6">
                                <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
                                <input type="password" id="password" name="password" class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-500" required></input>
                            </div>
                            <div>
                                <button type="submit" class="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
  )
}

export default Forms
