// компонент страницы «О проекте»

import { useEffect, React } from 'react';
import { useNavigate} from 'react-router-dom';

function NotFound()
{
  console.log("1");
  const navigate = useNavigate();

  useEffect(() => {
    const origBodyStyle = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "rgb(32, 32, 32)";
    return () => document.body.style.backgroundColor = origBodyStyle;
  }, []);
  
  return (
    <main className='page-error'>
      <h1 className='page-error__text'>
        <span className='page-error__code'>404</span>
        Страница не найдена
      </h1>      
      <button className='link page-error__link' onClick={() => navigate(-1)}>Назад</button>
    </main>
  );
}

export default NotFound;