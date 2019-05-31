
const useState = (value) => {
  let state = value
  const updateState = (change) => {
    state = change
    return state
  }
  return [state, updateState]
}


const [post, setPost] = useState(0)



console.log(setPost(4))


console.log(post)