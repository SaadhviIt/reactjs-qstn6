import React,{ useState } from 'react' 

export default function ViewEditToggleExample ({data}){
  const [name, setName] = useState(data);
  const [toggleStatus,setToggleStatus] = useState(false);
 return  (
    <div>
      { toggleStatus 
        ? <input type="text"  value={name} onChange={e => setName(e.target.value)}/>
        : <p>{ name }</p>
      }
      <button onClick={() => setToggleStatus(toggleStatus? false  : true)}>
        { toggleStatus ? 'Cancel' : 'Edit' }
      </button>
    </div>
  ) 
}
 