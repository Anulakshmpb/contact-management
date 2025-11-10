import React from 'react'

export default function Header() {
  return (
	<div
  className="
    w-full fixed top-0 left-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/10 px-6 py-4"
>
  <div className="max-w-5xl mx-auto flex justify-center">
    <h1
      className="
        text-3xl font-extrabold tracking-wide bg-gradient-to-r from-blue-800 to-purple-600 text-transparent bg-clip-text drop-shadow-md"
    >
      Contact Manager
    </h1>
  </div>
</div>

  )
}
