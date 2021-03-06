import { useEffect, useState } from "react"

const useGetDataById = (_id) => {
	const [event, setEvent] = useState({});

	useEffect( () => {
		const url = `https://powerful-everglades-73325.herokuapp.com/events/${_id}`;
		fetch(url)
		.then(res => res.json())
		.then(data => setEvent(data));
	}, [_id]);
	return [event];
}

export default useGetDataById;