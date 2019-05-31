const data = {
	user: {
		username: "hongxuan",
		password: "123"
	}
}

user = {...data.user, username:"xuan"}

x = {...data, user}


console.log(x)