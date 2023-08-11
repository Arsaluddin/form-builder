import React from 'react'
import { useDrag, useDrop } from 'react-dnd';

const ItemType = 'OPTION';

const Option = ({ id, label, onRemove }) => {
  const [, dragRef] = useDrag({
    type: ItemType,
    item: { id, label },
  });

  return (
    <div ref={dragRef} className="p-2 bg-gray-300 border border-gray-400 m-1 cursor-pointer">
      {label}
      <button onClick={() => onRemove(id)} className="ml-2 text-red-600 font-semibold">
        Remove
      </button>
    </div>
  );
};

const Container = ({ id, onDrop, children }) => {
    const [{ isOver }, dropRef] = useDrop({
      accept: ItemType,
      drop: (item) => onDrop(id, item),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    });
  
    return (
      <div ref={dropRef} className={`w-40 h-40 border-2 border-dashed border-gray-400 m-1 ${isOver ? 'border-blue-500' : ''}`}>
        {children}
      </div>
    );
  };

function Catogary() {

    const [options, setOptions] = useState([]);
    const [containers, setContainers] = useState([]);
  
    const handleAddOption = () => {
      setOptions([...options, { id: Date.now(), label: `Option ${options.length + 1}` }]);
    };
  
    const handleAddContainer = () => {
      setContainers([...containers, { id: Date.now(), options: [] }]);
    };
  
    const handleRemoveOption = (id) => {
      const updatedOptions = options.filter((option) => option.id !== id);
      setOptions(updatedOptions);
    };
  
    const handleDrop = (containerId, item) => {
      const updatedContainers = containers.map((container) => {
        if (container.id === containerId) {
          return { ...container, options: [...container.options, item] };
        }
        return container;
      });
      setContainers(updatedContainers);
    };
  

  return (
    <div>
        <div className="flex space-x-4">
        <button onClick={handleAddOption} className="bg-blue-500 text-white px-4 py-2 rounded-md">Add Option</button>
        <button onClick={handleAddContainer} className="bg-green-500 text-white px-4 py-2 rounded-md">Add Container</button>
      </div>
      <div className="flex">
        {containers.map((container) => (
          <Container key={container.id} id={container.id} onDrop={handleDrop}>
            {container.options.map((option) => (
              <Option key={option.id} id={option.id} label={option.label} onRemove={handleRemoveOption} />
            ))}
          </Container>
        ))}
      </div>
    </div>
  )
}
export default Catogary