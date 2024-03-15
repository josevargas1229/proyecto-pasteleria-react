import React from 'react'
import useFetch from '../../helpers/useFetch'

export default function Users() {
  const { data, loading } = useFetch('http://localhost:4000/usuarios')
  console.log(loading ? '' : data)
  return (
    <div>Users</div>
  )
}
