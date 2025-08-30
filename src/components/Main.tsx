import { routes } from '@constants/routes';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function Main() {
  const [count, setCount] = useState(0);
  return (
    <main>
      <Routes>
        {routes.map((route) => (
          <Route key={route.value} path={route.path} element={<route.component count={count} setCount={setCount} />} />
        ))}
      </Routes>
    </main>
  )
}

export default Main;
