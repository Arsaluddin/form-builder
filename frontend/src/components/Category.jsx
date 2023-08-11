import React, { useState } from 'react';

function Category() {
  const [sourceItems, setSourceItems] = useState([]);
  const [targetContainers, setTargetContainers] = useState([]);

  const handleAddSourceItem = () => {
    setSourceItems([...sourceItems, { id: 'source-' + Date.now(), text: 'Source Item ' + (sourceItems.length + 1) }]);
  };

  const handleAddTargetItem = () => {
    const newTargetContainer = { id: 'target-' + Date.now(), items: [] };
    setTargetContainers([...targetContainers, newTargetContainer]);
  };

  const handleDragStart = (event, item) => {
    event.dataTransfer.setData('text/plain', JSON.stringify(item));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, containerId) => {
    event.preventDefault();

    const droppedItem = JSON.parse(event.dataTransfer.getData('text/plain'));
    const isSource = droppedItem.id.startsWith('source');

    if (isSource) {
      setSourceItems((prevItems) => prevItems.filter((item) => item.id !== droppedItem.id));
      setTargetContainers((prevContainers) => {
        const newContainers = prevContainers.map((container) => {
          if (container.id === containerId) {
            return {
              ...container,
              items: [...container.items, droppedItem],
            };
          }
          return container;
        });
        return newContainers;
      });
    }
  };

  return (
    <div>
      <div className="flex space-x-4">
        <button onClick={handleAddSourceItem} className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Add Source Item
        </button>
        <button onClick={handleAddTargetItem} className="bg-green-500 text-white px-4 py-2 rounded-md">
          Add Target Container
        </button>
      </div>

      <div className="flex">
        <div
          className="w-40 h-40 border-2 border-dashed border-gray-400 m-1"
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, 'source-container')}
        >
          <h3>Source</h3>
          {sourceItems.map((item) => (
            <div
              key={item.id}
              className="p-2 bg-gray-300 border border-gray-400 m-1 cursor-pointer"
              draggable
              onDragStart={(event) => handleDragStart(event, item)}
            >
              {item.text}
            </div>
          ))}
        </div>

        {targetContainers.map((container) => (
          <div
            key={container.id}
            className="w-40 h-40 border-2 border-dashed border-gray-400 m-1"
            onDragOver={handleDragOver}
            onDrop={(event) => handleDrop(event, container.id)}
          >
            <h3>{container.id}</h3>
            {container.items.map((item) => (
              <div
                key={item.id}
                className="p-2 bg-gray-300 border border-gray-400 m-1 cursor-pointer"
                draggable
                onDragStart={(event) => handleDragStart(event, item)}
              >
                {item.text}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
