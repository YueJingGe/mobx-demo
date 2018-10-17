import React from 'react';
import TodoEntry from './TodoEntry';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';

export default function TodoApp() {
  return (
    <div>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          {/* input输入框 */}
          <TodoEntry />
        </header>
        {/* 待办事项列表 */}
        <TodoList />
        {/* 分类筛选条件 */}
        <TodoFooter />
      </section>
    </div>
  );
}