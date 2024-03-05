import React from 'react'

export default function ImageCard(props) {
  return (
    <div className='p-2'>
        <div class="card pt-2" style={{width:300}}>
    <div className="justify-content-center">
  <img src={props.image}  alt={props.name} width='80' height='80'/>
  </div>
  <div class="card-body">
    <h5 class="card-title">{props.name}</h5>
    <p class="">
        Price: {`$${props.current_price}`}
        </p>
    <p class="">
        Rank: {`$${props.market_cap_rank}`}
    </p>
    <p class="">
        Market Cap: {`$${props.market_cap}`}
    </p>

  </div>
</div>
    </div>
  )
}

