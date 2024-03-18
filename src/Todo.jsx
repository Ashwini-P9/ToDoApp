import React ,{useState}from 'react'
import todo from  "./todo.png";

const Todo = () => {
    let [inputData,setInputData]= useState("")     //*Define state*/
    let[item,setItem]=useState([])
    let[editIndex,setEditindex]=useState(null)     //*index value is a number not string  thats why null is used

     //!adding the item
    let addItem =()=>{
        if(inputData === ""){}
         else if(editIndex!==null){      
            item[editIndex] = inputData      //placing the updated value in that index of item array
            setEditindex(null)               // /once we updated the data ,setting null after update
            setInputData("")
        }  
        else{
        setItem([...item,inputData])
        setInputData("")
       }
    }

    //!Delete  single value
     let deleteSingleItem=(id)=>{
        console.log(id);
    let updatedArray= item.filter((x,y)=>{ 
        return id!==y}) 
        setItem(updatedArray)}

   //!update  function      //on clicking the button index is passing as an argument updatedItem =(id)=>{  here id is argu
   let updatedItem =(id)=>{   //we r inputing the data using input fiels i,e is setInputData()
      setInputData(item[id])//which item should update that will come...setInput() fetching  the iteam array  through index
        //*        item[1]    //we r updating  the value in input field
      setEditindex(id)
    }

        


   //!clear all the values
   let deleteAll=()=>{
    setItem([])       //?empty array
    }
      
    let handleChange=(e)=>{
        setInputData(e.target.value)
    }
    let handleSubmit=(e)=>{
        e.preventDefault();
        console.log(inputData);
    }
     
    return (
    <>
        <section className='mainContainer'>
            <header className='headpart'>
                <h1>TODO APP✍️</h1>
                <img src={todo} alt="" height="150px" width="150px"/>
            
            </header>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputData} onChange={handleChange}/>
                <button title='Add' onClick={addItem}>➕</button>
             <br/>
             <br/>
                <span><h2>list:</h2></span>
            </form>
            <span> </span>
  <article className='displaydata'>
       {
          item.map((x,ind)=>{
            return(
                <div className='operation'>
                    <span>{x}</span>
                    <button title='Delete' onClick={()=>deleteSingleItem(ind)}>❌</button>
                    <button title='Update' onClick={()=>updatedItem(ind)}>📝</button>
                </div>
            )
          })
       }
  </article>
  <footer>
  <button onClick={deleteAll}>Clear All🗑️</button>
  </footer>
        </section>
    </>
  )
}

export default Todo