import styles from './Users.module.scss'
import { UsersViewProps, IChatUser } from "../../../../types/types"

export const UsersView = ({ chatUsers }: UsersViewProps) => {
    return (
        <div className={styles.usersContainer}> 
            {chatUsers.map((user: IChatUser) => (
                <div key={user.title} className={styles.userItem}>
                    <img src={user.icon} alt={user.title} className={styles.userIcon}/>
                    <p className={styles.userTitle}>{user.title}</p>
                </div>
            ))}
        </div>
    )
}