import React from 'react'
import axios from 'axios'
import './Test.css'

class Test extends React.Component {
  state = {
    data: null
  }
    componentDidMount() {
      axios.get('http://demo1946494.mockable.io/spaces').then(response => {
        console.log(response.data)
        this.setState({
          data: response.data
        })
      })
    }
  render() {
    if (!this.state.data) {
      return <p>No Data</p>
    }

    return (
      <div>
        <div className="container">
          { this.state.data.page.entities.map(data => {
            return (
              <div className="image-card">
                <img src={data.imageUrl} alt={data.spaceName} />
                <p className="title">{data.spaceName}</p>
                <p className="venue">{data.venueName}</p>
                <p className="pricing">{data.price} </p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
}

export default Test
