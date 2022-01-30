import { useState } from 'react'
import Button from '../ui/Button'
import Card from '../ui/Card'
import ErrorModal from '../ui/ErrorModal'
import classes from './UserList.module.css'

const UserList = (props) => {
	const [stop, setStop] = useState(null)
	const [date, setDate] = useState([])

	const stopChangeHandler = (event) => {
		setDate(props.users.filter((user) => user.id != event.target.id))
		setStop({
			title: 'Delete user',
			message: 'You really want to delete the user?',
		})
	}

	const deleteHandler = (event) => {
		if (event.target.type === 'button') {
			props.onGetData(date)
			setStop(null)
		}
	}
	const cancelHandler = (event) => {
		if (event.target.type === 'button') {
			setStop(null)
		}
	}

	return (
		<>
        {stop && (<ErrorModal title={stop.title} message={stop.message} onConfirm={deleteHandler} >
            <Button onClick={cancelHandler}>CANCEL</Button>
        </ErrorModal>)}
			<Card className={classes.users}>
				<ul>
					{props.users.map((user) => (
						<li key={user.id}>
							{user.name} ({user.age} years old)
                            <Button onClick={stopChangeHandler} id={user.id}>DELETE</Button>
						</li>
					))}
				</ul>
			</Card>
		</>
	)
}
export default UserList
