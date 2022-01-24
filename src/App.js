import Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';
import Radio from './Radio';
import RadioGroup from './RadioGroup';

function App() {
  const handleSelected = (value) => {
    console.log(value)
  }

  return (
    <div className="App">
      <div>
        <RadioGroup onChange={handleSelected}>
          <Radio value="hello"> hello </Radio>
          <Radio value="word"> word </Radio>
        </RadioGroup>
      </div>
      <div>
        <CheckboxGroup onChange={handleSelected}>
          <Checkbox value="box1" >box1</Checkbox>
          <Checkbox value="box2" >box2</Checkbox>
        </CheckboxGroup>

      </div>
    </div>
  );
}

export default App;
