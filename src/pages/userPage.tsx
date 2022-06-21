import { useEffect } from 'react'
import { UserItem } from '../components/UserItem'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useUserActions } from '../hooks/useUserActions'

export function UserPage() {

    const { users, error, loading } = useTypedSelector((state) => state.user)
    const { fetchUsers } = useUserActions()
    useEffect(() =>  {
        fetchUsers()
    }, [fetchUsers])
    
    if (loading) {
        return (
            <h1>Загрузка пользователей</h1>
        )
    }
    if (error) {
        return (
            <h1 style={{ border: '1px solid red' }}>{error}</h1>
        )
    }

    return (
        <div style={{marginTop: "30px"}}>
            {users.map((user) => <UserItem key={user.id} user={user} />)}
        </div>
    )
}
   