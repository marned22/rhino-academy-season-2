import styles from './Users.module.scss'
import { UsersViewProps, IChatUser } from "../../../../types/types"

export const UsersView = ({ chatUsers }: UsersViewProps) => {
    return (
        <div className={styles.usersContainer}> 
            {chatUsers.map((user: IChatUser) => (
                <div key={user.id} className={styles.userItem}>
                    <img src={user.images.profile} alt={user.username} className={styles.userIcon}/>
                    <p className={styles.userTitle}>{user.profile.firstName} {user.profile.lastName}</p>
                </div>
            ))}
        </div>
    )
}