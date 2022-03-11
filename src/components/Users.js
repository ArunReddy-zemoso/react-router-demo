import React from 'react'
import {Outlet, useSearchParams} from 'react-router-dom'

function Users() {
  const [searchParams,setSearchParams]=useSearchParams()
  const showingActiveUsers = searchParams.get('filter') ==='active'
  return (
    <>
    <div>
      <h2>User 1</h2>
      <h2>User 2</h2>
      <h2>User 3</h2>
    </div>
    <Outlet />
    <div>
      <button onClick={()=>setSearchParams({filter:'active'})}>Active Users</button>
      <button onClick={()=>setSearchParams({})}>Reset Filter</button>
    </div>
    <div>
      {showingActiveUsers?'showingActiveUsers':'showingAllUsers'}
    </div>
    </>
  )
}

export default Users
