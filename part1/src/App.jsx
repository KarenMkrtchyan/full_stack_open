function Header({course}){
  return(<h1>{course}</h1>)
}

function Part({part, ex_num}){
  return(<p>{part} {ex_num}</p>)
}

function Content({parts, exercise_numbers}){
  return(
    <div>
      {parts.map((part, index) => (<Part key={index} part= {part} ex_num={exercise_numbers[index]} />))}
    </div>
  )
}

function Total({exercises1, exercises2, exercises3}){
  return(<p>Number of exercises {exercises1 + exercises2 + exercises3}</p>)
}

function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
   <div>
    <Header course={course}/>
    <Content parts={[part1, part2, part3]} exercise_numbers={[exercises1, exercises2, exercises3]}/>
    <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
   </div>
  )
}

export default App
