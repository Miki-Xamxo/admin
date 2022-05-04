import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./Components/Common/Header";
import { Word, Category, Language, Home } from "./pages";
import ErrorMessage from "./Components/Common/ErrorMessage";

import s from "./App.module.scss";

const App: React.FC = () => {
  const [showMessage, setShowMassege] = React.useState(true);

  return (
    <div>
      <Header />
      <main>
        <div className={s.container}>
          {showMessage && (
            <ErrorMessage
              message="Произошла ошибка при запросе данных! Пожалуйста обновите страницу"
              closeMessage={() => setShowMassege(false)}
            />
          )}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Category />} />
            <Route path="/categories/:id" element={<Word />} />
            <Route path="/language" element={<Language />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default App;
