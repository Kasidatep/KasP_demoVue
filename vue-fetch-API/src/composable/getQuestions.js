const getQuestions = async () => {
  try{
    const res = await fetch('http://localhost:5000/questions')
    if(res.ok){
      const result = await res.json()
      return result
    }else {
      throw new error('cannot GET data');
    }
  }
  catch(error){
    console.log(error)
  }
  
}

// getQuestions()
export { getQuestions }
