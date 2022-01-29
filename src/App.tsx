import React, { useState } from 'react';

import ListBox from './components/ListBox';
import TextField from './components/TextField';
import Button from './components/Button';

import useLocalStorage from './hooks/useLocalStorage';

type DataType = {
  name: string;
  surname: string;
}

const INITIAL_LIST = [
  { name: "Polar", surname: "Bear" },
  { name: "Black", surname: "Bear" },
  { name: "Brown", surname: "Bear" },
  { name: "Grizzly", surname: "Bear" },
];

function App() {
  const [filter, setFilter] = useState('');
  const [list, setList] = useLocalStorage<DataType[]>("data", INITIAL_LIST);
  const [selected, setSelected] = useState<number | undefined>(undefined);
  const [editor, setEditor] = useState<DataType | null>(null);
  

  const itemClickHandler = (i: number, item: DataType) => {
    if (selected !== undefined && selected === i) {
      setSelected(undefined);
      setEditor(null);
      return true;
    }
    setSelected(i);
    setEditor({ ...item });
  };

  const createClickHandler = () => {
    if (editor && editor.name && editor.surname) {
      setList([...list, editor]);
      setEditor(null);
    }
  };

  const updateClickHandler = () => {
    if (editor && editor.name && editor.surname) {
      const updatedList = list.map((item, index) => {
        if (index === selected) {
          return { ...editor };
        }
        return item;
      });
      setList(updatedList);
    }
  };

  const deleteClickHandler = () => {
    const updatedList = list.filter((item, index) => {
      if (index === selected) {
        return false;
      }
      return true;
    });
    setList(updatedList);
    setEditor(null);
    setSelected(undefined);
  };

  return (
    <div className="page">
      <div className="box">
        <div className="container mb-3">
          <TextField 
            name="T_prefix"
            label="Filter prefix"
            value={filter}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setFilter(e.target.value.toLowerCase());
            }}
          />
        </div>
        <div className="container mb-3">
          <div className="col">
            <ListBox
              items={list}
              renderItemLabel={(item) => `${item.name} ${item.surname}`}
              selectedItem={selected}
              setSelectedItem={itemClickHandler}
              filterProperty="surname"
              filter={filter}
            />
          </div>
          <div className="col span-7">
            <div className="container mb-3">
              <TextField 
                name="T_name"
                label="Name"
                value={editor ? editor.name : ''}
                span="4"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setEditor({
                    name: e.target.value,
                    surname: editor ? editor.surname : ''
                  });
                }}
              />
            </div>
            <div className="container mb-3">
              <TextField 
                name="T_surname"
                label="Surname"
                value={editor ? editor.surname : ''}
                span="4"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setEditor({
                    name: editor ? editor.name : '',
                    surname: e.target.value,
                  });
                }}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="col col-auto">
            <Button 
              name="B_create" 
              disabled={selected !== undefined}
              onClick={createClickHandler}>
              Create
            </Button>
          </div>
          <div className="col col-auto">
            <Button 
              name="B_update" 
              disabled={selected === undefined}
              onClick={updateClickHandler}>
              Update
            </Button>
          </div>
          <div className="col col-auto">
            <Button 
              name="B_delete" 
              disabled={selected === undefined}
              onClick={deleteClickHandler}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
