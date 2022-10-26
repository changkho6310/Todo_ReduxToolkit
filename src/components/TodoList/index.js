import { Col, Row, Input, Button, Select, Tag } from "antd";
import { useState } from "react";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { todoListSelector } from "../../redux/selectors";

export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [todoPriority, setTodoPriority] = useState("Medium");

  const dispatch = useDispatch();

  // const todoList = useSelector((state) => state.todoList);
  // Nên tách ra 1 file selectors riêng để dễ quản lý, thay đổi
  const todoList = useSelector(todoListSelector);
  const handleAddButtonClick = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        priority: todoPriority,
        completed: false,
      })
    );

    setTodoName("");
    setTodoPriority("Medium");
  };

  const handleTodoNameChange = (e) => {
    setTodoName(e.target.value);
  };

  const handleTodoPriorityChange = (value) => {
    setTodoPriority(value);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              name={todo.name}
              priority={todo.priority}
              completed={todo.completed}
            />
          );
        })}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleTodoNameChange} />

          <Select value={todoPriority} onChange={handleTodoPriorityChange}>
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>

          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
