import React ,{useState} from 'react' 

export default function CollapseExpandExample({ data }){
  const [toggleStatus,setToggleStatus] = useState(true);
  return ( 
 <div>
    <p>Favourite list</p>
    <button onClick={() => setToggleStatus(toggleStatus? false  : true)}>
      { toggleStatus ? 'Collapse' : 'Expand' }
    </button>
    { toggleStatus && (
        <div>
          { data.map(item => (
              <p key={item.id}>{ item.name }</p>
            ))
          }
        </div>
      )
    }
  </div>
 )
}