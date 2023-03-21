import axios from "axios";
import { useState } from "react";
import './App.css'
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

function App() {

  const [prompt , setPrompt] = useState("");
  const [response , setResponse] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();
    
    var b = "";
    for(let i=0 ; i<serviceList.length ; i++)
    {
        b = b + serviceList[i].service + ",";
    }
    const a = "give a recipe of "+prompt + " calorie using " + b;
    console.log(a);

    axios.post("http://localhost:3001/chat",{a}).then((res) => {
      // console.log(res.data);
      setResponse(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  // console.log(prompt);
  // console.log("response is"+response);

  const [serviceList, setServiceList] = useState([{ service: "" }]);
  console.log(serviceList);

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: "" }]);
  };

  return (
    <div>
    <div className="three">
    <div className="two">
    <div className="form-field">
        {serviceList.map((singleService, index) => (
          <div key={index} className="services">
            <div className="first-division">
              <Input
                placeholder='med size'
                size='lg' 
                width='200px' 
                marginLeft="100px"
                name="service"
                type="text"
                id="service"
                value={singleService.service}
                onChange={(e) => handleServiceChange(e, index)}
                required
              />
              {serviceList.length - 1 === index && serviceList.length < 40 && (
                <Button
                  colorScheme='teal' 
                  size='lg' 
                  marginLeft="5px" 
                  variant='ghost'
                  type="button"
                  onClick={handleServiceAdd}
                  className="add-btn"
                >
                  <span>Add a Service</span>
                </Button>
              )}
            </div>
            <div className="second-division">
              {serviceList.length !== 1 && (
                <Button
                  colorScheme='teal' 
                  size='lg' 
                  marginLeft="140px" 
                  marginTop="2px"
                  marginBottom="5px"
                  variant='ghost'
                  type="button"
                  onClick={() => handleServiceRemove(index)}
                  className="remove-btn"
                >
                  <span>Remove</span>
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    <form onSubmit={handleSubmit}>
      <Input placeholder='med size' size='lg' width='200px' marginLeft="700px" marginTop="80px" type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)}/>
      <Button colorScheme='teal' size='lg' marginLeft="5px" type="submit" variant='ghost'>
        Submit
      </Button>
    </form>
    </div>
    <pre className="one">
      {response}
    </pre>
    </div>
  );
}

export default App;
