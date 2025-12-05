import React from 'react'
import Button from '../components/Button/Button'

const TestingButton = () => {
  return (
    <>
     <div className="p-2">
        <Button variant="primary" onClick={() => alert("Clicked!")}>
          Click Me
        </Button>
      </div>
      <div className="p-2">
        <Button variant="secondary" onClick={() => alert("Clicked!")}>
          Click Me
        </Button>
      </div>
      <div className="p-2">
        <Button variant="danger" onClick={() => alert("Clicked!")}>
          Click Me
        </Button>
      </div>

      <div className="p-2">
      <Button variant="danger" loading>
        Loading Button
      </Button>
    </div>
          <div className="p-2">
        <Button variant="success" onClick={() => alert("Clicked!")}>
          Click Me
        </Button>
      </div>
          <div className="p-2">
        <Button variant="warning" onClick={() => alert("Clicked!")}>
          Click Me
        </Button>
      </div>
          <div className="p-2">
        <Button variant="outline" onClick={() => alert("Clicked!")}>
          Click Me
        </Button>
      </div>
    </>
  )
}

export default TestingButton