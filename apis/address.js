
const API = 'http://localhost:8000/api'

export const userExists = async (address)=>{
   const response = await fetch(`${API}/getAddress/${address}`,{
    method : 'GET'
   })
   const result = await response.json();
   return result;
}

export const postAddress = async (name,address,isDoctor) =>{
    const response = await fetch(`${API}/addAddress`,{
        method : 'POST',
        headers:{
          'Content-Type': 'application/json',
          Accept : 'application/json'
        },
        body : JSON.stringify({
            name,
            address,
            isDoctor
        })
    })
  const result = await response.json();

  return result;
}
export const postDoctor = async (name,address,gender,aadharNumber) =>{
    const response = await fetch(`${API}/addDoctor`,{
        method : 'POST',
        headers:{
          'Content-Type': 'application/json',
          Accept : 'application/json'
        },
        body : JSON.stringify({
            name,
            address,
            gender,
            aadharNumber
        })
    })
  const result = await response.json();

  return result;
}